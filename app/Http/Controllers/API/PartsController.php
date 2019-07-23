<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use GuzzleHttp\Client;


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

    public function stock_ca() {
	$client = new \GuzzleHttp\Client();

	for($i = 1; $i <= 19; $i++) {
    	    $request = $client->get('https://cruisera.ddns.net/api/stock_ca/list?page='.$i);
    	    $responseJson = $request->getBody()->getContents();
	    $response = json_decode($responseJson, true);
	    foreach($response['data'] as $caPart) {

		$caOrderData = array();
		
		$caOrder['brand_name'] = $caPart['brand']['BrandName'];
		$caOrder['part_number'] = $caPart['PartNumber'];
		$caOrder['description_english'] = $caPart['DescriptionEnglish'];
		$caOrder['weight_physical'] = $caPart['part']['WeightPhysical'];
		$caOrder['weight_volumetric'] = $caPart['part']['WeightVolumetric'];
		$caOrder['qty'] = $caPart['StockQty'];
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
		$caOrder['min_price'] =  $caPart['stats'] ? $caPart['stats']['min_price'] : null;
		$caOrder['max_price'] =  $caPart['stats'] ? $caPart['stats']['max_price'] : null;
		$caOrder['min_stock'] =  $caPart['stats'] ? $caPart['stats']['stock_min'] : null;
		
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
        $randomParts = Part::where('id', '>', '1')
			->where('id', '<', '100000')
			->get()->random(12);
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

    public function getStockCa(Request $request){
	$stockPart = Part::where('is_stock_ca', true)->paginate(100);
	return response()->json($stockPart, 200);
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

    public function refresh_shopping_cart(Request $request) {
        $parts = array();
        foreach($request->data as $partHash) {
            $parts[] = Part::where('unique_hash', $partHash)->first(['brand_name', 'part_number', 'description_english',
                'weight_physical', 'weight_volumetric', 'qty', 'warehouse', 'price', 'unique_hash']);
        }
        return response()->json($parts, 200);
    }
}
