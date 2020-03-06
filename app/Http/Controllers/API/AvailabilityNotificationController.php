<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\AvailabilityNotification;

class AvailabilityNotificationController extends BaseController
{
    public function subscribe(Request $request){

        $validator = Validator::make($request->all(), [
            'brand_name' => 'required',
            'part_number' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $exsist = AvailabilityNotification::where([
            ['brand_name', $request->brand_name],
            ['part_number', $request->part_number],
            ['user_email', $request->user()->email]
        ])->first();

        if($exsist){
            return $this->sendError('Already signed.', [], 401);
        }

        AvailabilityNotification::create([
            'brand_name' => $request->brand_name,
            'part_number' => $request->part_number,
            'warehouse' => $request->warehouse,
            'description' => $request->description,
            'user_email' => $request->user()->email
        ]);

        return $this->sendResponse('', 'Successfully signed.');
    }
}
