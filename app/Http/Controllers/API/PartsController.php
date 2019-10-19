<?php

namespace App\Http\Controllers\API;

use App\Model\SameDataPartBundle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\BundlePart;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class PartsController extends BaseController
{

    public function index() {
        $parts = Part::orderBy('id', 'desc')
		->whereIn('brand_name', ['TOYOTA', 'KOYO', 'AISIN', 'TAIHO', 'NSK', 'HKT', '555', 'TOYO', 'NACHI', 'MITSUBOSHI'])
		->paginate(100);
        /*
        $unique = $parts->unique(function ($item)
        {
            return $item['brand_name'] . $item['part_number'];
        });
        */

        return response()->json($parts, 200);
    }

    public function stock_ca() {
	$client = new \GuzzleHttp\Client();

	//return response()->json('Importing stock Ca failed!',200);

	for($i = 1; $i <= 19; $i++) {
    	    $request = $client->get('http://system.cruiseraddiction.com/api/stock_ca/list?page='.$i);
    	    $responseJson = $request->getBody()->getContents();
	    $response = json_decode($responseJson, true);
	    //dd($response);
	    //if(!$response['data']) return response()->json('Importing stock Ca failed!',200);
	    foreach($response['data'] as $caPart) {

		$caOrderData = array();
	//	if($caPart['PartNumber'] == '6814160010'){
	//	    dd($caPart);
		//}
		$DD= '44444444-444444444';
		$caOrder['brand_name'] = $caPart['brand']['BrandName'];
		$caOrder['part_number'] = $caPart['PartNumber'];
		$caOrder['part_number_without_too_much'] = str_replace(['-', '-'], '', $caPart['PartNumber']);
		$caOrder['description_english'] = $caPart['DescriptionEnglish'];
		$caOrder['weight_physical'] = $caPart['part']['WeightPhysical'];
		$caOrder['weight_volumetric'] = $caPart['part']['WeightVolumetric'];
		$caOrder['qty'] = $caPart['Stock_Qty'];
		$caOrder['warehouse'] = 'canada';
		$caOrder['price'] = $caPart['Price'];
		$caOrder['unique_hash'] = 'CA_'.md5($caOrder['brand_name'].$caOrder['part_number'].'canada');
		//$caOrder['unique_hash'] = '1234567qwert';
		$caOrder['is_bundle'] = $caPart['part']['IsBundle'];
		$caOrder['modified_by'] = $caPart['stats']['modifier']['email'];
		$caOrder['description_full'] = $caPart['description_full'];
		$caOrder['notes'] = serialize($caPart);
		$caOrder['categories'] = $caPart['stats'] && $caPart['stats']['categories'] ? json_encode($caPart['stats']['categories']) : null;
		$caOrder['tags'] =       $caPart['stats'] && $caPart['stats']['tags'] ? json_encode($caPart['stats']['tags']) : null;
		$caOrder['min_price'] =  $caPart['stats'] ? (string) $caPart['stats']['min_price'] : null;
		$caOrder['max_price'] =  $caPart['stats'] ? (string) $caPart['stats']['max_price'] : null;
		$caOrder['min_stock'] =  $caPart['stats'] ? (string) $caPart['stats']['stock_min'] : null;

		$caOrder['location'] = $caPart['Location'];
		$caOrder['is_stock_ca'] = true;

		Part::updateOrCreate(
		    ['unique_hash' => $caOrder['unique_hash']],
			$caOrder)->toSql();
	    }
	}
	return response()->json('Stock CA imported successfully', 200);
    }

    public function randoms() {
        $randomParts = Part::where('id', '>' ,'139862')->take(10000)->get()->random(12);
        return response()->json($randomParts, 200);
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
                    ->get()->toArray();
        $partsList = array();

        foreach($parts as $part) {
            $partsList['brand_name'] = $part['brand_name'];
            $partsList['part_number'] = $part['part_number'];
            $partsList['description_english'] = $part['description_english'];
            $partsList['weight_physical'] = $part['weight_physical'];
	    $partsList['images'] = $part['image'];

            $partData = Part::where('brand_name', $part['brand_name'])
                        ->where('part_number', $part['part_number'])
                        ->get()->toArray();
            for($j = 0; $j < count($partData); $j++) {
                $partsList['data'][$j]['warehouses'] = $partData[$j]['warehouse'];
                $partsList['data'][$j]['available'] = $partData[$j]['qty'];
                $partsList['data'][$j]['prices'] = $partData[$j]['price'];
                $partsList['data'][$j]['unique_hashes'] = $partData[$j]['unique_hash'];
            }
        }

        return response()->json($partsList, 200);
    }

    public function getStockCa(Request $request){
	!$request->order_name ?? $request->order_name = 'brand_name';
	!$request->oder_by ?? $request->order_by = 'asc';
	$stockPart = Part::where('is_stock_ca', true)
		    ->whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', $request->part_number)."%'")
		    //->where('part_number_without_too_much', 'LIKE', '%' . $request->part_number . '%')
		    ->where('brand_name', 'LIKE', '%' . $request->brand_name . '%')
		    ->orderBy($request->order_name, $request->order_by)
		    ->paginate(100);
	if($stockPart->count() == 0) {
	    $stockPartArr['data'] = array();
	    return response()->json($stockPartArr, 200);
	}
	$stockPartArr = $stockPart->toArray();
	$mergedParts = array();
	if(count($stockPartArr['data'][0]['bundle_pivot']) > 0) {
	    foreach($stockPartArr['data'][0]['bundle_pivot'] as $allPivots) {
		    $mergedParts[] = $allPivots['bundle_parts'][0];
	    }
/*
	$partNumber = str_replace('-', '', $request->part_number);
	$stockPart = Part::where('warehouse', 'canada')
			->where('part_number', 'LIKE', '%' . $partNumber . '%')
			->where('brand_name', 'LIKE', '%' . $request->brand_name . '%')
			->paginate(100);
*/
	}
	$stockPartArr['data'][0]['bundle_parts'] = $mergedParts;
	return response()->json($stockPartArr, 200);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
            'warehouse' => 'required|string'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 403);
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
            'description_full' => 'required',
            'description_english' => 'required',
            'min_stock' => 'required',
            'qty' => 'required',
            'price' => 'required',
            'min_price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(), 403);
        }
	if(!$request->is_bundle) {
    	    Part::where('brand_name', $request->brand_name)
        	->where('part_number', $request->part_number)
        	->update($request->all());

	} else {

	    $bundle = Part::where('brand_name', $request->brand_name)
        	->where('part_number', $request->part_number)
        	->update(['part_number' => $request->part_number, 'brand_name' => $request->brand_name, 'description_english' => $request->description_english,
		    'description_full' => $request->description_full, 'min_stock' => $request->min_stock, 'price' => $request->price,
		    'min_price' => $request->min_price, 'max_price' => $request->max_price, 'location' => $request->location, 'categories' => $request->categories]);
	    $bundleId =  Part::where('brand_name', $request->brand_name)
        		->where('part_number', $request->part_number)
            ->first();
        
        $arr = array();

	    //Part::where('bundle_id', $bundleId->id)
	//	->update(['bundle_id' => 0]);
	    BundlePart::where('bundle_id', $bundleId->id)->delete();
        SameDataPartBundle::where('bundle_id', $bundleId->id)->delete();
	    foreach($request->bundle_parts as $bundlePart) {
//		Part::where('brand_name', $bundlePart['brand_name'])
//		    ->where('part_number', $bundlePart['part_number'])
//		    ->where('warehouse', 'canada')
//		    //->update(['bundle_id' => $bundleId->id, 'bundle_qty' => $bundlePart['bundle_qty'], 'description_english' => $bundlePart['description_english']]);
//		    ->update(['bundle_qty' => $bundlePart['bundle_qty'], 'description_english' => $bundlePart['description_english']]);
            $part = Part::where("part_number",'LIKE','%' . $bundlePart['part_number']. '%' )
                ->where('brand_name', 'LIKE', '%' . $bundlePart['brand_name']. '%')
                ->where('warehouse', 'canada')
                ->first();
            $bundle_parts = floor(intval($part->qty) / intval($bundlePart["qty"]));
            // dump(intval($bundlePart["qty"]), intval($part->qty), '\n');
            array_push($arr, $bundle_parts);

		BundlePart::updateOrCreate(
		    [
		        'bundle_id' => $bundleId->id,
                'part_id' => $part->id,
//                'qty' => $bundlePart->bundle_qty,
//                'description' => $bundlePart->description_english
            ],
		    [
		        'bundle_id' => $bundleId->id,
                'part_id' => $part->id,
//                'qty' => $bundlePart->bundle_qty,
//                'description' => $bundlePart->description_english
            ]
		);

            SameDataPartBundle::updateOrCreate(
                [
                    'bundle_part_id' => $part->id,
                    'bundle_id' => $bundleId->id
                ],
                [
                    'qty' => $bundlePart['qty'],
                    'description' => $bundlePart['description_english'],
                ]
            );
        }
        // $arr = array_filter($arr, self::bigger());
        $arr = array_filter(
            $arr,
            function ($value) {
                return $value > -1;
            }
        );
        // var_dump($arr);
        $arr = min($arr);
        
        // $bundle->update(['qty' => $arr]);
        $bundle = Part::where('brand_name', $request->brand_name)
        	->where('part_number', $request->part_number)
        	->update(['qty' => $arr]);

	}
        return $this->sendResponse('Success', 'Part modified successfully.');
    }

    public function destroy(Request $request) {

	$user = Auth::user();

	$check = Hash::check(base64_decode($request->password), Auth::user()->password);

	if(!$check) {
	    return response()->json(['error' => 'Wrong password!'], 403);
	};

	$array = json_decode(base64_decode($request->array));

	if(count($array) == 0) {
	    return response()->json(['error' => 'nothing selected'], 406);
	};

	foreach($array as $part_destroyed) {

            $validator = Validator::make((array) $part_destroyed, [
                'brand_name' => 'required|string',
                'part_number' => 'required|string',
            ]);

            if($validator->fails()){
                return $this->sendError('Validation Error.', $validator->errors(), 202);
            }

            Part::where('brand_name', $part_destroyed->brand_name)
                ->where('part_number', $part_destroyed->part_number)
                ->delete();
        }

        return $this->sendResponse('Success', 'Parts deleted successfully.');
    }

    public function refresh_shopping_cart(Request $request) {
        $parts = array();
        foreach($request->data as $partHash) {
            $parts[] = Part::where('unique_hash', $partHash)->first(['brand_name', 'part_number', 'description_english',
                'weight_physical', 'weight_volumetric', 'qty', 'warehouse', 'price', 'unique_hash']);
        }
        return response()->json($parts, 200);
    }
}
