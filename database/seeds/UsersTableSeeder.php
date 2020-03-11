<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
        DB::table('users')->insert([
            [
                'email' => 'yan@cruiseraddiction.com',
                'isVerified' => 1,
                'password' => Hash::make('Canada@020'),
                'first_name' => 'Yan',
                'last_name' => 'Bort',
                'ihmud_username' => 'akella4x4',
                'isSuperAdmin' => 1,
                'street_address' => '475 the west mall',
                'city' => 'toronton',
                'state' => 'on',
                'postal_code' => 'm9c1r2',
                'country' => 'CA',
                'phone' => '{"countryCode":"CA","phoneNumber":"(519) 914-017","formattedNumber":"+1 519 914 0179"}'
            ],
            [
                'email' => 'anna@cruiseraddiction.com',
                'isVerified' => 1,
                'password' => Hash::make('Canada@0@0'),
                'first_name' => 'Anna',
                'last_name' => 'K',
                'isSuperAdmin' => 1,
                'ihmud_username' => null,
                'street_address' => '625 kipps lane',
                'city' => 'London',
                'state' => 'ON',
                'postal_code' => 'N5Y0B2',
                'country' => 'CA',
                'phone' => '{"countryCode":"CA","phoneNumber":"(418) 858-0848","formattedNumber":"+14188580848"}'
            ]
        ]);
    }
}
