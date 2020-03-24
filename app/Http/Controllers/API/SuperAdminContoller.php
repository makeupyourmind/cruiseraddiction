<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Jobs\ChangesInAccountMessage;
use Illuminate\Support\Facades\Gate;
use App\User;
use App\Model\Role;
use Validator;
use Mail;
use Hash;

class SuperAdminContoller extends BaseController
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function __construct(User $user, Role $role)
    {
        $this->user = $user;
        $this->role = $role;
    }

    public function getRoles()
    {
        return $this->role::where('name', '!=', 'SuperAdmin')->get();
    }

    public function index()
    {
        $users = $this->user::with(['roles'])->whereHas('roles', function ($query) {
            $query->where('name', '!=', 'SuperAdmin');
        })
            ->paginate(10);
        return $this->sendResponse($users, 'ok');
    }

    public function show($id)
    {
        $user = $this->user::with(['roles'])->find($id);
        if (!$user) {
            return $this->sendError("User with id - $id Not found.", '');
        }
        return $this->sendResponse($user, 'ok');
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
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
            'role_id' => "required|string",
            'password' => "string"
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $input = $request->all();

        $role = $this->role::find($request->role_id);

        if (!$role) {
            return $this->sendError("Role with id - $request->role_id Not found.", '');
        }

        $user = $this->user::with('roles')->find($id);

        if (!$user) {
            return $this->sendError("User with id - $id Not found.", '');
        }

        if (!Gate::forUser($user)->allows('superadmin-modify')) {
            $role = $user->roles[0]->name;
            return $this->sendError("You as the Admin can’t modify the $role", '', 403);
        }

        $user->makeVisible(['password']);

        $diff = $this->recursive_array_diff($user, $request->except('role_id', 'password'));

        if ($user->roles[0]->name != $role->name) {
            $diff['role'] = $role->name;
        }

        if (array_key_exists('password', $input) && !Hash::check($input['password'], $user->password)) {
            $input['password'] = Hash::make($input['password']);
            $diff['password'] = 'password was changed';
        } else {
            unset($input['password']);
        }

        $user->makeHidden(['password']);

        $data = array(
            'user' => $user,
            'changes' => $diff
        );

        $user->update($input);

        if (count($diff) > 0) {
            ChangesInAccountMessage::dispatch($user->email, $data);
        }

        $oldRoleId = $user->roles[0]->id;
        $user->roles()->updateExistingPivot($oldRoleId, ['role_id' => $request->role_id]);

        return $this->sendResponse(array('user' => $user, 'changes' => $diff), 'User modified successfully.');
    }

    public function destroy($id)
    {
        $user = $this->user::find($id);
        if (!$user) {
            return $this->sendError("User with id - $id Not found.", '');
        }

        if (!Gate::forUser($user)->allows('superadmin-modify')) {
            $role = $user->roles[0]->name;
            return $this->sendError("You as the Admin can’t modify the $role", '', 403);
        }

        $user->delete();
        return $this->sendResponse('', 'Deleted successfully');
    }

    private function recursive_array_diff(User $user, $request)
    {
        $result_diff = array();
        $user = $user->toArray();
        foreach ($request as $key => $value) {
            if ($user[$key] != $request[$key]) {
                $result_diff[$key] = $value;
            }
        }
        return $result_diff;
    }
}
