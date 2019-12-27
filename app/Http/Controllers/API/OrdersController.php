<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
// use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
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
				$o->order->user = new \stdClass; //$o->user
				//////////////////////
				$o->order->user->id = $o->user->id;
				$o->order->user->email = $o->user->email;
				$o->order->user->isVerified = $o->user->isVerified;
				$o->order->user->email_verified_at = $o->user->email_verified_at;
				$o->order->user->created_at = $o->user->created_at;
				$o->order->user->updated_at = $o->user->updated_at;
				$o->order->user->first_name = $o->user->first_name;
				$o->order->user->last_name = $o->user->last_name;
				$o->order->user->ihmud_username = $o->user->ihmud_username;
				$o->order->user->street_adress = $o->user->street_adress;
				$o->order->user->street_adress_two = $o->user->street_adress_two;
				$o->order->user->city = $o->user->city;
				$o->order->user->state = $o->user->state;
				$o->order->user->postal_code = $o->user->postal_code;
				$o->order->user->country = $o->user->country;
				$o->order->user->phone = $o->user->phone;
				$o->order->user->frame_number = $o->user->frame_number;
				$o->order->user->date_of_production = $o->user->date_of_production;
				$o->order->user->original_country = $o->user->original_country;
				$o->order->user->search_history = $o->user->search_history;
				$o->order->user->subscribed_for_news = $o->user->subscribed_for_news;
				///////////////////////////
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
    }

    public function userOrders($id) {
		$user_id = Auth::id();
		$orders = Order::with('user')->whereHas('user', function(Builder $query) use ($user_id){
										     		$query->where('id', '=', $user_id);
									  })
									->orderBy('id', 'desc')
									->get();

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
