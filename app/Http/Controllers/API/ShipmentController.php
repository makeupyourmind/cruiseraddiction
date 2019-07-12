<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Shippo;
use Shippo_Shipment;


class ShipmentController extends Controller
{
    public function __construct()
    {
        // Grab this private key from
        // .env and setup the Shippo api
        Shippo::setApiKey(env('SHIPPO_PRIVATE'));
    }


    public function rates(Request $request)
    {
        $fromAddress = [
            'object_purpose' => 'PURCHASE',
            'name' => 'Shawn Ippotle',
            'company' => 'Shippo',
            'street1' => '215 Clayton St.',
            'city' => 'San Francisco',
            'state' => 'CA',
            'zip' => '94117',
            'country' => 'US',
            'phone' => '+1 555 341 9393',
            'email' => 'shippotle@goshippo.com'
        ];
        $toAddress = [
            'object_purpose' => 'PURCHASE',
            'name' => 'Mr Hippo"',
            'company' => '',
            'street1' => 'Broadway 1',
            'street2' => '',
            'city' => 'New York',
            'state' => 'NY',
            'zip' => '10007',
            'country' => 'US',
            'phone' => '+1 555 341 9393',
            'email' => 'mrhippo@goshippo.com'
        ];
        $parcel = [
            'length'=> '1',
            'width'=> '1',
            'height'=> '5',
            'distance_unit'=> 'in',
            'weight'=> '2',
            'mass_unit'=> 'lb',
        ];
        // Get the shipment object
        $shipment = json_decode(Shippo_Shipment::create([
            'object_purpose'=> 'PURCHASE',
            'address_from'=> $fromAddress,
            'address_to'=> $toAddress,
            'parcels'=> $parcel,
            'insurance_amount'=> '0',
            'insurance_currency'=> 'USD',
            'async'=> false
        ]), true);
        return $shipment['rates'];
    }
}
