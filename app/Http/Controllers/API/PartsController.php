<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;

class PartsController extends BaseController
{

    public function index() {
        $parts = Part::orderBy('id', 'desc')->paginate(100);
        /*
        $unique = $parts->unique(function ($item)
        {
            return $item['brand_name'] . $item['part_number'];
        });
        */

        return response()->json($parts, 200);
    }

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

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
            'warehouse' => 'required|string'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 202);
        }

        $uniqueHash = md5($request->brand_name.$request->part_number.$request->warehouse);
        $request->merge(["unique_hash"=>$uniqueHash]);
        $newPart = Part::create($request->all());

        return $this->sendResponse($newPart, 'New product created successfully.');
    }

    public function update(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 202);
        }

        Part::where('brand_name', $request->brand_name)
            ->where('part_number', $request->part_number)
            ->update($request->all());
        return $this->sendResponse('Success', 'Part modified successfully.');
    }

    public function destroy(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 202);
        }
        Part::where('brand_name', $request->brand_name)
            ->where('part_number', $request->part_number)
            ->delete();
        return $this->sendResponse('Success', 'Part deleted successfully.');
    }
}
