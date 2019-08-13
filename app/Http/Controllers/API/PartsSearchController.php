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
        $partNums = explode(',', $request->partNumber);
        $partsList = array();
	//return dd($partNums);
	
        //foreach($partNums as $partNum) {
        for($i = 0; $i < count($partNums); $i++) {
            //$parts = Part::where('part_number', $partNums[$i])->get(['brand_name', 'part_number', 'description_english', 'weight_physical'])->toArray();
	    ////$parts = Part::where('part_number', trim($partNums[$i]))->get()->toArray();
		$parts = Part::whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($partNums[$i]))."%'")->get()->toArray();
	    //dd($parts);
            $usedParts = array();
            foreach ($parts as $part) {
                $partUniq = $part['brand_name'] . $part['part_number'];
                if (in_array($partUniq, $usedParts)) continue;
                $usedParts[] = $partUniq;
                $partsList[$i]['brand_name'] = $part['brand_name'];
                $partsList[$i]['part_number'] = $part['part_number'];
                $partsList[$i]['description_english'] = $part['description_english'];
                $partsList[$i]['weight_physical'] = $part['weight_physical'];
		$partsList[$i]['image'] = $part['image'];

		$partData = Part::where('brand_name', $part['brand_name'])->whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', trim($part['part_number']))."%'")->get()->toArray();
                ////$partData = Part::where('brand_name', $part['brand_name'])->where('part_number', $part['part_number'])->get()->toArray();
                //foreach ($partData as $data) {
                for($j = 0; $j < count($partData); $j++) {
                    $partsList[$i]['data'][$j]['warehouses'] = $partData[$j]['warehouse'];
                    $partsList[$i]['data'][$j]['available'] = $partData[$j]['qty'];
                    $partsList[$i]['data'][$j]['prices'] = $partData[$j]['price'];
                    $partsList[$i]['data'][$j]['unique_hashes'] = $partData[$j]['unique_hash'];
                }
		//}
            }
        }
	//}
        return response()->json($partsList, 200);
    }

}
