<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UsersController extends BaseController
{
    public function show() {
	//return response()->json('lox', 404);
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
            return $this->sendError('Validation Error.', $validator->errors(), 202);
        }

        User::where('id', $id)
            ->update($request->all());
        return $this->sendResponse('Success', 'User modified successfully.');
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
