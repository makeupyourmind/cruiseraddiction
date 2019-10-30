<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Hash;
use Mail;
use Validator;
use App\User;
use App\Model\PasswordResets;

class ResetPasswordController extends BaseController
{
    public function resetPassword(Request $request){

        $validator = Validator::make($request->all(), [
            'newPassword' => 'required'
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       
        }

        // $user_exist = User::where('email', $request->email)->get();
        $user_exist = PasswordResets::where('token', $request->token)->first();

        if(!$user_exist){
            return $this->sendError("Hash is not available");
        }

        User::where('email', $user_exist->email)->update(['password' => Hash::make($request->newPassword)]);
        
        PasswordResets::where('token', $request->token)->delete();

        Mail::send("email.resetPassword", ['user' => $user_exist], function ($mail) use ($user_exist) {
            // $mail->from('cruiseraddiction.web@gmail.com');
            $mail->to( $user_exist->email)
                 ->subject('Reset password');
        });

        return $this->sendResponse("Ok",'Your password was changed successfully');
    }

}
