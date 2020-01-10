<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

class ParserController
{
    public function parser_site(Request $request){
        $path = base_path();
        $pass_to_script = $request->part_number;
        $response = exec("cd ". $path. " && node parsing_toyotapartsdeal.js $pass_to_script", $out, $err);
        return $response;
    }
}
