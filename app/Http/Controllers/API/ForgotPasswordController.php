<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\User;
use App\Model\PasswordResets;
use Mail;
use App\Mail\ForgotPassword;
use Redirect;
use Illuminate\Support\Str;

class ForgotPasswordController extends BaseController
{
    public function forgotPassword(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $user_exist = User::where('email', $request->email)->get();

        if(!count($user_exist)){
            return $this->sendError('This email is not registered');
        }

        $token = Str::random();

        PasswordResets::create([
            'email' => $user_exist[0]->email,
            'token' => $token,
            'url' => $request->url ."/". $token
        ]);
        
        $content = [
    		'url'=> env('APP_URL')."/api/forgot/$token", 
    		'button' => 'Click Here'
        ];
        
        Mail::to($user_exist[0]->email)->send(new ForgotPassword($content));

        return $this->sendResponse("",'Please check your email');
    }

    public function checkToken($token){
        $user_exist = PasswordResets::where('token', $token)->get();
        
        if(!count($user_exist)){
            return $this->sendError('Hash is wrong');
        }
        // return Redirect::to("http://".$user_exist[0]->url);
        return Redirect::to($user_exist[0]->url);
    }
}
