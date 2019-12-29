<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use App\Model\Role;
use Validator;

class SuperAdminContoller extends BaseController
{
    /**
     * @return \Illuminate\Http\Response
     */
    
    public function index(){
        $admins = User::with(['roles'])
                                        ->whereHas('roles', function($q){
                                            $q->where('roles.name', '=', 'Admin');
                                        })
                                        ->paginate(10);
        return $this->sendResponse($admins, 'ok');
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 422);       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['isVerified'] = 1;

        $role = Role::where('name', $request->role)->first();
        $admin = User::create($input);
        $admin->roles()->attach($role);

        return $this->sendResponse("Ok", 'New Admin created successfully.');
    }

    public function show($id){
        $admin = User::with(['roles'])->find($id);
        return $this->sendResponse($admin, 'ok');
    }

    public function update(Request $request, $id){
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

        User::where('id', $id)
                            ->update($request->all());
        return $this->sendResponse('', 'Admin modified successfully.');
    }

    public function destroy($id){
        $user = User::find($id);
        if(!$user){
            return $this->sendError('Not found.', 404);
        }
        $user->delete();
        return $this->sendResponse('', 'Deleted successfully');
    }
}
