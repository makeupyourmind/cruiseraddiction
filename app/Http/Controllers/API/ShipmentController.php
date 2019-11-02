<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\oauthAccessToken;
use Exception;
use Mail;
use App\VerificationToken;
use Illuminate\Support\Str;

class ShipmentController extends Controller
{
    public function rates(Request $request)
    {
        $client = new \GuzzleHttp\Client(['headers' => ['API_USERNAME' => 'Dmitriy',  'API_PASSWORD' => 'cokzzoa4ky2f']]);
        $url = "https://netparcel.com/shipping_service";
        $ratesRequest = [
            "rate" => [
                "origin" => [
                    "country" => "CA",
                    "postal_code" => "V3N4R3",
                    "province" => "ON",
                    "city" => "Burnaby",
                    "name" => null,
                    "address1" => "90 Maverick",
                    "address2" => null,
                    "address3" => null,
                    "phone" => null,
                    "fax" => null,
                    "address_type" => null,
                    "company_name" => null
                ],
                "destination" => [
                    "country" => $request->user['country'],
                    "postal_code" => $request->user['postal_code'],
                    "province" => "ON",
                    "city" => $request->user['city'],
                    "name" => $request->user['first_name'],
                    "address1" => $request->user['street_address'],
                    "address2" => "",
                    "address3" => null,
                    "phone" => $request->user['phone'],
                    "fax" => null,
                    "address_type" => null,
                    "company_name" => ""
                ],
                "packaging_information" => [
                    "packaging_type" => "My Packaging",
                    "packages" => $request->packages
                ]
            ]
        ];

        $postRequest = $client->post($url,  ['body' => json_encode($ratesRequest)]);

        $postResponse = $postRequest->getBody();
        //return $postResponse;
        $postResponse = json_decode($postResponse);
	if($request->create_ac){
	
	     $validator = Validator::make($request->user, [
	        'first_name' => 'required',
	        'last_name' => 'required',
	        'email' => 'required|email|unique:users,email',
	        'password' => 'required',
	        'c_password' => 'required|same:password',
	    ]);
	    
	     if($validator->fails()){
	        return  response()->json(  $validator->errors(), 402) ;
	     }
	     $input = $request->user;
	     $input['password'] = bcrypt($input['password']);
         $user = User::create($input);

         $token = Str::random();
         $verify = VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token 
         ]);
         $url = env('APP_URL')."/api/verifyRegistration?token=".$token;
         
         $data = array(
            'url'=> $url,
         );

         Mail::send("email.registration", $data , function ($mail) use ($input) {
            $mail->to($input['email'])
                 ->subject('Confirm registration');
         });
         //$success['token'] =  $user->createToken('MyApp')->accessToken;
         
	     return response()->json(['shipping' => $postResponse], 201);
	}                                                                        
        return response()->json(['shipping' => $postResponse], 200);
    }
}
