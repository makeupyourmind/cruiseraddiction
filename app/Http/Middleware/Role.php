<?php

namespace App\Http\Middleware;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use Closure;

class Role extends BaseController
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = $request->user();
        return in_array($user->roles[0]->name, $roles) ? $next($request) : $this->sendError('Authorization failed.', 'You do not have access', 403);
    }
}
