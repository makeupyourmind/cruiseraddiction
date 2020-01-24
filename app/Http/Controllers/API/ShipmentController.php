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
        $client = new \GuzzleHttp\Client(['headers' => ['API_USERNAME' => 'CRUISERADDICTION',  'API_PASSWORD' => '9ljplpz3hxst']]);
        $url = "https://netparcel.com/shipping_service";
        //Dmitriy cokzzoa4ky2f
        $first_name = array_key_exists('first_name', $request->user) ? $request->user['first_name'] : '';
        $street_address = array_key_exists('street_address', $request->user) ? $request->user['street_address'] : '';
        $phone = array_key_exists('phone', $request->user) ? $request->user['phone'] : '';
        $province = array_key_exists('state', $request->user['state']) ? $request->user['state'] : 'ON';

        $ratesRequest = [
            "rate" => [
                "origin" => [
                    "country" => "CA",
                    "postal_code" => "N5Y0B2",
                    "province" => "ON",
                    "city" => "London",
                    "name" => null,
                    "address1" => "918-625 Kipps Lane",
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
                    "province" => $province,
                    "city" => $request->user['city'],
                    "name" => $first_name,
                    "address1" => $street_address,
                    "address2" => "",
                    "address3" => null,
                    "phone" => $phone,
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
                return  response()->json(  $validator->errors(), 422) ;
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
            return response()->json(['shipping' => $postResponse], 201);
        }                                                                        
        return response()->json(['shipping' => $postResponse], 200);
    }
}
