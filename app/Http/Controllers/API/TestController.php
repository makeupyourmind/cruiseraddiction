<?php

namespace App\Http\Controllers\API;
use App\Model\Order;
use Excel;
use App\Exports\OrdersExport;
use Mail;

use Illuminate\Http\Request;

class TestController
{
    public function test(){
        // echo 'test controller';
        date_default_timezone_set('Canada/Eastern');
        echo "Order parser is started : ".date('Y/m/d H:i:s')."\n";
        $orders = Order::with(['user'])->where('isCheckedParser', 0)->get();
        $pathToFile = storage_path('app/orders.xls');
        if(count($orders) > 0){
            $store = Excel::store(new OrdersExport(), 'orders.xls', 'local');
            Mail::send([], [] ,function($message) use ($pathToFile) {
                $message->to('nikitosnov@gmail.com') //order@vivat-uae.net
                        ->subject('Orders');           
                $message->attach($pathToFile);
            });           
            return 'Order parse done. Successfully';
        }
        else{
            return 'Order parse done.';
        }
    }
}
