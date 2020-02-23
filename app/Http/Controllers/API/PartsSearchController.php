<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\Amayama;
use App\Model\Tpd;
use Carbon\Carbon;

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
        foreach($partNums as $index => $part) {
            $part_number = str_replace("-", '', str_replace('"', '', str_replace("'", '', $part)));
            $parts = Part::where('part_number', $part_number)->get();
            if(count($parts) > 0){
                $partsList[$index]['brand_name'] = $parts[0]->brand_name;
                $partsList[$index]['part_number'] = $parts[0]->part_number;
                $partsList[$index]['description_english'] = $parts[0]->description_english;
                $partsList[$index]['weight_physical'] = $parts[0]->weight_physical;
                $partsList[$index]['images'] = $parts[0]->image;
                for($j = 0; $j < count($parts); $j++){
                    $partsList[$index]['data'][$j]['warehouses'] = $parts[$j]->warehouse;
                    $partsList[$index]['data'][$j]['available'] = $parts[$j]->qty;
                    $partsList[$index]['data'][$j]['prices'] = $parts[$j]->price;
                    $partsList[$index]['data'][$j]['unique_hashes'] = $parts[$j]->unique_hash;
                    $partsList[$index]['data'][$j]['weight_physical'] = $parts[$j]->weight_physical;
                    $partsList[$index]['data'][$j]['description_english'] = $parts[$j]->description_english;
                    $partsList[$index]['data'][$j]['images'] = $parts[$j]->images;
                }
            }
        }

        $response = [
            'parts' => $partsList
        ];

        if(count($partNums) == 1){
            $response = self::search_in_parsing_tables($response, $request->partNumber);
        }
        return response()->json($response, 200);//$partsList
    }

    public function search_in_parsing_tables($response, $part_number){
        $sub_days = 30; 
        $from = Carbon::today()->subDays($sub_days);
        $to = Carbon::now(env("TIMEZONE"));

        $search_parsers = str_replace("-", "", $part_number);
        $amayama_part = Amayama::select('original_replacements', 'part_number')
                                ->where('part_number', $search_parsers)
                                ->whereBetween('created_at', [$from, $to])
                                ->first();

        $toyota_parts_deal = Tpd::select('replaced', 'part_number')
                                ->where('part_number', $search_parsers)
                                ->whereBetween('created_at', [$from, $to])
                                ->first();

        if( ($amayama_part && $toyota_parts_deal) 
            && 
            ( str_replace("-", "", $amayama_part->original_replacements[0]["original_number"]) 
                == str_replace("-", "", $toyota_parts_deal->replaced) 
            )){
            $part_both = str_replace("-", "", $toyota_parts_deal->replaced);
            $data = Part::select('qty', 'price', 'part_number')
                        ->where('part_number', $part_both)
                        ->first();
            if($data){
                $response['parser'] = [
                    'exist' => true, 
                    'replaced' => $data
                ];
            }else{
                $response['parser'] = [
                    'exist' => true, 
                    'replaced' => ['part_number' => "---------------"]
                ];
            }
        }else{
            if($amayama_part){
                if(count($amayama_part['original_replacements']) > 0){
                    $part_in_our_amayama = str_replace("-", "", $amayama_part->original_replacements[0]["original_number"]);
                    $data = Part::select('qty', 'price', 'part_number')
                                ->where('part_number', $part_in_our_amayama)
                                ->first();
                    if($data){
                        $response['amayama'] = [
                            'exist' => true, 
                            'replaced' => $data
                        ];
                    }else{
                        $response['amayama'] = [
                            'exist' => true, 
                            'replaced' => ['part_number' => "---------------"]
                        ];
                    }
                }
            }else{
                $response['amayama'] = [
                    'exist' => false
                ];
            }

            if($toyota_parts_deal){
                if($toyota_parts_deal['replaced']){
                    $part_in_our_toyota = str_replace("-", "", $toyota_parts_deal['replaced']);
                    $data = Part::select('qty', 'price', 'part_number')
                                ->where('part_number', $part_in_our_toyota)
                                ->first();
                    if($data){
                        $response['toyota_parts_deal'] = [
                            'exist' => true,
                            'replaced' => $data
                        ];
                    }
                    else{ ///okay
                        $response['toyota_parts_deal'] = [
                            'exist' => true, 
                            'replaced' => ['part_number' => "---------------"]
                        ];
                    }
                }
            }else{
                $response['toyota_parts_deal'] = [
                    'exist' => false
                ];
            }
        }

        return $response;
    }

}
