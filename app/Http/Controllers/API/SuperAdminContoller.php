<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
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

    public function getRoles()
    {
        return Role::where('name', '!=', 'SuperAdmin')->get();
    }

    public function index()
    {
        $users = User::with(['roles'])->whereHas('roles', function ($query) {
            $query->where('name', '!=', 'SuperAdmin');
        })
            ->paginate(10);
        return $this->sendResponse($users, 'ok');
    }

    public function show($id)
    {
        $user = User::with(['roles'])->find($id);
        if (!$user) {
            return $this->sendError("User with id - $id Not found.", 404);
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

        $role = Role::find($request->role_id);

        $user = User::with('roles')->find($id);
        $user->makeVisible(['password']);

        if (!$role) {
            return $this->sendError("Role with id - $request->role_id Not found.", 404);
        }

        if (!$user) {
            return $this->sendError("User with id - $id Not found.", 404);
        }

        $diff = self::recursive_array_diff($user, $request->except('role_id', 'password'));

        if ($user->roles[0]->name != $role->name) {
            $diff['role'] = $role->name;
        }

        if (!Hash::check($input['password'], $user->password)) {
            $input['password'] = Hash::make($input['password']);
            $diff['password'] = 'password was changed';
        }

        $data = array(
            'user' => $user,
            'changes' => $diff
        );

        $user->update($input);

        if (count($diff) > 0) {
            Mail::send("email.changesInAccount", $data, function ($mail) use ($user) {
                $mail->to($user->email)
                    ->subject('Changes In Account');
            });
        }

        $oldRoleId = $user->roles[0]->id;
        $user->roles()->updateExistingPivot($oldRoleId, ['role_id' => $request->role_id]);

        return $this->sendResponse('', 'User modified successfully.');
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->sendError("User with id - $id Not found.", 404);
        }
        $user->delete();
        return $this->sendResponse('', 'Deleted successfully');
    }

    public function recursive_array_diff($user, $request)
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
