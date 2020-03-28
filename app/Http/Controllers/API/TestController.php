<?php

namespace App\Http\Controllers\API;

use App\Model\Order;
use App\Model\Part;
use Excel;
use App\Exports\OrdersExport;
use Mail;
use \PDF;
use Illuminate\Support\Str;
use Storage;
use Illuminate\Http\Request;
use App\Model\AvailabilityNotification;
use App\Model\Tpd;

class TestController
{
    public function test(Request $request)
    {

        // $order = Order::whereHas('user', function ($query) {
        //     $query->where('id', 16);
        // })->get();
        $a = 4;
        return response()->json($a, 404);
        // return http_response_code(500);
        // return response()->json($a);
        $order = Order::with([
            'user' => function ($query) {
                $query->where('id', 17);
            }
        ])->get();
        return $order;

        return env('APP_URL_BACK') . '/paypal/success';
        // where([['discontinued', 1], ['checked', 0]])
        $tpds = Tpd::select('id', 'part_number')->get();
        $parts_to_update = [];
        $tpds_to_update = [];
        if (count($tpds) > 0) {
            foreach ($tpds as $tpd) {
                $tpds_to_update[] = $tpd->id;
                $parts = Part::where([
                    ['part_number', $tpd['part_number']],
                    ['brand_name', $tpd['brand_name']]
                ])
                    ->select('id')
                    ->get();
                if (count($parts) > 0) {
                    foreach ($parts as $part) {
                        $parts_to_update[] = $part->id;
                    }
                }
            }
        }

        // if (count($parts_to_update) > 0) {
        //     Part::whereIn('id', $parts_to_update)->update(['discontinued', 1]);
        // }
        // if (count($tpds_to_update) > 0) {
        //     Tpd::whereIn('id', $tpds_to_update)->update(['checked', 1]);
        // }
        return $tpds_to_update;
    }
}
