<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;

class PartsSearchController extends BaseController
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'partNumber' => 'required|string'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }
    
        $partNums = explode(',', str_replace(" ", '', $request->partNumber));
        $partsList = array();
        for($i = 0; $i < count($partNums); $i++) {
	    ////$parts = Part::where('part_number', trim($partNums[$i]))->get()->toArray();
	    //$parts=Part::all();
	//    dd($parts);
		//$parts=Part::where('part_number', $partNums[$i])->get();select('part_number', 'brand_name', 'description_english', 'weight_physical', 'warehouse', 'qty', 'price', 'unique_hash', 'image')
		$parts=Part::select('part_number', 'brand_name', 'description_english', 'weight_physical', 'warehouse', 'qty', 'price', 'unique_hash', 'image')->where('part_number', $partNums[$i])->get();
		//dd($parts);
	//	$parts = Part::whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($partNums[$i]))."%'")->get()->toArray();
	    //dd($parts);
            $usedParts = array();
	    $k = 0;
        //    foreach ($parts as $part) {
		//var_dump($part);
                //$partUniq = $part['brand_name'] . $part['part_number'];
                //if (in_array($partUniq, $usedParts)) continue;
	        //$usedParts[] = $partUniq;
                $partsList[$i]['brand_name'] = $parts[0]['brand_name'];
                $partsList[$i]['part_number'] = $parts[0]['part_number'];
                $partsList[$i]['description_english'] = $parts[0]['description_english'];
                $partsList[$i]['weight_physical'] = $parts[0]['weight_physical'];
		$partsList[$i]['images'] = $parts[0]['image'];
		//$partData = Part::where('brand_name', $part['brand_name'])->whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($part['part_number']))."%'")->get()->toArray();
        //        $partData = Part::where('brand_name', $part['brand_name'])->where('part_number', $part['part_number'])->get()->toArray();
                //foreach ($partData as $data) {
                for($j = 0; $j < count($parts); $j++) {
			//$partUniq = $parts[$j]['brand_name'] . $parts[$j]['part_number'];
                //if (in_array($partUniq, $usedParts)) continue;
	        //    $usedParts[] = $partUniq;
                    $partsList[$i]['data'][$j]['warehouses'] = $parts[$j]['warehouse'];
                    $partsList[$i]['data'][$j]['available'] = $parts[$j]['qty'];
                    $partsList[$i]['data'][$j]['prices'] = $parts[$j]['price'];
                    $partsList[$i]['data'][$j]['unique_hashes'] = $parts[$j]['unique_hash'];
                }
		$k++;
		//}
            //}
        }
//dd($partsList);
	//}
        return response()->json($partsList, 200);
    }

}
