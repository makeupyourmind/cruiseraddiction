<?php

namespace App\Http\Controllers\API;

use App\Model\SameDataPartBundle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\BundlePart;

class BundlesController extends BaseController
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
            'brand_name' => 'required|string',
            'part_number' => 'required',
            // 'description_full' => 'required',
            'description_english' => 'required',
            'min_stock' => 'required',
            'qty' => 'required',
            'price' => 'required',
            'min_price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 403);
        }

        $uniqueHash = 'BDL_'.md5($request->brand_name.$request->part_number.$request->warehouse);
        $request->merge(['unique_hash' => $uniqueHash, 'is_bundle' => '1']);
        $newBundle = Part::create($request->all());


        $arr = array();
        foreach($request->bundle_parts as $bundlePart) {

            $part = Part::where("part_number",'LIKE','%' . $bundlePart['part_number']. '%' )
                ->where('brand_name', 'LIKE', '%' . $bundlePart['brand_name']. '%')
                ->where('warehouse', 'canada')
                ->first();
            $bundle_parts = floor(intval($part->qty) / intval($bundlePart["qty"]));

            array_push($arr, $bundle_parts);

            $newBundleRel = [
                'bundle_id' => $newBundle['id'],
                'part_id' => $part->id
            ];

            BundlePart::create($newBundleRel);
            SameDataPartBundle::create([
                'qty' => $bundlePart['qty'],
                'description' => $bundlePart['description_english'],
                'bundle_id' => $newBundle['id'],
                'bundle_part_id' => $part->id
            ]);

        }


        $arr = array_filter(
            $arr,
            function ($value) {
                return $value > -1;
            }
        );
        if(!empty($arr)){
            $arr = max($arr);
        } else {
            $arr = 0;
        };


       $newBundle->update(['qty' => $arr]);

       return $this->sendResponse($newBundle, 'New bundle created successfully.');
    }

}
