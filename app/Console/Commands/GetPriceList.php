<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Storage;
use Carbon\Carbon;
use App\Model\Part;
use App\Model\PartTmp;
use DB;
use App\Model\AvailabilityNotification;
use Mail;


class GetPriceList extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:pricelist';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Receiving pricelist from providers FTP';

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
        //$files = Storage::disk('ftp')->files('CANLON+CPT+Emirates+USD+Cashless payment+Delivery not included in prices+MULTIBRAND.txt', true);
        date_default_timezone_set('Canada/Eastern');
        echo "Get price parser is started ".date('Y/m/d H:i:s')."\n";
        $file = 'CANLON+CPT+Emirates+USD+Cashless payment+Delivery not included in prices+MULTIBRAND.txt';
        $contents = Storage::disk('ftp')->get($file);
        $time = Storage::disk('ftp')->lastModified($file);

        $exists = Storage::disk('local')->exists('GetPriceList.txt');
        if(!$exists){
            Storage::disk('local')->put('GetPriceList.txt', 'Contents');
        }

        $writedTime = Storage::get('GetPriceList.txt');
        if($time == $writedTime){
            echo "Get price is done. Files time is equal ".date('Y/m/d H:i:s')."\n";
            return;
        }
        Storage::put('GetPriceList.txt', $time); 

        Storage::put('pricelist.csv', $contents);
        
        $path = storage_path('app/pricelist.csv');
        $fileContent = Storage::get('pricelist.csv');

        $word[0] = 'Brand';
        $word[1] = 'PartNumber';
        $word[2] = 'DescriptionEnglish';
        $word[3] = 'WeightPhysical';
        $word[4] = 'WeightVolumetric';
        $word[5] = 'StockQty';
        $word[6] = 'Supplier';
        $word[7] = 'Price';

        $replacement[0] = 'brand_name';
        $replacement[1] = 'part_number';
        $replacement[2] = 'description_english';
        $replacement[3] = 'weight_physical';
        $replacement[4] = 'weight_volumetric';
        $replacement[5] = 'qty';
        $replacement[6] = 'warehouse';
        $replacement[7] = 'price';

        $fileContent = str_replace($word, $replacement, $fileContent);

        Storage::put('pricelist.csv', $fileContent);
        //dd($fileContent);

        $data   = array_map(function($datas) { return str_getcsv($datas,";"); }, file($path));
        ////Storage::delete('pricelist.csv');

        $validCsv = array();
        $uniqueCheck = '';
        $parsingLogText = '';
        $r = 0;
        $cm = 0;

        //$oldParts = Part::all();

        foreach($data as $row) {
            var_dump($r, $cm);

            $r++;
            $cm++;

            if ($r != 1) {
                $row[8] = md5($row[0].$row[1].$row[6]);
                $row[1] = str_replace("-", '', str_replace('"', '', str_replace("'", '', $row[1])));
                $row[9] = $row[1];
                $row[3] = (float)str_replace(',', '.', $row[3]);
                $row[4] = (float)str_replace(',', '.', $row[4]);
                $row[7] = (float)str_replace(',', '.', $row[7]);
		        $row[7] = (float)((($row[3]*6.0)+$row[7]*0.061+$row[7])*1.3)*1.037;

                if (is_null($row[3]) || is_null($row[4]) || is_null($row[5]) || is_null($row[7])) {
                    $parsingLogText .= $r . " " . Carbon::now() . " NULL or empty value" . "\n";
                    continue;
                }
                if (!is_float($row[3])) {
                    $parsingLogText .= $r . " " . Carbon::now() . " WeightPhysical is not float" . "\n";
                    continue;
                }

                if (!is_float($row[4])) {
                    $parsingLogText .= $r . " " . Carbon::now() . " WeightVolumetric is not float" . "\n";
                    continue;
                }

                if (is_integer($row[5])) {
                    $parsingLogText .= $r . " " . Carbon::now() . " StockQty is not float" . "\n";
                    continue;
                }

                if (is_integer($row[7])) {
                    $parsingLogText .= $r . " " . Carbon::now() . " Price is not float" . "\n";
                    continue;
                }

               // $part = $oldParts->firstWhere('unique_hash', $row[8]);
                /*$part = Part::where('unique_hash', $row[8])->first();

                if($part) {
                    if($part->stock_history != '') {
                        $unsHistory = unserialize($part->stock_history);
                    } else {
                        $unsHistory = array();
                    }
                    $unsCount = count($unsHistory);
                    $unsHistory[$unsCount]['date'] = date("Y-m-d");
                    $unsHistory[$unsCount]['qty'] = $row[5];
                    $unsHistory[$unsCount]['price'] = $row[7];
                    $serHistory = serialize($unsHistory);
                    //$row[9] = $serHistory;
                } else {
                    //$row[9] = '';
                }
                */

                ///////FILES ARCHIVING !!!!!!

                /*
                $archiveFilePath =  $row[0].'/'.$row[8].'.txt';
                $archivedText = Carbon::createFromDate().'|'.$row[5].'|'.$row[7].'|'.$row[6];
                if(Storage::exists($archiveFilePath)) {
                    Storage::append($archiveFilePath, $archivedText);
                } else {
                    Storage::put($archiveFilePath, $archivedText);
                }
                */

                /////////

            } else {
                $row[8] = 'unique_hash';
                $row[9] = 'full_part_number';

            }

            array_splice($row, 0,0, '');

            $validCsv[] = $row;

        }
        //var_dump(count($validCsv));
        $fp = fopen(storage_path('app/pricelistNew.csv'), 'w');
        foreach($validCsv as $fields) {
            fputcsv($fp, $fields, ';');
        }
        fclose($fp);

        PartTmp::truncate();
        // "storage/app/pricelistNew.csv"
        // storage_path('app/pricelistNew.csv')
        $req1 = DB::connection()->getpdo()->exec("LOAD DATA LOCAL INFILE '". storage_path('app/pricelistNew.csv') ."' 
                    INTO TABLE parts_tmp 
                    FIELDS TERMINATED BY ';' 
                    ENCLOSED BY '\"'
                    LINES TERMINATED BY '\n'
                    IGNORE 1 ROWS;");

        $req2 = DB::connection()->getpdo()->exec("INSERT INTO parts
                    (brand_name, part_number, description_english, weight_physical, weight_volumetric, qty, warehouse, 
                    price, unique_hash, full_part_number)
                    SELECT brand_name, part_number, description_english, weight_physical, weight_volumetric, qty, warehouse, 
                    price, unique_hash, part_fits FROM parts_tmp
                    ON DUPLICATE KEY UPDATE
                    parts.qty = parts_tmp.qty,
                    parts.price = parts_tmp.price,
                    parts.full_part_number = parts_tmp.part_fits");

        $req3 =  DB::connection()->getpdo()->exec("DELETE FROM parts WHERE LOWER(brand_name) NOT IN ('koyo', 'toyo', 'taiho', 'nsk', 'hkt', 'mitsuboshi', 'ntn', 'aisin', 'valeo', 'shimahide', '555', 'toyota')");
        echo "Get price is done.Successfully ".date('Y/m/d H:i:s')."\n";
        self::check_in_availability_notification();
    }

    public function check_in_availability_notification(){
        $request = AvailabilityNotification::all()->toArray();

        if(count($request) > 0){
            $data = array();

            foreach($request as $position => $value){
                $found_key = array_search($value['user_email'], array_column($request, 'user_email'));
                if( isset($data[$found_key]['user_email']) && $data[$found_key]['user_email'] == $value['user_email']){
                    $data[$found_key]['data'][$position]['id'] = $value['id'];
                    $data[$found_key]['data'][$position]['part_number'] = $value['part_number'];
                    $data[$found_key]['data'][$position]['brand_name'] = $value['brand_name'];
                    $data[$found_key]['data'][$position]['description'] = $value['description'];
                    $data[$found_key]['data'] = array_values($data[$found_key]['data']);
                }
                else{
                    $data[$found_key]['user_email'] = $value['user_email'];
                    $data[$found_key]['data'][0]['id'] = $value['id'];
                    $data[$found_key]['data'][0]['part_number'] = $value['part_number'];
                    $data[$found_key]['data'][0]['brand_name'] = $value['brand_name'];
                    $data[$found_key]['data'][0]['description'] = $value['description'];
                    $data[$found_key]['data'] = array_values($data[$found_key]['data']);
                }
            }
            $data = array_values($data);

            $in_available_arr = array();
            foreach($data as $key => $value){
                foreach( $value['data'] as $index => $element){
                    $in_available = Part::where([
                        ['part_number', $element['part_number']],
                        ['brand_name', $element['brand_name']],
                        ['qty', '>', '0'],
                        ['warehouse', 'O 1 d.']
                    ])->orWhere([
                        ['part_number', $element['part_number']],
                        ['brand_name', $element['brand_name']],
                        ['qty', '>', '0'],
                        ['warehouse', 'E 1 d.']
                    ])->first();
                    if($in_available){
                        $in_available_arr[$key]['user_email'] = $value['user_email'];
                        $in_available_arr[$key]['can_be_deleted'][$index] = $element['id'];
                        $in_available_arr[$key]['data'][$index]['brand_name'] = $in_available->brand_name;
                        $in_available_arr[$key]['data'][$index]['part_number'] = $in_available->part_number;
                        $in_available_arr[$key]['data'][$index]['full_part_number'] = $in_available->full_part_number;
                        $in_available_arr[$key]['data'][$index]['warehouse'] = $in_available->warehouse;
                        $in_available_arr[$key]['data'][$index]['warehouse_number'] = $in_available->warehouse == "O 1 d." ? 2 : 3;
                        $in_available_arr[$key]['data'][$index]['description'] = $element['description'];
                        $in_available_arr[$key]['data'][$index]['qty'] = $in_available->qty;
                        $in_available_arr[$key]['data'][$index]['link'] = env('APP_URL_FRONT')."/products/$in_available->brand_name/$in_available->part_number";
                        $in_available_arr[$key]['can_be_deleted'] = array_values($in_available_arr[$key]['can_be_deleted']);
                        $in_available_arr[$key]['data'] = array_values($in_available_arr[$key]['data']);
                        $in_available_arr= array_values($in_available_arr);
                    }
                }
            }

            if(count($in_available_arr) > 0){
                foreach($in_available_arr as $available){
                    AvailabilityNotification::destroy($available['can_be_deleted']);
                    $pass_to_email = array(
                        'data' => $available["data"]
                    );
                    Mail::send('email.availability_notification', $pass_to_email, function ($message) use ($available) {
                        $message->to($available['user_email'])
                                ->subject('Availability Notification');
                    });
                }
            }
        }

        echo "\nCheck in availability notification is done".date('Y/m/d H:i:s');
    }
}