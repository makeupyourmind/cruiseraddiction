<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

class ParserController
{
    public function parser_tpd(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_tpd = exec("cd ". $path. " && node parsing_toyotapartsdeal.js $pass_to_script", $out, $err);
        return $response_tpd;
    }

    public function parser_emex(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response_emex = exec("cd ". $path. " && node parsing_emex.js $pass_to_script", $out, $err);
        return $response_emex;
    }
}