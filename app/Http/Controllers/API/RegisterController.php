<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Jobs\SendRegistrationMessage;
use App\Jobs\SendRegistrationSuccessMessage;
use App\User;
use App\Model\Guest;
use App\VerificationToken;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\oauthAccessToken;
use App\Model\PaymentHistoryFile;
use App\Model\Order;
use Illuminate\Support\Facades\Input;
use Redirect;
use Illuminate\Support\Str;
use App\Model\Role;

class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $role = Role::where('name', 'User')->first();
        $user = User::create($input);
        $user->roles()->attach($role);

        $token = Str::random();
        VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token
        ]);

        $url = env('APP_URL_BACK') . "/api/verifyRegistration?token=" . $token;
        $data = array(
            'url' => $url,
        );

        SendRegistrationMessage::dispatch($user->email, $data);

        return $this->sendResponse("", 'Check your email');
    }

    public function verifyRegistration(Request $request)
    {

        $foundToken = VerificationToken::with(['user'])->where('token', $request->query("token"))->first();

        if (!$foundToken) {
            $param = base64_encode(json_encode("NOT FOUND TOKEN"));
            return Redirect::to(env('APP_URL_FRONT') . "?warn=$param");
        }

        if ($foundToken->user->isVerified) {
            return Redirect::to(env("REDIRECTION_AFTER_VERIFIED_REGISTRATION"));
        }

        $user = User::where('email', $foundToken->user->email)->first();

        $guest = Guest::where('email', $foundToken->user->email)->first();
        if ($guest) {
            Order::where('guest_id', $guest->id)->update([
                'user_id' => $user->id
            ]);
            PaymentHistoryFile::where('guest_id', $guest->id)->update([
                'user_id' => $user->id
            ]);
            $guest->delete();
        }

        $user->update([
            'isVerified' => 1
        ]);

        SendRegistrationSuccessMessage::dispatch($foundToken->user->email);

        return Redirect::to(env('REDIRECTION_AFTER_VERIFIED_REGISTRATION'));
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = Auth::user();

            if ($user->isVerified) {
                $success['token'] = $user->createToken('New token')->accessToken;
                $success['user_id'] = $user->id;
                $success['user_role'] = $user->roles[0]->name;
                return $this->sendResponse($success, 'User authorized successfully.');
            } else {
                return $this->sendError('You did not confirm email.', '', 400);
            }
        }

        return $this->sendError('Authorization failed. Wrong credentials', '', 400);
    }

    public function logout()
    {

        oauthAccessToken::where('user_id', Auth::user()->id)->delete();

        return $this->sendResponse('', 'User logged out successfully.');
    }
}
