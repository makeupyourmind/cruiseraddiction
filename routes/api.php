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
    Route::get('part', 'PartsController@index');
    Route::get('rand-parts', 'PartsController@randoms');
    Route::post('refresh-shopping-cart', 'PartsController@refresh_shopping_cart');
    Route::post('shipping-rates', 'ShipmentController@rates');



});


Route::group([
    'namespace' => 'API',
    'middleware' => 'auth:api'], function () {

    Route::post('logout', 'RegisterController@logout');
    Route::post('add-part', 'PartsController@store');
    Route::put('update-part', 'PartsController@update');
    Route::delete('delete-part', 'PartsController@destroy');

    Route::get('user', 'UsersController@show');
    Route::put('user/{id}', 'UsersController@update');




});

