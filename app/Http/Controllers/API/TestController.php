<?php

namespace App\Http\Controllers\API;
use App\Model\Order;
use App\Model\Part;
use Excel;
use App\Exports\OrdersExport;
use Mail;
use \PDF;
use Illuminate\Support\Str;
use Storage;
use Illuminate\Http\Request;

class TestController
{
    public function test2(){
        print 'hello';
        return;
    }

    public function test(){
        //return self::test2();
        // return
        $request[] = array('part_number' => '441116006222', 'brand_name' => 'TOYOTA', 'user_email' => 'marinanov040167@gmail.com');
        $request[] = array('part_number' => '3123635030', 'brand_name' => 'TOYOTA', 'user_email' => 'nikitosnov@gmail.com');
        $request[] = array('part_number' => '4411160060', 'brand_name' => 'TOYOTA', 'user_email' => 'marinanov040167@gmail.com');
        $request[] = array('part_number' => '8529213010', 'brand_name' => 'TOYOTA', 'user_email' => 'nikitosnov@gmail.com');
        $request[] = array('part_number' => '7530560011', 'brand_name' => 'TOYOTA', 'user_email' => 'nikitosnov@gmail.com');
        $request[] = array('part_number' => '4411160061', 'brand_name' => 'TOYOTA', 'user_email' => 'marinanov040167@gmail.com');
        $request[] = array('part_number' => '1215710010', 'brand_name' => 'TOYOTA', 'user_email' => 'marinanov040167@gmail.com');
        //return $request;
        $data = array();

        foreach($request as $position => $value){
            $found_key = array_search($value['user_email'], array_column($request, 'user_email'));
            if( isset($data[$found_key]['user_email']) && $data[$found_key]['user_email'] == $value['user_email']){
                $data[$found_key]['data'][$position]['part_number'] = $value['part_number'];
                $data[$found_key]['data'][$position]['brand_name'] = $value['brand_name'];
                $data[$found_key]['data'] = array_values($data[$found_key]['data']);
            }
            else{
                $data[$found_key]['user_email'] = $value['user_email'];
                $data[$found_key]['data'][0]['part_number'] = $value['part_number'];
                $data[$found_key]['data'][0]['brand_name'] = $value['brand_name'];
                $data[$found_key]['data'] = array_values($data[$found_key]['data']);
            }
        }
        $data = array_values($data);
        // return $data;
        $in_available_arr = array();
        foreach($data as $key => $value){
            foreach( $value['data'] as $index => $element){
                $in_available = Part::where([
                    ['part_number', $element['part_number']],
                    ['brand_name', $element['brand_name']]
                ])->first();
                if($in_available){
                    $in_available_arr[$key]['user_email'] = $value['user_email'];
                    // $in_available_arr[$key]['part_numbers'][$index] = $in_available->part_number;
                    $in_available_arr[$key]['part_numbers'][$index][$in_available->brand_name] = $in_available->part_number;
                    $in_available_arr[$key]['part_numbers'] = array_values($in_available_arr[$key]['part_numbers']);
                }
            }
        }
        //return $in_available_arr;
        foreach($in_available_arr as $available){
            //print json_encode($available["part_numbers"]);
            $pass_to_email = array(
                'parts' => $available["part_numbers"]
            );

            Mail::send('email.in_available_parts', $pass_to_email, function ($message) use ($available) {
                $message->to($available['user_email'])
                        ->subject('Available parts!');
            });
        }

        // return response()->json([], 200);
        return response()->json($in_available_arr, 200);

        $user_email = 'nikitosnov@gmail.com';
        $pass_data_to_pdf = [
            'order_id' => '',
        ];
        $pdf = PDF::loadView('payment_file_history/index', $pass_data_to_pdf);
        $pdf->setOptions(['isPhpEnabled' => true, "enable_php" => true]);
//        $content_pdf = $pdf->download()->getOriginalContent();
//        $unique_hash_string = Str::random(22);
//        Storage::disk('public_uploads')->put("payment_file_history/{$unique_hash_string}.pdf", $content_pdf);
//        $pathToFile = Storage::disk('public_uploads')->path("payment_file_history/{$unique_hash_string}.pdf");
//        Mail::send('email.payment_done', [''], function ($message) use ($user_email, $pathToFile) {
//            $message->to($user_email)
//                    ->subject('Thank you for your business!')
//                    ->attach($pathToFile);
//        });
       return $pdf->download();
    }
}
