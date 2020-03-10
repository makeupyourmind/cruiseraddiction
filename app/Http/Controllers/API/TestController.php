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

class TestController
{
    public function test(Request $request){
        return 'Test Controller';
    }
}
