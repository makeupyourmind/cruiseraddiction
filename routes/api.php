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
    Route::get('test', 'TestController@test');    
    Route::post('register', 'RegisterController@register');
    Route::get('verifyRegistration', 'RegisterController@verifyRegistration');
    Route::post('login', 'RegisterController@login');
    Route::post('forgot', 'ForgotPasswordController@forgotPassword');
    Route::get('forgot/{token}', 'ForgotPasswordController@checkToken');
    Route::post('resetPassword', 'ResetPasswordController@resetPassword');

    Route::post('parts-search', 'PartsSearchController@index');

    Route::post('parts', 'PartsController@show');

    Route::get('parts', 'PartsController@index');
    Route::get('stock-ca-parts', 'PartsController@getStockCa');
    Route::get('rand-parts', 'PartsController@randoms');
    Route::post('refresh-shopping-cart', 'PartsController@refresh_shopping_cart');
    Route::post('shipping-rates', 'ShipmentController@rates');

    Route::get('orders', 'OrdersController@index');
    Route::get('stock-ca', 'PartsController@stock_ca');
    Route::get('countries', 'CountryController@get_countries');

    Route::get('reviews', 'ReviewsController@index');
    Route::post('reviews', 'ReviewsController@store');
    Route::get('reviews/{id}', 'ReviewsController@show');
    Route::delete('reviews/{id}', 'ReviewsController@destroy');

    Route::post('check-email', 'UsersController@checkEmail');

    Route::get('doc', 'DocumentationController@index');

    Route::post('paypal', array('as' => 'addmoney.paypal','uses' => 'PayPalController@post'));
});
// 'middleware' => 'auth:api'
Route::group([
    'namespace' => 'API',
    'middleware' => 'auth:api'], function () {

    Route::post('logout', 'RegisterController@logout');
    Route::post('add-parts', 'PartsController@store');
    Route::put('update-parts', 'PartsController@update');
    Route::delete('delete-parts', 'PartsController@destroy');
    Route::get('parts/images', 'PartsController@images');
    Route::get('user', 'UsersController@show');
    Route::put('user/{id}', 'UsersController@update');
    Route::patch('user/{id}', 'UsersController@updateSome');
    Route::get('user-orders/{id}', 'OrdersController@userOrders');

    Route::post('bundles', 'BundlesController@store');
    Route::get('bundles/{id}', 'BundlesController@show');
});