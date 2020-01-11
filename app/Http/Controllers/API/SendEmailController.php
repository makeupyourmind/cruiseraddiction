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

        Mail::send("email.contact_us", $data , function ($mail){
            $mail->to('yarik.roterdamskiy@gmail.com')
                 ->subject('Contact us');
        });

        return $this->sendResponse('', 'Ok');
    }
}
