<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Jobs\SendEmailMessage;
use Validator;

class SendEmailController extends BaseController
{
    public function sendEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
            'phone' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $data = [
            'variables' => $request->all(),
            'user_email' => $request->email
        ];

        SendEmailMessage::dispatch($request->email, $data);

        return $this->sendResponse('', 'Email was sent successfully');
    }
}
