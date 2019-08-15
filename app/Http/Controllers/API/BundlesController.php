<?php

namespace App\Http\Controllers\API;

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
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 403);
        }

        $uniqueHash = 'BDL_'.md5($request->brand_name.$request->part_number.$request->warehouse);
        $request->merge(['unique_hash' => $uniqueHash, 'is_bundle' => '1']);
        $newBundle = Part::create($request->all());
	foreach($request->bundle_parts as $bundlePart) {
	    $part = Part::where('brand_name', $bundlePart['brand_name'])
			->where('part_number', $bundlePart['part_number'])
			->where('warehouse', 'canada')
			->first();
	    $newBundleRel = [
		'bundle_id' => $newBundle->id,
		'part_id' => $part->id
	    ];
	    BundlePart::create($newBundleRel);

/*
	    if($part->bundle_id == '0') {
		$bundleIdArr = [$newBundle->id];
		$encBundleId = json_encode($bundleIdArr);
	    } else {
		
		$decBundleId = json_decode($part->bundle_id, true);
		$decBundleId[] = $newBundle->id;
		$encBundleId = json_encode($decBundleId);
	    }

	    Part::where('unique_hash', $part->unique_hash)
		->update(['bundle_id' => $encBundleId, 'bundle_qty' => $bundlePart['qty'], 'description_english' => $bundlePart['description_english']]);
*/

	     /*Part::where('brand_name', $bundlePart['brand_name'])
		->where('part_number', $bundlePart['part_number'])
		->where('warehouse', 'canada')
		->update(['bundle_id' => $newBundle->id, 'bundle_qty' => $bundlePart['qty'], 'description_english' => $bundlePart['description_english']]);
	    */

	}

        return $this->sendResponse($newBundle, 'New bundle created successfully.');
    }

    public function deleteFromBundle($id) {
	
    }


}
