<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\Tpd;
use App\Model\Amayama;
use App\Model\Part;

class ParserController
{
    public function parser_tpd(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_tpd = exec("cd ". $path. " && node parsing_toyotapartsdeal.js $pass_to_script", $out, $err);

        $response = array('out' => $response_tpd, 'err' => $err);
        if (strpos($response_tpd, 'successfully') !== false) {
            $model = Tpd::select('replaced', 'part_number')
                            ->where('part_number', str_replace("-", "", $request->part_number))
                            ->first();
            if($model){
                if($model['replaced']){
                    $data = Part::select('qty', 'price', 'part_number')
                                    ->where('part_number', str_replace("-", "", $model->part_number))
                                    ->first();
                    if($data){
                        $response['toyota_parts_deal'] = [
                            'exist' => true,
                            'replaced' => $data
                        ];
                    }else{
                        $response['toyota_parts_deal'] = [
                            'exist' => true,
                            'replaced' => ['part_number' => "---------------"]
                        ];
                    }
                }
            }else{
                $response['toyota_parts_deal'] = [
                    'exist' => false,
                    "data" => "No record in parser table"
                ];
            }
        }else{
            $response['toyota_parts_deal'] = [
                'exist' => false,
                "data" => "No success"
            ];
        }

        return response()->json($response, 200);
    }

    public function parser_emex(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_emex = exec("cd ". $path. " && node parsing_emex.js $pass_to_script", $out, $err);
        return array('out' => $out, 'err' => $err);
    }

    public function parser_amayama(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_amayama = exec("cd $path && node parsing_amayama $pass_to_script", $out, $err);

        $response = array('out' => $response_amayama, 'err' => $err);
        if (strpos($response_amayama, 'successfully') !== false) {
            $model = Amayama::select('original_replacements','part_number')
                                ->where('part_number', str_replace("-", "", $request->part_number))
                                ->first();
            if($model){
                if(count($model['original_replacements']) > 0){
                    $data = Part::select('qty', 'price', 'part_number')
                                ->where('part_number', str_replace("-", "", $model->part_number))
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
                    'exist' => false,
                    "data" => "No record in parser table"
                ];
            }
        }else{
            $response['amayama'] = [
                'exist' => false,
                "data" => "No success"
            ];
        }

        return response()->json($response, 200);
    }

    public function parser_partsouq(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_partsouq = exec("cd $path && node parsing_partsouq $pass_to_script", $out, $err);
        return array('out' => $out, 'err' => $err);
    }
}
