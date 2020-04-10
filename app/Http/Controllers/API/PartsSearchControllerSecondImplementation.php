<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Model\Amayama;
use App\Model\Tpd;
use App\Model\PartNumberInfo;
use Carbon\Carbon;
use Validator;

class PartsSearchControllerSecondImplementation
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
            $parts = PartNumberInfo::with(['USA_WH' => function ($query) {
                $query->where([
                    ['qty', 0],
                    ['discontinued', 0]
                ])->update([
                    'cost_usd' => 0,
                    'list_cad' => 0,
                    'list_usd' => 0,
                    'qty' => 0
                ]);
            }, 'CA_WH' => function ($query) {
                $query->where([
                    ['qty', 0],
                    ['discontinued', 0]
                ])->update([
                    'min_stock' => 0,
                    'min_price' => 0,
                    'list_usd' => 0,
                    'max_price' => 0,
                    'stock' => 0
                ]);
            }, 'O1_WH' => function ($query) {
                $query->where([
                    ['qty', 0],
                    ['discontinued', 0]
                ])->update([
                    'cost_usd' => 0,
                    'list_cad' => 0,
                    'list_usd' => 0,
                    'qty' => 0
                ]);
            }, 'E1_WH' => function ($query) {
                $query->where([
                    ['qty', 0],
                    ['discontinued', 0]
                ])->update([
                    'cost_usd' => 0,
                    'list_cad' => 0,
                    'list_usd' => 0,
                    'qty' => 0
                ]);
            }])->where('raw_part_number', $part_number)->first();
            $partsList[$index] = $parts;
        }

        $response['parts'] = $partsList;

        return response()->json($response, 200);
    }

    private function search_in_parsing_tables($response, $part_number)
    {
        $sub_days = 30;
        $from = Carbon::today()->subDays($sub_days);
        $to = Carbon::tomorrow();

        $search_parsers = str_replace("-", "", $part_number);
        $amayama_part = Amayama::select('id', 'original_replacements', 'part_number', 'discontinued')
            ->where('part_number', $search_parsers)
            ->whereBetween('created_at', [$from, $to])
            ->first();

        $toyota_parts_deal = Tpd::select('id', 'replaced', 'part_number', 'discontinued')
            ->where('part_number', $search_parsers)
            ->whereBetween('created_at', [$from, $to])
            ->first();

        if ($toyota_parts_deal && $toyota_parts_deal['discontinued']) {
            PartNumberInfo::with(['USA_WH' => function ($query) {
                $query->update(['discontinued' => 1]);
            }])->where('raw_part_number', $search_parsers)->get();
        }

        if ($amayama_part && $amayama_part['discontinued']) {
            PartNumberInfo::with(['CA_WH' => function ($query) {
                $query->update(['discontinued' => 1]);
            }, 'O1_WH' => function ($query) {
                $query->update(['discontinued' => 1]);
            }, 'E1_WH' => function ($query) {
                $query->update(['discontinued' => 1]);
            }])->where('raw_part_number', $search_parsers)->get();
        }

        if (($amayama_part && count($amayama_part['original_replacements']) > 0) && ($toyota_parts_deal && $toyota_parts_deal['replaced'])) {
            $found = PartNumberInfo::where('raw_part_number', $toyota_parts_deal['replaced'])->first(); //найденые на нашем складе
            if ($found) {
                $replaced_id = $toyota_parts_deal['id'];
                $data = $found->replacement_id;
                if (!$data) {
                    $data[] = $replaced_id;
                } else {
                    array_push($data, $replaced_id);
                    $data = array_unique($data);
                }
                $found->update(['replacement_id' => $data]);

                $response['parses'] = PartNumberInfo::with(['USA_WH', 'CA_WH', 'O1_WH', 'E1_WH'])
                    ->where('raw_part_number', str_replace('-', '', $toyota_parts_deal['replaced']))
                    ->get();
            }
        }

        return $response;
    }
}
