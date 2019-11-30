<?php

use Illuminate\Database\Seeder;
use App\Model\Role;
use App\User;

class RoleUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $role = Role::where('name', 'SuperAdmin')->first();
         $user = User::where('email', 'superadmin@gmail.com')->first();
         $user->roles()->attach($role);
    }
}
