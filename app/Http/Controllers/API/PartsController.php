<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;

class PartsController extends BaseController
{
    public function show (Request $request) {
        $validator = Validator::make($request->all(), [
            'part_number' => 'required|string',
            'brand' => 'required|string'
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());
        }

        $parts = Part::where('brand_name', $request->brand)
                    ->where('part_number', $request->part_number)
                    ->get(['brand_name', 'part_number', 'description_english', 'weight_physical'])->toArray();
        $partsList = array();

        foreach($parts as $part) {
            $partsList['brand_name'] = $part['brand_name'];
            $partsList['part_number'] = $part['part_number'];
            $partsList['description_english'] = $part['description_english'];
            $partsList['weight_physical'] = $part['weight_physical'];

            $partData = Part::where('brand_name', $part['brand_name'])
                        ->where('part_number', $part['part_number'])
                        ->get(['qty', 'price', 'warehouse', 'unique_hash'])->toArray();
            for($j = 0; $j < count($partData); $j++) {
                $partsList['data'][$j]['warehouses'] = $partData[$j]['warehouse'];
                $partsList['data'][$j]['available'] = $partData[$j]['qty'];
                $partsList['data'][$j]['prices'] = $partData[$j]['price'];
                $partsList['data'][$j]['unique_hashes'] = $partData[$j]['unique_hash'];
            }
        }

        return response()->json($partsList, 200);
    }
}
