<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'namespace' => 'API'], function () {

    Route::post('register', 'RegisterController@register');
    Route::post('login', 'RegisterController@login');

    Route::post('parts-search', 'PartsSearchController@index');

    Route::post('part', 'PartsController@show');


});


Route::group([
    'namespace' => 'API',
    'middleware' => 'auth:api'], function () {

    Route::post('logout', 'RegisterController@logout');
    Route::post('add-part', 'PartsController@store');


});

