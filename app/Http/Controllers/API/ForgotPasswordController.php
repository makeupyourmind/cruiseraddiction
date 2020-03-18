<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Jobs\ForgotPasswordMessage;
use Validator;
use App\User;
use App\Model\PasswordResets;
use Redirect;
use Illuminate\Support\Str;

class ForgotPasswordController extends BaseController
{
    public function forgotPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'url' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $user_exist = User::where('email', $request->email)->first();

        if (!$user_exist) {
            return $this->sendError('This email is not registered');
        }

        $token = Str::random();

        PasswordResets::create([
            'email' => $user_exist->email,
            'token' => $token,
            'url' => $request->url . "/" . $token
        ]);

        $content = [
            'url' => env('APP_URL_BACK') . "/api/forgot?token=$token",
            'button' => 'Click Here'
        ];

        ForgotPasswordMessage::dispatch($user_exist->email, $content);

        return $this->sendResponse("", 'Please check your email');
    }

    public function checkToken(Request $request)
    {
        $password_reset = PasswordResets::where('token', $request->query('token'))->first();

        if (!$password_reset) {
            $param = base64_encode(json_encode("Opps. Something went wrong"));
            return Redirect::to(env('APP_URL_FRONT') . "?warn=$param");
        }

        return Redirect::to($password_reset->url);
    }
}
