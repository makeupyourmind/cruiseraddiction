<?php

namespace App\Http\Controllers\API;

use App\Model\SameDataPartBundle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Model\Part;
use App\Model\PartImage;
use App\Model\BundlePart;
use App\Model\AvailabilityNotification;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;
use Excel;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\API\UserFilter;
use App\Model\AvailableWarehouse;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use DB;

class PartsController extends BaseController
{

    public function index(Request $request)
    {

        $count_total = Part::distinct('part_number')->count('part_number');

        $parts = Part::orderBy('id', 'desc')
            ->select('id', 'part_number', 'brand_name', 'price', 'qty', 'description_english')
            ->whereIn('brand_name', ['TOYOTA', 'KOYO', 'AISIN', 'TAIHO', 'NSK', 'HKT', '555', 'TOYO', 'NACHI', 'MITSUBOSHI'])
            ->paginate(100);
        // ->get('part_number');
        $data = array();
        foreach ($parts as $key => $value) {
            $data[] = $value;
        }

        $collection = new Collection($data);
        $uniqueItems = $collection->unique('part_number');

        $uniqueItemsArr = [];
        foreach ($uniqueItems as $value) {
            $uniqueItemsArr[] = $value;
        }

        $count_temp = 100 - count($uniqueItemsArr);

        $page = Input::get('page', 1);

        $perPage = 100;

        $offset = 0;
        $paginate = [];
        foreach (array_slice($uniqueItemsArr, $offset, $perPage, true) as $item) {
            array_push($paginate, $item);
        }

        return new LengthAwarePaginator(
            $paginate, // Only grab the items we need    //was array_slice($ordersArr, $offset, $perPage, true)
            $count_total, // Total items
            $perPage, // Items per page
            $page, // Current page
            ['path' => url('/') . '/parts', 'query' => $request->query()] // We need this so we can keep all old query parameters from the url
        );
    }

    public function indexProduct()
    {
        $parts = Part::orderBy('id', 'desc')
            ->whereIn('brand_name', ['TOYOTA', 'KOYO', 'AISIN', 'TAIHO', 'NSK', 'HKT', '555', 'TOYO', 'NACHI', 'MITSUBOSHI'])
            ->paginate(100);
        return response()->json($parts, 200);
    }



    public function stock_ca()
    {
        $client = new \GuzzleHttp\Client();

        for ($i = 1; $i <= 19; $i++) {
            $request = $client->get('http://system.cruiseraddiction.com/api/stock_ca/list?page=' . $i);
            $responseJson = $request->getBody()->getContents();
            $response = json_decode($responseJson, true);

            foreach ($response['data'] as $caPart) {

                $caOrder = array();

                $DD = '44444444-444444444';
                $caOrder['brand_name'] = $caPart['brand']['BrandName'];
                $caOrder['part_number'] = $caPart['PartNumber'];
                // $caOrder['part_number_without_too_much'] = str_replace(['-', '-'], '', $caPart['PartNumber']);
                $caOrder['description_english'] = $caPart['DescriptionEnglish'];
                $caOrder['weight_physical'] = $caPart['part']['WeightPhysical'];
                $caOrder['weight_volumetric'] = $caPart['part']['WeightVolumetric'];
                $caOrder['qty'] = $caPart['Stock_Qty'];
                $caOrder['warehouse'] = 'canada';
                $caOrder['price'] = $caPart['Price'];
                $caOrder['unique_hash'] = 'CA_' . md5($caOrder['brand_name'] . $caOrder['part_number'] . 'canada');
                //$caOrder['unique_hash'] = '1234567qwert';
                $caOrder['is_bundle'] = $caPart['part']['IsBundle'];
                // $caOrder['modified_by'] = $caPart['stats']['modifier']['email'];
                // $caOrder['description_full'] = $caPart['description_full'];
                // $caOrder['notes'] = serialize($caPart);
                // $caOrder['categories'] = $caPart['stats'] && $caPart['stats']['categories'] ? json_encode($caPart['stats']['categories']) : null;
                // $caOrder['tags'] =       $caPart['stats'] && $caPart['stats']['tags'] ? json_encode($caPart['stats']['tags']) : null;
                $caOrder['min_price'] =  $caPart['stats'] ? (string) $caPart['stats']['min_price'] : null;
                $caOrder['max_price'] =  $caPart['stats'] ? (string) $caPart['stats']['max_price'] : null;
                $caOrder['min_stock'] =  $caPart['stats'] ? (string) $caPart['stats']['stock_min'] : null;

                // $caOrder['location'] = $caPart['Location'];
                $caOrder['is_stock_ca'] = true;

                Part::updateOrCreate(
                    ['unique_hash' => $caOrder['unique_hash']],
                    $caOrder
                )->toSql();
            }
        }
        return response()->json('Stock CA imported successfully', 200);
    }

    public function randoms()
    {
        try {
            $randomParts = Part::take(1000)->get()->random(12);
            return response()->json($randomParts, 200);
        } catch (\Throwable $th) {
            $randomParts = [];
            return response()->json($randomParts, 200);
        }
    }

    public function images()
    {

        $path = base_path('resources/import_img/parts_images.zip');
        copy('https://cloud.cruiseraddiction.com/index.php/s/rL74M3nBgjiqQmS/download', $path);

        shell_exec('unzip -d ' . storage_path("images/temp") . ' ' . $path);

        $tempPartsImages = scandir(storage_path('images/temp'));
        $overwrittenExistingImagesCounter = 0;
        $uploadedImagesCounter = 0;
        $arrayUploaded = [];
        $arrayOverwritten = [];
        $arrayOverwrittenImages = [];
        $arrayUploadedImages = [];
        $object = new \stdClass;
        foreach ($tempPartsImages as $key => $temp) {
            if ($temp != '.' and $temp != '..') {
                $filename = storage_path('images/') . $temp;
                if (file_exists($filename)) {
                    $filename = storage_path('images/temp/') . $temp;
                    shell_exec('cp -r "' . $filename . '" ' . storage_path('images')); // \cp
                    shell_exec('cp -r "' . $filename . '" ' . public_path("images/parts"));
                    $overwrittenExistingImagesCounter++;
                    $find = strripos($temp, '-');
                    if ($find == true) {
                        $cut = explode('-', $temp);
                    }
                    array_push($arrayOverwritten, $cut[0]);
                } else {
                    $filename = storage_path('images/temp/') . $temp;
                    shell_exec('cp -r "' . $filename . '" ' . storage_path('images'));
                    shell_exec('cp -r "' . $filename . '" ' . public_path("images/parts"));
                    $uploadedImagesCounter++;
                    $find = strripos($temp, '-');
                    if ($find == true) {
                        $cut = explode('-', $temp);
                    }
                    array_push($arrayUploaded, $cut[0]);
                }
                $object->numberOfImagesInFolder = count($tempPartsImages) - 2;
            }
        }
        $valsOverwritten = array_count_values($arrayOverwritten);
        $valsUploaded = array_count_values($arrayUploaded);

        array_push($arrayOverwrittenImages, $valsOverwritten);
        array_push($arrayUploadedImages, $valsUploaded);

        $object->overwrittenExistingImages = $arrayOverwrittenImages;
        $object->totalOverwritten = $overwrittenExistingImagesCounter;

        $object->uploadedImages = $arrayUploadedImages;
        $object->totalUploaded = $uploadedImagesCounter;
        shell_exec('rm ' . storage_path('images/temp/*'));

        $partsImages = scandir(storage_path('images'));
        PartImage::truncate();
        Part::where('image', '!=', '')
            ->where('image', '!=', 'NULL')
            ->update(['image' => '']);
        $prev = '';
        $collectNumbers = array();

        foreach ($partsImages as $partKey => $partImage) {
            if ($partImage != '.' and $partImage != '..') {
                $insertImage = [
                    'image' => $partImage
                ];
                PartImage::create($insertImage);

                $pos = strripos($partImage, '-');
                if ($pos == true) {
                    $cutJpg = explode('-', $partImage);
                    unset($cutJpg[(count($cutJpg) - 1)]);
                    $explPartNum[0] = implode('-', $cutJpg);
                } else {
                    $cutJpgWithout = $partImage;
                }
                if ($prev == '' || $prev == $explPartNum[0]) {
                    $collectNumbers[] = $partImage;
                } else {
                    $serialImg = json_encode($collectNumbers);
                    Part::where('part_number', str_replace('-', '', $prev))->update(['image' => $serialImg]);
                    $collectNumbers = array();
                    $collectNumbers[] = $partImage;
                }
                if ($partKey == (count($partsImages) - 1)) {
                    $serialImg = json_encode($collectNumbers);
                    Part::where('part_number', str_replace('-', '', $explPartNum[0]))->update(['image' => $serialImg]);
                    $collectNumbers = array();
                    $collectNumbers[] = $partImage;
                }
                $prev = $explPartNum[0];
            }
        }
        return $this->sendResponse($object, 'Images was uploaded successfully.');
    }

    public function show(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'part_number' => 'required|string',
            'brand' => 'required|string'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $parts = Part::where([
            ['brand_name', $request->brand],
            ['part_number', $request->part_number]
        ])
            ->get();
        $partsList = array();

        foreach ($parts as $part) {
            $partsList['brand_name'] = $part['brand_name'];
            $partsList['part_number'] = $part['part_number'];
            $partsList['description_english'] = $part['description_english'];
            $partsList['weight_physical'] = $part['weight_physical'];
            $partsList['images'] = $part['image'];
            $partsList['fits'] = $part['fits'];
            $partsList['important_general'] = $part['important_general'];

            foreach ($parts as $index => $data) {
                if ($request->user_email) {
                    $user_part_subscribed = AvailabilityNotification::where([
                        ['part_number', $request->part_number],
                        ['brand_name', $data['brand_name']],
                        ['warehouse', $data['warehouse']],
                        ['user_email', $request->user_email]
                    ])->first();
                    if ($user_part_subscribed) {
                        $partsList['data'][$index]['id_subscribed'] = $user_part_subscribed->id;
                        $partsList['data'][$index]['subscribed'] = true;
                    }
                }
                $partsList['data'][$index]['warehouses'] = $data['warehouse'];
                $partsList['data'][$index]['available'] = $data['qty'];
                $partsList['data'][$index]['prices'] = $data['price'];
                $partsList['data'][$index]['unique_hashes'] = $data['unique_hash'];
                $partsList['data'][$index]['weight_physical'] = $data['weight_physical'];
                $partsList['data'][$index]['description_english'] = $data['description_english'];
                $partsList['data'][$index]['fits'] = $data['fits'];
                $partsList['data'][$index]['important_general'] = $data['important_general'];
                $partsList['data'][$index]['image'] = $data['image'];
            }
        }

        $available_warehouses = AvailableWarehouse::where('isAvailable', true)->get();
        $array = [];
        foreach ($partsList['data'] as $index => $part) {
            foreach ($available_warehouses as $available) {
                if ($part['warehouses'] == $available['warehouse']) {
                    $array[$index] = $part;
                }
            }
        }
        $partsList['data'] = array_values($array);

        return response()->json($partsList, 200);
    }

    public function getStockCa(Request $request)
    {
        !isset($request->order_name) ? $request['order_name'] = 'brand_name' : $request->order_name;
        !isset($request->order_by) ? $request['order_by'] = 'asc' : $request->order_by;
        $stockPart = UserFilter::apply($request);

        if ($stockPart->count() == 0) {
            $stockPartArr['data'] = array();
            return response()->json($stockPartArr, 200);
        }
        $stockPartArr = $stockPart->toArray();
        $mergedParts = array();
        if (count($stockPartArr['data'][0]['bundle_pivot']) > 0) {
            foreach ($stockPartArr['data'][0]['bundle_pivot'] as $allPivots) {
                $mergedParts[] = $allPivots['bundle_parts'][0];
            }
        }
        $stockPartArr['data'][0]['bundle_parts'] = $mergedParts;
        return response()->json($stockPartArr, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
            'warehouse' => 'required|string'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 403);
        }

        $uniqueHash = md5($request->brand_name . $request->part_number . $request->warehouse);
        $request->merge(["unique_hash" => $uniqueHash]);
        $newPart = Part::create($request->all());
        return $this->sendResponse($newPart, 'New product created successfully.');
    }

    public function trigger()
    {
        $data = Excel::toCollection(null, 'proforma.xls', 'local');
        if (count((array) $data) > 0) {
            foreach ($data->toArray() as $key => $value) {
                foreach ($value as $row) {
                    if ($row[0] >= 1 && $row[6] == "STOCK") {
                        $insert_data[] = array(
                            'S/N' => $row[0],
                            'ORDER DATE' => $row[1],
                            'ALGORITHM' => $row[2],
                            'REF' => $row[3],
                            'ORDER NUMDER' => $row[4],
                            'ORDER ROW NN' => $row[5],
                            'CLIENT COLUMN 1' => $row[6],
                            'CLIENT COLUMN 2' => $row[7],
                            'CLIENT COLUMN 3' => $row[8],
                            'CLIENT COLUMN 4' => $row[9],
                            'CLIENT COLUMN 5' => $row[10],
                            'BRAND' => $row[11],
                            'DESCRIPTION' => $row[12],
                            'PART NUMBER' => $row[13],
                            'QTY' => $row[14],
                            'UNIT PRICE' => $row[15],
                            'TOTAL TAXABLE PRICE' => $row[16],
                            'VAT AMOUNT' => $row[17],
                            'TOTAL PRICE PAYABLE (INCL. VAT)' => $row[18],
                        );
                    }
                }
            }
        }

        return $insert_data;
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand_name' => 'required|string',
            'part_number' => 'required|string',
            // 'description_full' => 'required',
            'description_english' => 'required',
            'min_stock' => 'required',
            'qty' => 'required',
            'price' => 'required',
            'min_price' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }

        $part = Part::where('brand_name', $request->brand_name)
            ->where('part_number', $request->part_number)
            ->where('warehouse', 'canada')
            ->first();

        if ($part && $request->price == "0") {
            $insert_data = self::trigger();
            foreach ($insert_data as $data) {
                if ($data["BRAND"] == $request->brand_name && str_replace("-", "", $data["PART NUMBER"]) == $request->part_number) {
                    $cost = $data["UNIT PRICE"];
                    $weight = $part->weight_physical;
                    $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                    $part->update(['changedAdministrator' => 0, 'price' => $price, 'qty' => $part->qty + $data["QTY"]]);
                }
            }
        } else if ($part && !$request->is_bundle) {
            Part::where('brand_name', $request->brand_name)
                ->where('part_number', $request->part_number)
                ->where('warehouse', 'canada')
                ->update($request->except(['bundle_part_data', 'changedAdministrator']));
            if ((float) $part->price != (float) $request->price) {
                $part->update(['changedAdministrator' => 1]);
            }
        } else if ($part && $request->is_bundle) {

            if ((float) $part->price != (float) $request->price) {
                $part->update(['changedAdministrator' => 1]);
            }

            $bundle = Part::where('brand_name', $request->brand_name)
                ->where('part_number', $request->part_number)
                ->where('warehouse', 'canada')
                ->update([
                    'part_number' => $request->part_number, 'brand_name' => $request->brand_name, 'description_english' => $request->description_english,
                    'min_stock' => $request->min_stock, 'price' => $request->price,
                    'min_price' => $request->min_price, 'max_price' => $request->max_price,
                    'weight' => $request->weight, 'length' => $request->length, 'width' => $request->width, 'depth' => $request->depth
                ]);
            $bundleId =  Part::where('brand_name', $request->brand_name)
                ->where('part_number', $request->part_number)
                ->where('warehouse', 'canada')
                ->first();

            $arr = array();

            BundlePart::where('bundle_id', $bundleId->id)->delete();
            SameDataPartBundle::where('bundle_id', $bundleId->id)->delete();
            foreach ($request->bundle_parts as $bundlePart) {

                $part = Part::where("part_number", 'LIKE', '%' . $bundlePart['part_number'] . '%')
                    ->where('brand_name', 'LIKE', '%' . $bundlePart['brand_name'] . '%')
                    ->where('warehouse', 'canada')
                    ->first();
                $bundle_parts = floor(intval($part->qty) / intval($bundlePart["qty"]));

                array_push($arr, $bundle_parts);

                BundlePart::updateOrCreate(
                    [
                        'bundle_id' => $bundleId->id,
                        'part_id' => $part->id,
                    ],
                    [
                        'bundle_id' => $bundleId->id,
                        'part_id' => $part->id,
                    ]
                );

                SameDataPartBundle::updateOrCreate(
                    [
                        'bundle_part_id' => $part->id,
                        'bundle_id' => $bundleId->id
                    ],
                    [
                        'qty' => $bundlePart['qty'],
                        'description' => $bundlePart['description_english'],
                    ]
                );
            }

            $arr = array_filter(
                $arr,
                function ($value) {
                    return $value > -1;
                }
            );

            $arr = min($arr);

            $bundle = Part::where('brand_name', $request->brand_name)
                ->where('part_number', $request->part_number)
                ->update(['qty' => $arr]);
        }
        return $this->sendResponse('Success', 'Part modified successfully.');
    }

    public function destroy(Request $request)
    {

        $user = Auth::user();

        $check = Hash::check(base64_decode($request->password), Auth::user()->password);

        if (!$check) {
            return response()->json(['error' => 'Wrong password!'], 403);
        };

        $array = json_decode(base64_decode($request->array));

        if (count($array) == 0) {
            return response()->json(['error' => 'nothing selected'], 406);
        };

        foreach ($array as $part_destroyed) {

            $validator = Validator::make((array) $part_destroyed, [
                'brand_name' => 'required|string',
                'part_number' => 'required|string',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error.', $validator->errors(), 202);
            }

            Part::where('brand_name', $part_destroyed->brand_name)
                ->where('part_number', $part_destroyed->part_number)
                ->delete();
        }

        return $this->sendResponse('Success', 'Parts deleted successfully.');
    }

    public function refresh_shopping_cart(Request $request)
    {
        $parts = array();
        foreach ($request->data as $partHash) {
            $parts[] = Part::where('unique_hash', $partHash)->first([
                'brand_name', 'part_number', 'description_english',
                'weight_physical', 'weight_volumetric', 'qty', 'warehouse', 'price', 'unique_hash'
            ]);
        }
        return response()->json($parts, 200);
    }
}
