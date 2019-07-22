<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/{any}', 'ApplicationController')->where('any', '.*');

Route::group([
    'namespace' => 'API'], function () {
    Route::get('paywithpaypal', array('as' => 'addmoney.paywithpaypal','uses' => 'PayPalController@payWithPaypal',));
    Route::get('paypal', array('as' => 'addmoney.paypal','uses' => 'PayPalController@postPaymentWithpaypal',));
    Route::get('paypal/success', array('as' => 'payment.status','uses' => 'PayPalController@getPaymentStatus',));

});
