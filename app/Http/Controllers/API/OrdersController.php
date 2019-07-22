<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Order;

class OrdersController extends Controller
{
    public function index() {
	$serializedOrders = Order::all();
	$orders = $serializedOrders->each(function($item, $key) {
	    $item['order'] = unserialize($item['order']);
	});
	return $orders->toJson();

    }
}
