<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Country;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class CountryController extends BaseController
{

    public function get_countries() {
	$get = Country::all();
	return response()->json($get, 200);
    }
}
