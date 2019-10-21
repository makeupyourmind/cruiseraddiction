<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Hash;
use Mail;
use Validator;
use App\User;

class ResetPasswordController extends BaseController
{
    public function resetPassword(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'newPassword' => 'required',
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $user_exist = User::where('email', $request->email)->get();

        if(!count($user_exist)){
            return $this->sendError('This email is not registered');
        }

        User::where('email', $user_exist[0]->email)->update(['password' => Hash::make($request->newPassword)]);

        Mail::send("email.resetPassword", ['user' => $user_exist], function ($mail) use ($user_exist) {
            $mail->from('support@gmail.com');
            $mail->to($user_exist[0]->email)
                 ->subject('Reset password');
        });

        return $this->sendResponse("Ok",'Your password was changed successfully');
    }

}
