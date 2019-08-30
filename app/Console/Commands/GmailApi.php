<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Excel;
use App\Model\Attachment;

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
	$client = new \GuzzleHttp\Client();

    	$tokenRequest = $client->get('http://91.228.236.253:32853/cruiser_gmail/quickstart.php');
    	$responseJson = $tokenRequest->getBody()->getContents();
	preg_match('/\"access_token\":\"(.*?)\"/s', $responseJson, $response);
	$accessToken = $response[1];

	$messagesRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages?access_token='.$accessToken);
    	$emailsList = $messagesRequest->getBody()->getContents();
	$emailsArray = json_decode($emailsList, true);
	Attachment::truncate();
	foreach($emailsArray['messages'] as $email) {

	    $getEmailRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'?access_token='.$accessToken);
    	    $emailText = $getEmailRequest->getBody()->getContents();
	    $emailTextArray = json_decode($emailText, true);
	    //dd($emailTextArray['payload']['parts'][1]['filename']);
	    if(!isset($emailTextArray['payload']['parts'][1]['body']['attachmentId']) || substr_count($emailTextArray['payload']['parts'][1]['filename'], '_CANLON') == 0 ) continue;
	    $attachmentId = $emailTextArray['payload']['parts'][1]['body']['attachmentId'];
	    
	    $attachmentRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'/attachments/'.$attachmentId.'?access_token='.$accessToken);
    	    $attachmentArray = $attachmentRequest->getBody()->getContents();
	    $attachmentEncoded = json_decode($attachmentArray, true);
	    $attachmentEncodedData = $attachmentEncoded['data'];
	    $attachment = strtr($attachmentEncodedData, array('-' => '+', '_' => '/'));
	    $filePath = storage_path('app/excel.xls');
    	    $myfile = fopen($filePath, 'w+');
	    fwrite($myfile, base64_decode($attachment));
	    fclose($myfile);

	    //$excelData = Excel::import('', $filePath)->toArray('', $filePath);
	    $excelData = Excel::toArray('', $filePath);
	    $newAttachmentData = array();
	    foreach($excelData[0] as $excelRow) {
		if(!is_numeric($excelRow[4])) continue;
		$newAttachmentData = [
		    'client_column_one' => $excelRow[5],
		    'client_column_two' => $excelRow[6],
		    'artikul'	        => $excelRow[13],
		    'status'		=> $excelRow[19], 
		    'order_date'	=> $excelRow[0]
		];
		Attachment::create($newAttachmentData);
		//dd($excelRow);
		
	    }
	    die();
	}

    }
}
