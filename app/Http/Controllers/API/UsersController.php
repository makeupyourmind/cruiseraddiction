<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
    public function show() {
        $user = Auth::user();
        return response()->json($user, 200);

    }

}
