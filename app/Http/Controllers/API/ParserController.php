<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\Tpd;
use App\Model\Amayama;
use App\Model\AvailableWarehouse;
use App\Model\Part;

class ParserController
{
    public function parser_tpd(Request $request)
    {
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_tpd = exec("cd " . $path . " && node parsing_toyotapartsdeal.js $pass_to_script", $out, $err);

        $response = array('out' => $response_tpd, 'err' => $err, 'requested_part_number' => $pass_to_script);
        if (strpos($response_tpd, 'successfully') !== false) {
            $model = Tpd::select('replaced', 'part_number')
                ->where('part_number', str_replace("-", "", $request->part_number))
                ->first();
            if ($model) {
                if ($model['replaced']) {
                    $part_in_our_toyota = str_replace("-", "", $model['replaced']);
                    $parts = Part::select(
                        'description_english',
                        'weight_physical',
                        'weight_volumetric',
                        'qty',
                        'price',
                        'part_number',
                        'brand_name',
                        'unique_hash',
                        'warehouse',
                        'image'
                    )
                        ->where('part_number', str_replace("-", "", $part_in_our_toyota))
                        ->get();

                    $partsList = self::search_transform($parts);

                    if (count($parts) > 0) {
                        $response['toyota_parts_deal'] = [
                            'exist' => true,
                            'replaced' => $partsList
                        ];
                    } else {
                        $response['toyota_parts_deal'] = [
                            'exist' => true,
                            'replaced' => ['part_number' => "---------------"]
                        ];
                    }
                } else {
                    $response['toyota_parts_deal'] = [
                        'exist' => false,
                        'data' => "Replaced null"
                    ];
                }
            } else {
                $response['toyota_parts_deal'] = [
                    'exist' => false,
                    "data" => "No record in parser table"
                ];
            }
        } else {
            $response['toyota_parts_deal'] = [
                'exist' => false,
                "data" => "No success. Record was not added in table"
            ];
        }

        return response()->json($response, 200);
    }

    public function parser_emex(Request $request)
    {
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_emex = exec("cd " . $path . " && node parsing_emex.js $pass_to_script", $out, $err);
        return array('out' => $out, 'err' => $err);
    }

    public function parser_amayama(Request $request)
    {
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_amayama = exec("cd $path && node parsing_amayama $pass_to_script", $out, $err);

        $response = array('out' => $response_amayama, 'err' => $err, 'requested_part_number' => $pass_to_script);
        if (strpos($response_amayama, 'successfully') !== false) {
            $model = Amayama::select('original_replacements', 'part_number')
                ->where('part_number', str_replace("-", "", $request->part_number))
                ->first();
            if ($model) {
                if (count($model['original_replacements']) > 0) {
                    $part_in_our_amayama = str_replace("-", "", $model['original_replacements'][0]["original_number"]);
                    $parts = Part::select(
                        'description_english',
                        'weight_physical',
                        'weight_volumetric',
                        'qty',
                        'price',
                        'part_number',
                        'brand_name',
                        'unique_hash',
                        'warehouse',
                        'image'
                    )
                        ->where('part_number', str_replace("-", "", $part_in_our_amayama))
                        ->get();

                    $partsList = self::search_transform($parts);

                    if (count($parts) > 0) {
                        $response['amayama'] = [
                            'exist' => true,
                            'replaced' => $partsList
                        ];
                    } else {
                        $response['amayama'] = [
                            'exist' => true,
                            'replaced' => ['part_number' => "---------------"]
                        ];
                    }
                } else {
                    $response['amayama'] = [
                        'exist' => false,
                        'data' => "Replaced null"
                    ];
                }
            } else {
                $response['amayama'] = [
                    'exist' => false,
                    "data" => "No record in parser table"
                ];
            }
        } else {
            $response['amayama'] = [
                'exist' => false,
                "data" => "No success. Record was not added in table"
            ];
        }

        return response()->json($response, 200);
    }

    public function parser_partsouq(Request $request)
    {
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_partsouq = exec("cd $path && node parsing_partsouq $pass_to_script", $out, $err);
        return array('out' => $out, 'err' => $err);
    }

    private function search_transform($parts)
    {
        $partsList = array();
        foreach ($parts as $part) {
            $partsList['brand_name'] = $part['brand_name'];
            $partsList['part_number'] = $part['part_number'];
            foreach ($parts as $index => $data) {
                $partsList['data'][$index]['warehouse'] = $data['warehouse'];
                $partsList['data'][$index]['available'] = $data['qty'];
                $partsList['data'][$index]['price'] = $data['price'];
                $partsList['data'][$index]['unique_hash'] = $data['unique_hash'];
                $partsList['data'][$index]['weight_physical'] = $data['weight_physical'];
                $partsList['data'][$index]['description_english'] = $data['description_english'];
                $partsList['data'][$index]['image'] = $data['image'];
            }
        }

        $available_warehouses = AvailableWarehouse::all();
        $array = [];
        if (count($partsList) > 0 && count($partsList['data']) > 0) {
            foreach ($partsList['data'] as $index => $part) {
                foreach ($available_warehouses as $available) {
                    if ($part['warehouse'] == $available['warehouse'] && $available['isAvailable']) {
                        $array['brand_name'] = $partsList['brand_name'];
                        $array['part_number'] = $partsList['part_number'];
                        $array['data'][$index] = $part;
                        $array['data'][$index]['position'] = $available['position'];
                        $array['data'] = array_values($array['data']);
                    } else if (!$available['isAvailable']) {
                        $array['brand_name'] = $partsList['brand_name'];
                        $array['part_number'] = $partsList['part_number'];
                        $array['data'][$index] = $part;
                        $array['data'][$index]['available'] = 0;
                        $array['data'][$index]['clear'] = 1;
                        $array['data'][$index]['position'] = $available['position'];
                        $array['data'] = array_values($array['data']);
                    }
                }
            }
        }

        usort($array['data'], "self::cmp");

        return $array;
    }

    function cmp($a, $b)
    {
        return strcmp($a["position"], $b["position"]);
    }
}
