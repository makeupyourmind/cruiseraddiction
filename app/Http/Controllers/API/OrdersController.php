<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
// use App\Http\Controllers\Controller;
use App\Model\Country;
use App\Model\Order;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Model\Attachment;
use App\Http\Controllers\API\AdminFilter;
use Illuminate\Support\Facades\Input;
use Illuminate\Pagination\LengthAwarePaginator;

class OrdersController
{
    public function index(Request $request) {

		$orders = Order::with(['user' => function($query) use ($request){
			if(isset($request->email)){
				$query->where('email', $request->email);
			}
			if(isset($request->country)){
				$query->where('country', $request->country);
			}
		}])->where(function($query) use ($request){
			if(isset($request->part)){
				$part_number = str_replace("-", "", $request->part);
				$left = '"';
				$right = '"';
				$part_number = $left.$part_number.$right;
				$q = '%"part_number"'.": ".$part_number.'%';
				$query->where('data', 'like', $q);
			}
		})->get();

		$ordersArr = [];
		foreach($orders as $o){
			if($o->user){
				$o->order = new \stdClass;
				$o->order->amount = $o->amount;
				$o->order->data = $o->data;
				$o->order->user = $o->user;	
				$o->order->user->create_ac = $o->shipping["create_ac"];
				$o->order->user->same_adress = $o->shipping["same_address"];
				$o->order->user->shipping = $o->shipping["shipping"];
				$o->order->user->currency = $o->shipping["currency"];
				$o->order->user->order_notes = $o->shipping["order_notes"];
				unset($o->data, $o->user, $o->amount, $o->shipping);
				array_push($ordersArr, $o);
			}
		}

		$page = Input::get('page', 1);
		$perPage = 15;
		$offset = ($page * $perPage) - $perPage;
		$paginate = [];
		foreach(array_slice($ordersArr, $offset, $perPage, true) as $item){
			array_push($paginate, $item);
		}
		return new LengthAwarePaginator(
			$paginate, // Only grab the items we need    //was array_slice($ordersArr, $offset, $perPage, true)
			count($ordersArr), // Total items
			$perPage, // Items per page
			$page, // Current page
			['path' => url('/').'/orders', 'query' => $request->query()] // We need this so we can keep all old query parameters from the url
		);
		////////////////////////////////////////////////////////////////////////

		// return response()->json($ordersArr);
		/////////////////////////////////////////////////ОТКРЫТЬ НАХУЙ ЭТО ЕСЛИ ПИЗДЕЦ
		//print json_encode($orders);
// 	global $request;
// 	$serializedOrders = Order::all();
// 	$orders = $serializedOrders->each(function($item, $key) {
//     	    $item['order'] = unserialize($item['order']);
// 	});
// 	return $orders->toJson();
// 	$filter_orders = collect($orders->toArray())->filter(function ($value, $key){
//     	    $data_search = ''.collect($value['order']['data'])->search(function ($search_value, $search_key){
// 		global $request;
// 		if(!$request->part){
// 		    return true;
// 		}
// 		return $search_value['part_number'] == $request->part;
//     	    }).'';
        
//     	    return $data_search != '';
// 	})->filter(function ($value) {
//     	    global $request;
// 	    if(!$request->email){
// 		 return true;
// 	    }
// 	    return ''.strpos($value['order']['user']['email'], $request->email) .'' != '';
//         })
//          ->filter(function ($value) {
// 	    global $request;
// 	    if(!$request->country){
// 		return true;
// 	    }
// 	    return ''. strpos($value['order']['user']['country'], $request->country).'' !='';		
//         });
 
// //dd($filter_orders);
// //dd(is_array($filter_orders->all()));
// 	return array_values($filter_orders->all());
    }

    public function userOrders($id) {
	// $email = Auth::user()->email;
	// $serializedOrders = Order::where('order', 'like', '%"'.$email.'"%')->get();
	// $orders = $serializedOrders->each(function($item, $key) {
    // 	    $item['order'] = unserialize($item['order']);
	// });
	// return $orders->toJson();
		// $email = "nikitosnov@gmail.com";
		// $user = User::where('id', $id)->first();
		$user = Auth::user();
		$orders = Order::with(['user' => function($query) use ($user){
			$query->where('id', $user->id);
		}])->where('user_id', $user->id)->get();

		$ordersArr = [];
		foreach($orders as $order){
			$order->order = new \stdClass;
			$order->order->amount = $order->amount;
			$order->order->data = $order->data;
			$order->order->user = $order->user;
			unset($order->data, $order->user, $order->user_id);
			array_push($ordersArr, $order);
		}
		return response()->json($ordersArr);
    }
}
