<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Model\PaymentHistoryFile;
use Storage;

class PaymentHistoryFileController extends BaseController
{
    public function getUserPaymentFiles(Request $request){
        $user_id = $request->user()->id;
        $payment_history_file = PaymentHistoryFile::where('user_id', $user_id)->get();

        return $this->sendResponse($payment_history_file, 'Data received successfully.');
    }

    public function downloadUserPaymentFile($id){
        $payment_history_file = PaymentHistoryFile::find($id);
        if(!$payment_history_file){
            abort(404);
        }
        $unique_hash = $payment_history_file->unique_hash;
        $originalFileName = $payment_history_file->originalFileName;
        return Storage::disk('public_uploads')->download("payment_file_history/{$unique_hash}.pdf", $originalFileName);
    }

    public function destroyUserPaymentFiles($id){
        $payment_history_file = PaymentHistoryFile::find($id);
        if(!$payment_history_file){
            return $this->sendError('', "Not found", 404);
        }
        Storage::disk('public_uploads')->delete("payment_file_history/".$payment_history_file->unique_hash.".pdf");
        $payment_history_file->delete();
        return $this->sendResponse("Ok", 'File was deleted successfully.');
    }
}
