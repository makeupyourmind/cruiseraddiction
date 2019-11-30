<?php

namespace App\Http\Controllers\API;

use App\Model\SameDataPartBundle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\PartImage;
use App\Model\BundlePart;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;
use Excel;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\API\UserFilter;
use DB;

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
        $randomParts = Part::take(10000)->get()->random(12);
        return response()->json($randomParts, 200);
    }

    public function images(){
        //shell_exec('rm -r '.storage_path("images")); //add /parts
        //shell_exec('rm -r '.storage_path().'/../public/images/parts/*');
	    $path = base_path('resources/import_img/parts_images.zip');
	    copy('https://cloud.cruiseraddiction.com/index.php/s/rL74M3nBgjiqQmS/download', $path);
        //shell_exec('unzip -d '.storage_path("images").' '.$path);
        //shell_exec('unzip -d '.public_path("images/parts").' '.$path);
        shell_exec('unzip -d '.storage_path("images/temp").' '.$path);
        //$directories = scandir(storage_path('images'));

        // foreach($directories as $directory){
        //     if($directory != '.' and $directory != '..' ){
        //         $directoryPath = storage_path('images/').$directory;
        //         shell_exec('cp -r "'.$directoryPath.'"/* '.storage_path('images'));
        //         shell_exec('cp -r "'.$directoryPath.'"/* '.storage_path().'/../public/images/parts');
        //         shell_exec('rm -r "'.$directoryPath.'"');
        //     }
        // }
	$tempPartsImages = scandir(storage_path('images/temp'));
	$exsistImagesOverrited = 0;
	$uploadedImages = 0;
	$arrayUploaded = [];
	$arrayOverrited = [];
	$object = new \stdClass;
	foreach($tempPartsImages as $key => $temp){
	    if($temp != '.' and $temp != '..'){
	        $filename = storage_path('images/').$temp;
	        if (file_exists($filename)) {
	            //echo "Файл $filename существует ";
	            $filename = storage_path('images/temp/').$temp;
	            shell_exec('\cp "'.$filename.'" '.storage_path('images'));
	            shell_exec('cp -r "'.$filename.'" '.public_path("images/parts"));
	            $exsistImagesOverrited++;
	            $find = strripos($temp, '-');
	            if($find == true){
	               $cut = explode('-', $temp);
	            }
	            array_push($arrayOverrited, $cut[0]);
	        } else {
	            //echo "Файл $filename не существует ";
	            $filename = storage_path('images/temp/').$temp;
	            shell_exec('cp -r "'.$filename.'" '.storage_path('images'));
	            shell_exec('cp -r "'.$filename.'" '.public_path("images/parts"));
	            $uploadedImages++;
	            $find = strripos($temp, '-');
	            if($find == true){
	               $cut = explode('-', $temp);
	            }
	            array_push($arrayUploaded, $cut[0]);
	        }
	        $object->numberOfNewPictures = count($tempPartsImages) - 2;
	    }
	}
	$valsOverrited = array_count_values($arrayOverrited);
	$valsOverrited["all"] = $exsistImagesOverrited;
	$arrayOverrited = [];
	$valsUploaded = array_count_values($arrayUploaded);
	$valsUploaded["all"] = $uploadedImages;
	$arrayUploaded = [];
	array_push($arrayOverrited, $valsOverrited);
        array_push($arrayUploaded, $valsUploaded);
	$object->exsistImagesOwerrited = $arrayOverrited;
	$object->uploadedImages = $arrayUploaded;
	shell_exec('rm '.storage_path('images/temp/*'));
	
	//return response()->json($object);
        $partsImages = scandir(storage_path('images'));
        PartImage::truncate();
        Part::where('image', '!=', '')
              ->where('image', '!=', 'NULL')		
              ->update(['image' => '']);
        $prev = '';
        $collectNumbers = array();
        // return $partsImages;
        foreach($partsImages as $partKey => $partImage ){
            if($partImage != '.' and $partImage != '..' ){
                $insertImage = [
                    'image' => $partImage
                ];
                PartImage::create($insertImage);

                $pos = strripos($partImage, '-');
                if($pos == true){
                    $cutJpg = explode('-', $partImage);
                    unset($cutJpg[(count($cutJpg) - 1)]);
                    $explPartNum[0] = implode('-', $cutJpg);
                }else{
                    $cutJpgWithout = $partImage;
                    // $explPartNum[0] = $partImage;
                    // $collectNumbers[] = $partImage;
                }
                // print json_encode($cutJpg);
                // if(count($cutJpg) != 0){
                //     unset($cutJpg[(count($cutJpg) - 1)]);
                // }
                //print_r((count($cutJpg)));
                // print_r($cutJpg);
                // $explPartNum[0] = $cutJpg;
                // $explPartNum[0] = implode('-', $cutJpg);
                // print json_encode(trim($prev));
                if($prev == '' || $prev == $explPartNum[0] ) {
                    // if($prev == $cutJpgWithout){
                    //     array_unshift($collectNumbers, $partImage);
                    // }
                    // if (strpos($prev, '-') === false) {
                    //     // $collectNumbers[] = $partImage;
                    //     // $collectNumbers[0] = $partImage;
                    // }
                    $collectNumbers[] = $partImage;
                    // print json_encode($collectNumbers);
                } else {
                    //print json_encode($partImage);
                    $serialImg = json_encode($collectNumbers);
                    //print_r (trim($prev));
                    //print json_encode($serialImg);
                    // Part::whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($prev))."%'")
                    //     ->update(['image' => $serialImg]);
                    Part::where('part_number', str_replace('-','', $prev))->update(['image' => $serialImg]);
                    $collectNumbers = array();
                    $collectNumbers[] = $partImage;
                }

                if($partKey == (count($partsImages) - 1)) {
                    $serialImg = json_encode($collectNumbers);
                    // Part::whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($explPartNum[0]))."%'")
                    //     ->update(['image' => $serialImg]);
                    Part::where('part_number', str_replace('-','', $explPartNum[0]))->update(['image' => $serialImg]);
                    $collectNumbers = array();
                    $collectNumbers[] = $partImage;
                    // print json_encode($partImage);
                }
                $prev = $explPartNum[0];
            }
        }
        //return $collectNumbers;
        return $this->sendResponse($object, 'Images was uploaded successfully.');
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
        $partsList['fits'] = $part['fits'];
        $partsList['important_general'] = $part['important_general'];

            $partData = Part::where('brand_name', $part['brand_name'])
                        ->where('part_number', $part['part_number'])
                        ->get()->toArray();
            for($j = 0; $j < count($partData); $j++) {
                $partsList['data'][$j]['warehouses'] = $partData[$j]['warehouse'];
                $partsList['data'][$j]['available'] = $partData[$j]['qty'];
                $partsList['data'][$j]['prices'] = $partData[$j]['price'];
                $partsList['data'][$j]['unique_hashes'] = $partData[$j]['unique_hash'];
				$partsList['data'][$j]['weight_physical'] = $partData[$j]['weight_physical'];
                $partsList['data'][$j]['description_english'] = $partData[$j]['description_english'];
				 $partsList['data'][$j]['fits'] = $partData[$j]['fits'];
				 $partsList['data'][$j]['important_general'] = $partData[$j]['important_general'];
				 $partsList['data'][$j]['image'] = $partData[$j]['image'];
            }
        }

        return response()->json($partsList, 200);
    }

    public function getStockCa(Request $request){
	// !$request->order_name ?? $request->order_name = 'brand_name';
    // !$request->oder_by ?? $request->order_by = 'asc';
    !isset($request->order_name) ? $request['order_name'] = 'brand_name' : $request->order_name;
    !isset($request->order_by) ? $request['order_by'] = 'asc' : $request->order_by;
    $stockPart = UserFilter::apply($request);
    //////////////////////////////////////////////
	// $stockPart = Part::where('is_stock_ca', true)
	// 	    ->whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', $request->part_number)."%'")
	// 	    //->where('part_number_without_too_much', 'LIKE', '%' . $request->part_number . '%')
	// 	    ->where('brand_name', 'LIKE', '%' . $request->brand_name . '%')
	// 	    ->orderBy($request->order_name, $request->order_by)
    // 	    ->paginate(100);
    //////////////////////////////////////////////////////////////////
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

    public function trigger(){
        $data = Excel::toCollection(null, 'proforma.xls', 'local');
        if(count((array)$data) > 0 ){
            foreach($data->toArray() as $key => $value){
                foreach($value as $row){
                    if($row[0] >= 1 && $row[6] == "STOCK"){
                        $insert_data [] = array(
                            'S/N' => $row[0],
                            'ORDER DATE' => $row[1],
                            'ALGORITHM' => $row[2],
                            'REF' => $row[3],
                            'ORDER NUMDER' => $row[4],
                            'ORDER ROW NN' => $row[5],
                            'CLIENT COLUMN 1' => $row[6],
                            'CLIENT COLUMN 2' => $row[7],
                            'CLIENT COLUMN 3' => $row[8],
                            'CLIENT COLUMN 4' => $row[9],
                            'CLIENT COLUMN 5' => $row[10],
                            'BRAND' => $row[11],
                            'DESCRIPTION' => $row[12],
                            'PART NUMBER' => $row[13],
                            'QTY' => $row[14],
                            'UNIT PRICE' => $row[15],
                            'TOTAL TAXABLE PRICE' => $row[16],
                            'VAT AMOUNT' => $row[17],
                            'TOTAL PRICE PAYABLE (INCL. VAT)' => $row[18],                          
                        );
                    }
                }
            }
        }

        return $insert_data;
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

    $part = Part::where('brand_name', $request->brand_name)
        ->where('part_number', $request->part_number)->where('warehouse', 'canada')->first();
    
    if($part && $request->price == "0"){
        $insert_data = self::trigger();
        foreach($insert_data as $data){
            if($data["BRAND"] == $request->brand_name && str_replace( "-", "", $data["PART NUMBER"]) == $request->part_number){
                $cost = $data["UNIT PRICE"];
                $weight = $part->weight_physical;
                $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                $part->update(['changedAdministrator' => 0, 'price' => $price, 'qty' => $part->qty + $data["QTY"]]);
            }
        }
    }
	else if(!$request->is_bundle) {
            // dd("here");
    	    Part::where('brand_name', $request->brand_name)
            ->where('part_number', $request->part_number)
            ->where('warehouse', 'canada')
            ->update($request->except(['bundle_part_data', 'changedAdministrator']));
            // ->update($request->all());
            if((float) $part->price != (float) $request->price){
                $part->update(['changedAdministrator' => 1]);
            }
	} else if($request->is_bundle) {

        if((float) $part->price != (float) $request->price){
            $part->update(['changedAdministrator' => 1]);
        }

	    $bundle = Part::where('brand_name', $request->brand_name)
            ->where('part_number', $request->part_number)
            ->where('warehouse', 'canada')
        	->update(['part_number' => $request->part_number, 'brand_name' => $request->brand_name, 'description_english' => $request->description_english,
		    'description_full' => $request->description_full, 'min_stock' => $request->min_stock, 'price' => $request->price,
		    'min_price' => $request->min_price, 'max_price' => $request->max_price, 'location' => $request->location, 'categories' => $request->categories]);
	    $bundleId =  Part::where('brand_name', $request->brand_name)
                ->where('part_number', $request->part_number)
                ->where('warehouse', 'canada')
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

        $arr = array_filter(
            $arr,
            function ($value) {
                return $value > -1;
            }
        );

        $arr = min($arr);

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

    public function filter(Request $request){

        return UserFilter::apply($request);

        // $parts = Part::where(function($query){
        //     if(Input::get('qty') == '0'){
        //         $query->where('qty', Input::get('qty'));
        //     }
        //     if(Input::get('bundlesOnly') == '1'){
        //         $query->where('is_bundle', Input::get('bundlesOnly'));
        //     }
        //     if(Input::get('QtyAbove')){
        //         $query->where('qty', '>', Input::get('QtyAbove'));
        //     }
        //     if(Input::get('qtybelowminstock') == '1'){
        //         $query->whereColumn('qty', '<' ,'min_stock');
        //     }
        // })->get();
        // return response()->json($parts);
    }
}
