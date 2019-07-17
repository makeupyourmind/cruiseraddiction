<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class ShipmentController extends Controller
{
    public function rates(Request $request)
    {
        $client = new \GuzzleHttp\Client(['headers' => ['API_USERNAME' => 'Dmitriy',  'API_PASSWORD' => 'cokzzoa4ky2f']]);
        $url = "https://netparcel.com/shipping_service";
        $ratesRequest = '{
"rate":{
"origin":{
"country":"CA",
"postal_code":"V3N4R3",
"province":"ON",
"city":"Burnaby",
"name":null,
"address1":"90 Maverick",
"address2":null,
"address3":null,
"phone":null,
"fax":null,
"address_type":null,
"company_name":null
},
"destination":{
"country":"CA",
"postal_code":"l4j7y9",
"province":"ON",
"city":"vaughan",
"name":"riz mer",
"address1":"90 street",
"address2":"",
"address3":null,
"phone":"6479988858",
"fax":null,
"address_type":null,
"company_name":""
},
"packaging_information": {
"packaging_type": "My Packaging",
"packages": [
{
"length": 1,
"width": 1,
"height": 1,
"weight": 5,
"weightUnit": "lbs"
},
{
"length": 1,
"width": 1,
"height": 1,
"weight": 20,
"weightUnit": "lbs"
}
]
}
}
}';
        $postRequest = $client->post($url,  ['body' => $ratesRequest]);
        $postResponse = $postRequest->getBody();
        return $postResponse;
    }
}
