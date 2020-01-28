<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
// use App\Model\Guest;
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

        $user = User::find($id);

        // $user = User::where('id', $id)->first();

        // if(!$user){
        //     $guest = Guest::where('email', $request->email)->first();
        //     if($guest){
        //         $guest->update([
        //             'email' => $request->email,
        //             'postal_code' => $request->postal_code,
        //             'city' => $request->city,
        //             'state' => $request->state,
        //             'country' => $request->country,
        //             'phone' => $request->phone,
        //             'first_name' => $request->first_name,
        //             'last_name' => $request->last_name,
        //             'street_address' => $request->street_address,
        //             'street_address_two' => array_key_exists('street_address_two', $request) ? $request->street_address_two : null
        //         ]);
        //         return $this->sendResponse('', 'Guest modified successfully.');
        //     }
        //     else{
        //         Guest::create([
        //             'email' => $request->email,
        //             'postal_code' => $request->postal_code,
        //             'city' => $request->city,
        //             'state' => $request->state,
        //             'country' => $request->country,
        //             'phone' => $request->phone,
        //             'first_name' => $request->first_name,
        //             'last_name' => $request->last_name,
        //             'street_address' => $request->street_address,
        //             'street_address_two' => array_key_exists('street_address_two', $request) ? $request->street_address_two : null
        //         ]);
        //         return $this->sendResponse('', 'Guest modified successfully.');
        //     }
        // }

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

    public function recursive_array_diff($user, $request) { 
        $result_diff = array(); 
        $user = $user->toArray();
        foreach ($request as $key => $value) {
            if($user[$key] != $request[$key]){
                $result_diff[$key] = $value;
            }
        }
        return $result_diff; 
    }

    public function checkEmail(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
	    ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        return $this->sendResponse('Success', 'Email not used');

    }

}
