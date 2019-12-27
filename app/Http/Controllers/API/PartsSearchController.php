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
        $partsList = [];
        for($i = 0; $i < count($partNums); $i++) {
            $part_number = str_replace("-", '', str_replace('"', '', str_replace("'", '',$partNums[$i])));
            $parts = Part::where('part_number', $part_number)->get();
            $partsList[$i]['brand_name'] = $parts[0]->brand_name;
            $partsList[$i]['part_number'] = $parts[0]->part_number;
            $partsList[$i]['description_english'] = $parts[0]->description_english;
            $partsList[$i]['weight_physical'] = $parts[0]->weight_physical;
            $partsList[$i]['images'] = $parts[0]->image;
            for($j = 0; $j < count($parts); $j++){
                $partsList[$i]['data'][$j]['warehouses'] = $parts[$j]->warehouse;
                $partsList[$i]['data'][$j]['available'] = $parts[$j]->qty;
                $partsList[$i]['data'][$j]['prices'] = $parts[$j]->price;
                $partsList[$i]['data'][$j]['unique_hashes'] = $parts[$j]->unique_hash;
                $partsList[$i]['data'][$j]['weight_physical'] = $parts[$j]->weight_physical;
                $partsList[$i]['data'][$j]['description_english'] = $parts[$j]->description_english;
                $partsList[$i]['data'][$j]['images'] = $parts[$j]->images;
            }
        }
        return response()->json($partsList, 200);
    }

}
