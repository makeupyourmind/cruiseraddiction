<?php


namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use App\VerificationToken;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\oauthAccessToken;
use Mail;
use Illuminate\Support\Facades\Input;
Use Redirect;
use Illuminate\Support\Str;

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

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['first_name'] =  $user->name;

        $token = Str::random();
        $verify = VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token 
        ]);

        $url = "http://localhost:8000/api/verifyRegistration?token=".$token."&"."email=".$user->email;
        $data = array(
            'url'=> $url,
        );

        Mail::send("email.registration", $data , function ($mail) use ($user) {
            $mail->from('support@gmail.com');
            $mail->to($user->email)
                 ->subject('Welcome to our site');
        });
        // return $this->sendResponse($success, 'User register successfully.');
        return $this->sendResponse("", 'Check your email');
    }

    public function verifyRegistration(Request $request){

        $user = User::where('email', Input::get("email"))->first();
        if($user->isVerified){
            return $this->sendResponse("", 'Email Already Verified');
        }

        $foundToken = VerificationToken::where('token', Input::get("token"));

        if($foundToken){
            $updated = User::where('email', Input::get("email"))->update([
                'isVerified' => 1
            ]);
            return Redirect::to("https://www.cruiseraddiction.com/chack-register");
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = User::where('email', $request->email)->first();
            if($user->isVerified){
                $success['token'] =  $user->createToken('New token')->accessToken;

                return $this->sendResponse($success, 'User authorized successfully.');
            }
            
        }

            return $this->sendError('Authorization failed.', '', 401);

    }

    public function logout() {

        oauthAccessToken::where('user_id', Auth::user()->id)->delete();

        return $this->sendResponse('', 'User logged out successfully.');
    }

}