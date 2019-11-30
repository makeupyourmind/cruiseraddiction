<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Closure;

class CheckRoles extends BaseController
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $user = Auth::user();
        return in_array($user->roles[0]->name, $roles) ? $next($request) : $this->sendError('Authorization failed.', 'You do not have access', 403);
    }
}
