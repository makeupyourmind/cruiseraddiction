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
         $super_admin_yan = User::where('email', 'yan@cruiseraddiction.com')->first();
         $super_admin_yan->roles()->attach($role);

         $super_admin_anna = User::where('email', 'anna@cruiseraddiction.com')->first();
         $super_admin_anna->roles()->attach($role);
    }
}
