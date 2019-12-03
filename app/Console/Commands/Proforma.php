<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Part;
use Excel;
use Storage;

class Proforma extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse:proforma';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Parcing of Proforma';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        date_default_timezone_set('Canada/Eastern');
        echo "Parsing of Proforma is started. ".date('Y/m/d H:i:s')."\n";
        $hostname = env("IMAP_HOSTNAME");
        $username = env("IMAP_USERNAME");
        $password = env("IMAP_PASSWORD");
        $inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
        $emails = imap_search($inbox,'ALL');
        $dates = [];
        $most_recent = 0;
        if($emails) {
            rsort($emails);
            foreach($emails as $email_number) 
            {
                $overview = imap_fetch_overview($inbox,$email_number,0);
                $pos = strpos($overview[0]->subject, "Proforma");
                if($pos !== false){
                    array_push($dates, $overview[0]->date);
                }
            }
            foreach($dates as $key => $date){
                if( strtotime($date) < strtotime('now') && strtotime($date) > strtotime($dates[$most_recent]) ){
                    $most_recent = $key;
                }
            }
            if(!empty($dates)){
                $max = $dates[$most_recent];
            }
            else{
                echo "Parsing of Proforma is done. Email was not received ".date('Y/m/d H:i:s')."\n";
                return;
            }
            $exists = Storage::disk('local')->exists('ProformaTime.txt');
            if(!$exists){
                Storage::disk('local')->put('ProformaTime.txt', 'Contents');
            }
            $writedTime = Storage::get('ProformaTime.txt');
            if($max == $writedTime){
                echo "Parsing of Proforma is done. Files time is equal. New email was not received ".date('Y/m/d H:i:s')."\n";
                return;
            }
            Storage::put('ProformaTime.txt', $max); 
            foreach($emails as $email_number) 
            {
                $overview = imap_fetch_overview($inbox,$email_number,0);

                $message = imap_fetchbody($inbox,$email_number,2);

                $structure = imap_fetchstructure($inbox, $email_number);

                $attachments = array();

                if(isset($structure->parts) && count($structure->parts)) 
                {
                    for($i = 0; $i < count($structure->parts); $i++) 
                    {
                        $attachments[$i] = array(
                            'is_attachment' => false,
                            'filename' => '',
                            'name' => '',
                            'attachment' => '',
                            'date' => $overview[0]->date,
                            'subject' => $overview[0]->subject
                        );

                        if($structure->parts[$i]->ifdparameters) 
                        {
                            foreach($structure->parts[$i]->dparameters as $object) 
                            {
                                if(strtolower($object->attribute) == 'filename') 
                                {
                                    $attachments[$i]['is_attachment'] = true;
                                    $attachments[$i]['filename'] = $object->value;
                                }
                            }
                        }

                        if($structure->parts[$i]->ifparameters) 
                        {
                            foreach($structure->parts[$i]->parameters as $object) 
                            {
                                if(strtolower($object->attribute) == 'name') 
                                {
                                    $attachments[$i]['is_attachment'] = true;
                                    $attachments[$i]['name'] = $object->value;
                                }
                            }
                        }

                        if($attachments[$i]['is_attachment']) 
                        {
                            $attachments[$i]['attachment'] = imap_fetchbody($inbox, $email_number, $i+1);

                            if($structure->parts[$i]->encoding == 3) 
                            { 
                                $attachments[$i]['attachment'] = base64_decode($attachments[$i]['attachment']);
                            }
                            elseif($structure->parts[$i]->encoding == 4) 
                            { 
                                $attachments[$i]['attachment'] = quoted_printable_decode($attachments[$i]['attachment']);
                            }
                        }
                    }
                }

                foreach($attachments as $attachment)
                {
                    $pos = strpos($attachment["subject"], "Proforma");
                    if($attachment["date"] == $max && $pos !== false){
                        $proformaName = strpos($attachment["name"], "Proforma");
                        if($proformaName){
                            $filename = $attachment['name'];
                            if(empty($filename)) $filename = $attachment['filename'];
                            if(empty($filename)) $filename = time() . ".dat";
                            $dst = './storage/app/proforma.xls';
                            $fp = fopen($dst, "w+");
                            // $fp = fopen("./" . $email_number . "-" . $filename, "w+");
                            fwrite($fp, $attachment['attachment']);
                            fclose($fp);
                        }
                    }
                }
            }

        } 
        imap_close($inbox);
        /////////////////////////////////////////////////////////////////////
        $data = Excel::toCollection(null, 'proforma.xls', 'local');

        if(count((array)$data) > 0 ){
            foreach($data->toArray() as $key => $value){
                foreach($value as $row){
                    if($row[0] >= 1 && $row[6] == "STOCK"){
                        $insert_data [] = array(
                            'S/N' => $row[0],
                            'ORDER DATE' => $row[1],
                            'ALGORITHM' => $row[2],
                            'REF' => $row[3],
                            'ORDER NUMDER' => $row[4],
                            'ORDER ROW NN' => $row[5],
                            'CLIENT COLUMN 1' => $row[6],
                            'CLIENT COLUMN 2' => $row[7],
                            'CLIENT COLUMN 3' => $row[8],
                            'CLIENT COLUMN 4' => $row[9],
                            'CLIENT COLUMN 5' => $row[10],
                            'BRAND' => $row[11],
                            'DESCRIPTION' => $row[12],
                            'PART NUMBER' => $row[13],
                            'QTY' => $row[14],
                            'UNIT PRICE' => $row[15],
                            'TOTAL TAXABLE PRICE' => $row[16],
                            'VAT AMOUNT' => $row[17],
                            'TOTAL PRICE PAYABLE (INCL. VAT)' => $row[18],                          
                        );
                    }
                }
            }

            $insert_data_unique = self::unique_key($insert_data, 'PART NUMBER');

            foreach($insert_data_unique as $data){
                // $data["PART NUMBER"] = str_replace( "-", "", $data["PART NUMBER"]);
                $part = Part::where([ 
                            ['brand_name', $data["BRAND"]],
                            ['part_number', str_replace( "-", "", $data["PART NUMBER"]) ],
                            ['warehouse', 'canada']
                        ])->first();
                if($part && $part->changedAdministrator == true){
                    $part->update(['price' => $part->price, 'qty' => $part->qty + $data["QTY"] ]);
                }
                else if($part && $part->changedAdministrator == false){
                    $weight = (float)str_replace(',' , '.', $part->weight_physical);
                    $cost = (float)str_replace(',' , '.', $data["UNIT PRICE"]);
                    $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                    $part->update(['price' => $price, 'qty' => $part->qty + $data["QTY"] ]);
                }
                else if(!$part){
                    $part = Part::where([ 
                        ['brand_name', $data["BRAND"]],
                        ['part_number', str_replace( "-", "", $data["PART NUMBER"]) ]
                    ])->first();
                    if($part){
                        $weight = (float)str_replace(',' , '.', $part->weight_physical);
                        $cost = (float)str_replace(',' , '.', $data["UNIT PRICE"]);
                        $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                        $uniqueHash = md5($data["BRAND"].$data["PART NUMBER"]."canada");
                        Part::create([
                            "brand_name" => $data["BRAND"],
                            "part_number" => str_replace( "-", "", $data["PART NUMBER"]),
                            "description_english" => $data["DESCRIPTION"],
                            "qty" => $data["QTY"],
                            "warehouse" => "canada",
                            "price" => $price,
                            "unique_hash" => $uniqueHash,
                            "is_stock_ca" => 1,
                            "full_part_number" => $data["PART NUMBER"]
                        ]);
                    }
                }
            }
        }
        echo "Parsing of Proforma is done. Successfully ".date('Y/m/d H:i:s')."\n";
    }

    private function unique_key($array, $keyname){
        $new_array = array();

        foreach($array as $key => $value){

          if(!isset($new_array[$value[$keyname]])){
             $new_array[$value[$keyname]] = $value;
          }

        }
        $new_array = array_values($new_array);
        return $new_array;
    } 
}