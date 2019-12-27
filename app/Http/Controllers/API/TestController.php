<?php

namespace App\Http\Controllers\API;
use App\Model\Order;
use Excel;
use App\Exports\OrdersExport;
use Mail;
use \PDF;
use Illuminate\Support\Str;
use Storage;
use Illuminate\Http\Request;

class TestController
{
    public function test(){
        $user_email = 'your_email';
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
