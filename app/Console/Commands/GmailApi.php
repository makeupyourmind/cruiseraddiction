<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;

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

    	$tokenRequest = $client->get('http://192.168.88.161:32853/cruiser_gmail/quickstart.php');
    	$responseJson = $tokenRequest->getBody()->getContents();
	preg_match('/\"access_token\":\"(.*?)\"/s', $responseJson, $response);
	$accessToken = $response[1];

	$messagesRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages?access_token='.$accessToken);
    	$emailsList = $messagesRequest->getBody()->getContents();
	$emailsArray = json_decode($emailsList, true);
	foreach($emailsArray['messages'] as $email) {

	    $getEmailRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'?access_token='.$accessToken);
    	    $emailText = $getEmailRequest->getBody()->getContents();
	    $emailTextArray = json_decode($emailText, true);
	    if(!isset($emailTextArray['payload']['parts'][1]['body']['attachmentId'])) continue;
	    $attachmentId = $emailTextArray['payload']['parts'][1]['body']['attachmentId'];
	    
	    $attachmentRequest = $client->get('https://www.googleapis.com/gmail/v1/users/cruiseraddiction.web@gmail.com/messages/'.$email["id"].'/attachments/'.$attachmentId.'?access_token='.$accessToken);
    	    $attachmentArray = $attachmentRequest->getBody()->getContents();
	    $attachmentEncoded = json_decode($attachmentArray, true);
	    $attachmentEncodedData = $attachmentEncoded['data'];
	    $attachment = strtr($attachmentEncodedData, array('-' => '+', '_' => '/'));
    	    $myfile = fopen(storage_path('app/excel.xlsx'), 'w+');
	    //$myfile = fopen(__DIR__."/excel.xlsx", "w+");
	    fwrite($myfile, base64_decode($attachment));
	    fclose($myfile);
	    die();
	}

    }
}
