<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Excel;
use App\Model\Attachment;
use Storage;

class GmailApi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:gmail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get attachments from gmail';

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
		echo "GmailApi is started : ".date('Y/m/d H:i:s')."\n";
		$hostname = env("IMAP_HOSTNAME");
        $username = env("IMAP_USERNAME");
        $password = env("IMAP_PASSWORD");
        $inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
        $emails = imap_search($inbox,'ALL');
        $dates = [];
        $most_recent = 0;
        if($emails) {
            //rsort($emails);
            foreach($emails as $email_number) 
            {
                $overview = imap_fetch_overview($inbox,$email_number,0);
                $pos = strpos($overview[0]->subject, "Orders");
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
                echo "GmailApi is done. Email was not received ".date('Y/m/d H:i:s')."\n";
                return;
            }
            $exists = Storage::disk('local')->exists('GmailApiTime.txt');
            if(!$exists){
                Storage::disk('local')->put('GmailApiTime.txt', 'Contents');
            }
            $writedTime = Storage::get('GmailApiTime.txt');
            if($max == $writedTime){
                echo "GmailApi is done. Files time is equal ".date('Y/m/d H:i:s')."\n";
                return;
            }
            Storage::put('GmailApiTime.txt', $max); 
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
                    $pos = strpos($attachment["subject"], "Orders");
                    if($attachment["date"] == $max && $pos !== false){
                        $dst = './././storage/app/GmailApi.xls';
                        $fp = fopen($dst, "w+");
                        fwrite($fp, $attachment['attachment']);
                        fclose($fp);
                    }
                }
            }

        } 
		imap_close($inbox);
		$data = Excel::toCollection(null, 'GmailApi.xls', 'local');
		if(count((array)$data) > 0 ){
            Attachment::truncate();
            foreach($data->toArray() as $key => $value){
                foreach($value as $row){
                    if($row[0] != "ДАТА ЗАКАЗА"){
                        if(substr_count($row[19], 'ОТГРУЗИЛИ') > 0){
                            $statusId = 3;
                        }
                        else if(substr_count($row[19], 'НЕТ') > 0){
                            $statusId = 4;
                        }
                        else if(substr_count($row[19], 'ЗАКУПЛЕНО') > 0){
                            $statusId = 2;
                        }
                        else if(substr_count($row[19], 'В_РАБОТЕ') > 0){
                            $statusId = 1;
                        }else{
                            $statusId = 0;
                        }
                        $newAttachmentData = [
                            'client_column_one' => $row[5],
                            'client_column_two' => $row[6],
                            'artikul'	        => $row[13],
                            'status'		=> $row[19], 
                            'order_date'	=> $row[0],
                            'status_id'		=> $statusId
                        ];
                        Attachment::create($newAttachmentData);
                    }
                }
            }
		};
		echo "GmailApi done. Successfully ".date('Y/m/d H:i:s')."\n";
	// date_default_timezone_set('Canada/Eastern');
	// $client = new \GuzzleHttp\Client();

	// //$tokenRequest = $client->get('http://91.228.236.253:32853/cruiser_gmail/quickstart.php');
	// $tokenRequest = $client->get('http://localhost:8000/cruiser_gmail');
	// // $responseJson = $tokenRequest->getBody()->getContents();
	// $responseJson = $tokenRequest;
	// print_r($responseJson);
	// // preg_match('/\"access_token\":\"(.*?)\"/s', $responseJson, $response);
	// // print_r($response);
	// return;
	// // $accessToken = $response[1];
	// // $tokenPath = "./././storage/app/gmail/tokens/gmail-json.json";
	// // $accessToken = json_decode(file_get_contents($tokenPath), true);
	// // // print_r($accessToken['access_token']);
	// // $accessToken = $accessToken['access_token'];
	// //$accessToken = "ya29.Il-vB0od1_ZvauaSn5z1PrjSy2Nt3pHSldUguAZK4uAL1gaoN6meWm9rSUWZjrO9emTdZXSj4OcouDPZB0hgp9CE0THObY6actWFlk8FW-1TxXyviQgQWIL0XDHjJ_VPSA";
	// // return;
	// $messagesRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages?access_token='.$accessToken);
    // 	$emailsList = $messagesRequest->getBody()->getContents();
	// $emailsArray = json_decode($emailsList, true);
	// Attachment::truncate();
	// foreach($emailsArray['messages'] as $email) {

	//     $getEmailRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'?access_token='.$accessToken);
    // 	    $emailText = $getEmailRequest->getBody()->getContents();
	//     $emailTextArray = json_decode($emailText, true);
	//     //dd($emailTextArray['payload']['parts'][1]['filename']);
	//     if(!isset($emailTextArray['payload']['parts'][1]['body']['attachmentId']) || substr_count($emailTextArray['payload']['parts'][1]['filename'], '_CANLON') == 0 ) continue;
	//     $attachmentId = $emailTextArray['payload']['parts'][1]['body']['attachmentId'];
	    
	//     $attachmentRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'/attachments/'.$attachmentId.'?access_token='.$accessToken);
    // 	    $attachmentArray = $attachmentRequest->getBody()->getContents();
	//     $attachmentEncoded = json_decode($attachmentArray, true);
	//     $attachmentEncodedData = $attachmentEncoded['data'];
	//     $attachment = strtr($attachmentEncodedData, array('-' => '+', '_' => '/'));
	//     $filePath = storage_path('app/excel.xls');
    // 	    $myfile = fopen($filePath, 'w+');
	//     fwrite($myfile, base64_decode($attachment));
	//     fclose($myfile);

	//     //$excelData = Excel::import('', $filePath)->toArray('', $filePath);
	//     $excelData = Excel::toArray('', $filePath);
	//     $newAttachmentData = array();
	//     foreach($excelData[0] as $excelRow) {
	// 	if(substr_count($excelRow[19], 'ОТГРУЗИЛИ') > 0) {
	// 	    $statusId = 3;
	// 	} elseif($excelRow[19] == 'ЗАКУПЛЕНО') {
	// 	    $statusId = 2;
	// 	} elseif($excelRow[19] == 'В_РАБОТЕ') {
	// 	    $statusId = 1;
	// 	} elseif($excelRow[19] == 'НЕТ') {
	// 	    $statusId = 4;
	// 	} else $statusId = 0;
	// 	if(!is_numeric($excelRow[4])) continue;
	// 	$newAttachmentData = [
	// 	    'client_column_one' => $excelRow[5],
	// 	    'client_column_two' => $excelRow[6],
	// 	    'artikul'	        => $excelRow[13],
	// 	    'status'		=> $excelRow[19], 
	// 	    'order_date'	=> $excelRow[0],
	// 	    'status_id'		=> $statusId
	// 	];
	// 	Attachment::create($newAttachmentData);
	// 	//dd($excelRow);
		
	// 	}
	// 	echo "Gmail is done : ".date('Y/m/d H:i:s')."\n"; 
	//     die();
	// }
 
    }
}
