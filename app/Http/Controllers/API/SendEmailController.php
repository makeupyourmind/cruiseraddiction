<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use Validator;
use Mail;

class SendEmailController extends BaseController
{
    public function sendEmail(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'message' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $data = [
            'variables' => $request->all()
        ];
        $email = $request->email;

        Mail::send("email.contact_us", $data , function ($mail) use ($email){
            $mail->to(env('SEND_EMAIL_TO'))
                 ->replyTo($email)
                 ->subject('Contact us');
        });

        return $this->sendResponse('', 'Ok');
    }
}
