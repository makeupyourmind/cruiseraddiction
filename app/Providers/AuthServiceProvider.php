<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();

        Gate::define('admin-modify', function ($user) {
            [$role] = $user->roles;
            return $role->name === "User";
        });

        Gate::define('superadmin-modify', function ($user) {
            [$role] = $user->roles;
            return $role->name === "User" || $role->name === "Admin";
        });
        // Passport::tokensExpireIn(now()->addSecond(30));

        // Passport::refreshTokensExpireIn(now()->addSecond(60));

        // Passport::personalAccessTokensExpireIn(now()->addSecond(60));
    }
}
