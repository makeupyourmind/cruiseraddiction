<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'superadmin@gmail.com',
            'isVerified' => 1,
            'password' => bcrypt('superadmin2019'),
            'first_name' => 'superadmin',
            'last_name' => 'superadmin',
            'isSuperAdmin' => 1
        ]);
    }
}
