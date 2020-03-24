<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Jobs\ResetPasswordMessage;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\User;
use App\Model\PasswordResets;

class ResetPasswordController extends BaseController
{
    public function resetPassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'newPassword' => 'required',
            'token' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $user_exist = PasswordResets::where('token', $request->token)->first();

        if (!$user_exist) {
            return $this->sendError("Hash is not available");
        }

        User::where('email', $user_exist->email)->update(['password' => Hash::make($request->newPassword)]);

        $user_exist->delete();
        // $data = ['user' => $user_exist];
        ResetPasswordMessage::dispatch($email);

        return $this->sendResponse("Ok", 'Your password was changed successfully');
    }
}
