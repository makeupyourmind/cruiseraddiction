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

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        // $role = Role::where('name', $request->role)->first();
        $user = User::create($input);
        // $user->roles()->attach($role);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['first_name'] =  $user->name;

        $token = Str::random();
        $verify = VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token 
        ]);

        $url = env('APP_URL')."/api/verifyRegistration?token=".$token;
        $data = array(
            'url'=> $url,
        );

        Mail::send("email.registration", $data , function ($mail) use ($user) {
            // $mail->from('cruiseraddiction.web@gmail.com');
            $mail->to($user->email)
                 ->subject('Confirm registration');
        });
        // return $this->sendResponse($success, 'User register successfully.');
        return $this->sendResponse("", 'Check your email');
    }

    public function verifyRegistration(Request $request){

        $foundToken = VerificationToken::with(['user'])->where('token', Input::get("token"))->first();
        if(!$foundToken){
            return response()->json("NOT FOUND TOKEN");
        }
        if($foundToken->user->isVerified){
            return $this->sendResponse("", 'Email Already Verified');
        }

        $updated = User::where('email', $foundToken->user->email)->update([
            'isVerified' => 1
        ]);

        Mail::send("email.registration_done", [""] , function ($mail) use ($foundToken) {
            // $mail->from('cruiseraddiction.web@gmail.com');
            $mail->to($foundToken->user->email)
                    ->subject('Welcome to our site');
        });

        return Redirect::to("https://www.cruiseraddiction.com/chack-register");
       
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

            $user = Auth::user();
            //$user_role = $user->roles[0]->name;

            if($user->isVerified){
                $success['token'] =  $user->createToken('New token')->accessToken;

                return $this->sendResponse($success, 'User authorized successfully.');
            }
            else{
                return $this->sendError('You did not confirm email.', '', 400);
            }
            // if($user->isSuperAdmin || ($user->isVerified && $user_role == $request->role)){
            //     $success['token'] =  $user->createToken('New token')->accessToken;
            //     return $this->sendResponse($success, "$user_role authorized successfully.");
            // }
            // else if(!$user->isVerified){
            //     return $this->sendError('You did not confirm email.', '', 400);
            // }
            // else{
            //     return $this->sendError("You don't have permission.", '', 403);
            // }
            
        }

            return $this->sendError('Authorization failed.', '', 400);
    }

    public function logout() {

        oauthAccessToken::where('user_id', Auth::user()->id)->delete();

        return $this->sendResponse('', 'User logged out successfully.');
    }
}