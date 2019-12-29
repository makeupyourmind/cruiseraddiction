<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Mail;

class UsersController extends BaseController
{
    public function show() {
        $user = Auth::user();
        return response()->json($user, 200);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'ihmud_username' => 'string|max:255',
            'street_address' => 'string|max:255',
            'street_address_two' => 'string|max:255',
            'city' => 'string|max:255',
            'state' => 'string|max:255',
            'postal_code' => 'string|max:255',
            'country' => 'string|max:255',
            'phone' => 'string|max:255',
            'frame_number' => 'string|max:255',
            'date_of_production' => 'string|max:255',
            'original_country' => 'string|max:255',
            'subscribed_for_news' => 'integer|max:11',

        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $user = User::where('id', $id)->get()->first();

        $diff = self::recursive_array_diff($user, $request->all());

        $data = array(
            'user' => $user,
            'changes' => $diff
        );

        if(count($diff) > 0){
            Mail::send("email.changesInAccount", $data , function ($mail) use ($user) {
                    $mail->to($user->email)
                         ->subject('Changes In Account');
            });
        }

        User::where('id', $id)->update($request->all());

        return $this->sendResponse(array('user' => $user, 'changes' => $diff), 'User modified successfully.');
    }

    public function recursive_array_diff($a1, $a2) { 
        $r = array(); 
        $a1 = $a1->toArray();
        foreach ($a2 as $key => $value) {
            if($a1[$key] != $a2[$key]){
                $r[$key] = $value;
            }
        }
        return $r; 
    }

    public function checkEmail(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
	    ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 202);
        }
        return $this->sendResponse('Success', 'Email not used');

    }

}
