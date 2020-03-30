<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\Amayama;
use App\Model\AvailableWarehouse;
use App\Model\AvailabilityNotification;
use App\Model\Tpd;
use Carbon\Carbon;

class PartsSearchController extends BaseController
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'partNumber' => 'required|string'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $partNums = explode(',', str_replace(" ", '', $request->partNumber));
        $partsList = [];

        $response = [];
        if (count($partNums) == 1) {
            $response = $this->search_in_parsing_tables($response, $request->partNumber);
        }

        foreach ($partNums as $index => $part) {
            $part_number = str_replace("-", '', str_replace('"', '', str_replace("'", '', $part)));
            $parts = Part::where('part_number', $part_number)->get();
            // return $parts;
            if (count($parts) > 0) {
                $partsList[$index]['brand_name'] = $parts[0]->brand_name;
                $partsList[$index]['part_number'] = $parts[0]->part_number;
                $partsList[$index]['description_english'] = $parts[0]->description_english;
                $partsList[$index]['weight_physical'] = $parts[0]->weight_physical;
                $partsList[$index]['images'] = $parts[0]->image;
                for ($j = 0; $j < count($parts); $j++) {
                    if ($request->user_email) {
                        $user_part_subscribed = AvailabilityNotification::where([
                            ['part_number', $part_number],
                            ['brand_name', $parts[0]->brand_name],
                            ['warehouse', $parts[$j]->warehouse],
                            ['user_email', $request->user_email]
                        ])->first();
                        if ($user_part_subscribed) {
                            $partsList[$index]['data'][$j]['id_subscribed'] = $user_part_subscribed->id;
                            $partsList[$index]['data'][$j]['subscribed'] = true;
                        }
                    }
                    $partsList[$index]['data'][$j]['warehouses'] = $parts[$j]->warehouse;
                    $partsList[$index]['data'][$j]['available'] = $parts[$j]->qty;
                    $partsList[$index]['data'][$j]['prices'] = $parts[$j]->price;
                    $partsList[$index]['data'][$j]['unique_hashes'] = $parts[$j]->unique_hash;
                    $partsList[$index]['data'][$j]['weight_physical'] = $parts[$j]->weight_physical;
                    $partsList[$index]['data'][$j]['description_english'] = $parts[$j]->description_english;
                    $partsList[$index]['data'][$j]['images'] = $parts[$j]->images;
                    $partsList[$index]['data'][$j]['discontinued'] = $parts[$j]->discontinued;
                    $partsList[$index]['data'][$j]['not_available'] = $parts[$j]->not_available;
                }
            }
        }

        $available_warehouses = AvailableWarehouse::where('isAvailable', true)->get();
        $array = [];
        foreach ($partsList as $key => $value) {
            foreach ($value['data'] as $index => $part) {
                foreach ($available_warehouses as $available) {
                    if ($part['warehouses'] == $available['warehouse']) {
                        $array[$key]['brand_name'] = $value["brand_name"];
                        $array[$key]['part_number'] = $value["part_number"];
                        $array[$key]['description_english'] = $value["description_english"];
                        $array[$key]['weight_physical'] = $value["weight_physical"];
                        $array[$key]['images'] = $value["images"];
                        $array[$key]['data'][$index] = $part;
                        $array[$key]['data'] = array_values($array[$key]['data']);
                    }
                }
            }
        }
        // $partsList[0]['data'] = array_values($array);
        $response['parts'] = $array;
        // $response['parts'] = $partsList;
        $response['requested_part_number'] = $request->partNumber;

        return response()->json($response, 200); //$partsList
    }

    private function search_in_parsing_tables($response, $part_number)
    {
        $sub_days = 30;
        $from = Carbon::today()->subDays($sub_days);
        $to = Carbon::now(); //env("TIMEZONE") for localhost only

        $search_parsers = str_replace("-", "", $part_number);
        $amayama_part = Amayama::select('original_replacements', 'part_number', 'discontinued')
            ->where('part_number', $search_parsers)
            ->whereBetween('created_at', [$from, $to])
            ->first();

        $toyota_parts_deal = Tpd::select('replaced', 'part_number', 'discontinued')
            ->where('part_number', $search_parsers)
            ->whereBetween('created_at', [$from, $to])
            ->first();

        //4 case checked
        if (($amayama_part && $toyota_parts_deal) && ($amayama_part['discontinued'] && $toyota_parts_deal['discontinued'])) {
            Part::where('part_number', $search_parsers)
                ->update(['discontinued' => 1]);
        }
        //2 case checked
        if (!$toyota_parts_deal && $amayama_part) {
            Part::where([
                ['part_number', $search_parsers],
                ['warehouse', 'usa']
            ])->update([
                'discontinued' => 1, 'not_available' => 1, 'qty' => 0,
                'price' => 0, 'bundle_qty' => 0, 'min_price' => 0,
                'max_price' => 0, 'min_stock' => 0
            ]);
        }

        if (($amayama_part && $toyota_parts_deal)
            && ($toyota_parts_deal['replaced'] && count($amayama_part['original_replacements']) > 0)
            && (str_replace("-", "", $amayama_part->original_replacements[0]["original_number"])
                == str_replace("-", "", $toyota_parts_deal->replaced))
        ) {
            $part_both = str_replace("-", "", $toyota_parts_deal->replaced);
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
                ->where('part_number', $part_both)
                ->get();

            $partsList = self::search_transform($parts);

            if (count($parts) > 0) {
                $response['parser'] = [
                    'exist' => true,
                    'replaced' => $partsList
                ];
            } else {
                $response['parser'] = [
                    'exist' => true,
                    'replaced' => ['part_number' => "---------------"]
                ];
            }
        }

        if ($amayama_part) {
            //3 case checked
            if ($amayama_part['discontinued'] && $toyota_parts_deal) {
                Part::where('part_number', $search_parsers)
                    ->where(function ($query) {
                        $query->where('warehouse', 'canada')
                            ->orWhere('warehouse', 'O 1 d.')
                            ->orWhere('warehouse', 'E 1 d.');
                    })->update([
                        'discontinued' => 1, 'qty' => 0, 'price' => 0,
                        'bundle_qty' => 0, 'min_price' => 0, 'max_price' => 0,
                        'min_stock' => 0
                    ]);
            }

            if (count($amayama_part['original_replacements']) > 0) {
                $part_in_our_amayama = str_replace("-", "", $amayama_part->original_replacements[0]["original_number"]);
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
                    ->where('part_number', $part_in_our_amayama)
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
                'data' => "Not available in the amayama table"
            ];
        }

        if ($toyota_parts_deal) {
            //1 case proof checked
            if ($toyota_parts_deal['discontinued']) {
                $searchPart = Part::where([
                    ['part_number', $search_parsers],
                    ['warehouse', 'usa']
                ])->first();
                if ($searchPart) {
                    $searchPart->update([
                        'discontinued' => 1, 'qty' => 0, 'price' => 0,
                        'bundle_qty' => 0, 'min_price' => 0, 'max_price' => 0,
                        'min_stock' => 0
                    ]);
                }
            }

            if ($toyota_parts_deal['replaced']) {
                $part_in_our_toyota = str_replace("-", "", $toyota_parts_deal['replaced']);
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
                    ->where('part_number', $part_in_our_toyota)
                    ->get();

                $partsList = self::search_transform($parts);

                if (count($parts) > 0) {
                    $response['toyota_parts_deal'] = [
                        'exist' => true,
                        'replaced' => $partsList
                    ];
                } else { ///okay
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
                'data' => "Not available in the tpd table"
            ];
        }

        return $response;
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

        $available_warehouses = AvailableWarehouse::where('isAvailable', true)->get();
        $array = [];
        foreach ($partsList['data'] as $index => $part) {
            foreach ($available_warehouses as $available) {
                if ($part['warehouse'] == $available['warehouse']) {
                    $array[$index] = $part;
                }
            }
        }

        return $array;
    }

    // function remove_mark($value)
    // {
    //     return \str_replace("-", "", $value);
    // }
}
