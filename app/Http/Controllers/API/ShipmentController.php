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
        $convertPackages = json_decode(json_encode($request->packages), true);
        return $convertPackages;

        $ratesRequest = [
            "rate" => [
                "origin" => [
                    "country" => "CA",
                    "postal_code" => "V3N4R3",
                    "province" => "ON",
                    "city" => "Burnaby",
                    "name" => null,
                    "address1" => "90 Maverick",
                    "address2" => null,
                    "address3" => null,
                    "phone" => null,
                    "fax" => null,
                    "address_type" => null,
                    "company_name" => null
                ],
                "destination" => [
                    "country" => $request->user['country'],
                    "postal_code" => $request->user['postal_code'],
                    "province" => "ON",
                    "city" => $request->user['city'],
                    "name" => $request->user['first_name'],
                    "address1" => $request->user['street_address'],
                    "address2" => "",
                    "address3" => null,
                    "phone" => $request->user['phone'],
                    "fax" => null,
                    "address_type" => null,
                    "company_name" => ""
                ],
                "packaging_information" => [
                    "packaging_type" => "My Packaging",
                    "packages" => $convertPackages
                ]
            ]
        ];
        $postRequest = $client->post($url,  ['body' => json_encode($ratesRequest)]);

        $postResponse = $postRequest->getBody();
        return $postResponse;
    }
}
