<?php


namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use App\VerificationToken;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\oauthAccessToken;
use Mail;
use Illuminate\Support\Facades\Input;
Use Redirect;
use Illuminate\Support\Str;
use App\Model\Part;
use Excel;
use Storage;
use DB;
use App\Model\Ebay_Orders_Items;
use App\Model\Role;

class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        // $role = Role::where('name', $request->role)->first();
        $user = User::create($input);
        // $user->roles()->attach($role);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['first_name'] =  $user->name;

        $token = Str::random();
        $verify = VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token 
        ]);

        $url = env('APP_URL')."/api/verifyRegistration?token=".$token;
        $data = array(
            'url'=> $url,
        );

        Mail::send("email.registration", $data , function ($mail) use ($user) {
            // $mail->from('cruiseraddiction.web@gmail.com');
            $mail->to($user->email)
                 ->subject('Confirm registration');
        });
        // return $this->sendResponse($success, 'User register successfully.');
        return $this->sendResponse("", 'Check your email');
    }

    public function verifyRegistration(Request $request){

        $foundToken = VerificationToken::with(['user'])->where('token', Input::get("token"))->first();
        if(!$foundToken){
            return response()->json("NOT FOUND TOKEN");
        }
        if($foundToken->user->isVerified){
            return $this->sendResponse("", 'Email Already Verified');
        }

        $updated = User::where('email', $foundToken->user->email)->update([
            'isVerified' => 1
        ]);

        Mail::send("email.registration_done", [""] , function ($mail) use ($foundToken) {
            // $mail->from('cruiseraddiction.web@gmail.com');
            $mail->to($foundToken->user->email)
                    ->subject('Welcome to our site');
        });

        return Redirect::to("https://www.cruiseraddiction.com/chack-register");
       
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){

            return $this->sendError('Validation Error.', $validator->errors());
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = User::where('email', $request->email)->first();
            // $user = User::with('roles')->where('email', $request->email)->first();
            // return $user;
            // if($user->isVerified && $user->roles[0]->name == $request->role);
            if($user->isVerified){
                $success['token'] =  $user->createToken('New token')->accessToken;

                return $this->sendResponse($success, 'User authorized successfully.');
            }
            else{
                return $this->sendError('You did not confirm email.', '', 400);
            }
            
        }

            return $this->sendError('Authorization failed.', '', 400);

    }

    public function logout() {

        oauthAccessToken::where('user_id', Auth::user()->id)->delete();

        return $this->sendResponse('', 'User logged out successfully.');
    }

    public function test(){

        $data = Excel::toCollection(null, 'CA_WAREHOUSE.xlsx', 'local');
        Part::where('warehouse', 'canada')->delete();
        if(count((array)$data) > 0 ){
            foreach($data->toArray() as $key => $value){
                foreach($value as $row){
                    if($row[0] != "BRAND" ){
                        $part_another_warehouse = Part::where('part_number', str_replace("-", "", $row[2]))->first();
                        if($part_another_warehouse){
                            $weight_physical = $part_another_warehouse->weight_physical;
                            $weight_volumetric = $part_another_warehouse->weight_volumetric;
                        }
                        else{
                            $weight_physical = null;
                            $weight_volumetric = null;
                        }
                        $uniqueHash = md5(rand().$row[0].$row[2]."canada");
                        Part::create([
                            'brand_name' => $row[0],
                            'description_full' => $row[1],
                            'part_number' => str_replace("-", "", $row[2]),
                            'full_part_number' => $row[2],
                            'qty' => $row[3],
                            'price' => $row[4],
                            'warehouse' => 'canada',
                            'unique_hash' => $uniqueHash,
                            'weight_physical' => $weight_physical,
                            'weight_volumetric' => $weight_volumetric
                        ]);
                    }
                }
            }
        }
        return 'ok';
        // $Ebay_Orders_Items_exsist = Ebay_Orders_Items::orderBy('CreatedDate', 'desc')->limit(1)->first();
        // if(!$Ebay_Orders_Items_exsist){
        //     $Ebay_Orders_Items_exsist = new \stdClass();
        //     $Ebay_Orders_Items_exsist->CreatedDate = null;
        // }
        // $Ebay_Orders_Items = DB::connection('sqlsrv')
        //                          ->select("SELECT * FROM Ebay_Orders_Items WHERE CreatedDate > '$Ebay_Orders_Items_exsist->CreatedDate' ");
        // // $Ebay_Orders_Items = DB::connection('sqlsrv')->select("SELECT * FROM Ebay_Orders_Items");
        // foreach($Ebay_Orders_Items as $ebay_order_item){
        //     $create = Ebay_Orders_Items::create([
        //         'Email' => $ebay_order_item->Email, 
        //         'UserFirstName' => $ebay_order_item->UserFirstName, 
        //         'UserLastName' => $ebay_order_item->UserLastName, 
        //         'SellingManagerSalesRecordNumber' => $ebay_order_item->SellingManagerSalesRecordNumber, 
        //         'CreatedDate' => $ebay_order_item->CreatedDate, 
        //         'ItemID' => $ebay_order_item->ItemID, 
        //         'Title' => $ebay_order_item->Title, 
        //         'SKU' => $ebay_order_item->SKU, 
        //         'ConditionDisplayName' => $ebay_order_item->ConditionDisplayName, 
        //         'QuantityPurchased' => $ebay_order_item->QuantityPurchased,
        //         'TransactionID'=> $ebay_order_item->TransactionID,
        //         'TransactionPrice' => $ebay_order_item->TransactionPrice,
        //         'TaxAmount' => $ebay_order_item->TaxAmount, 
        //         'ActualShippingCost' => $ebay_order_item->ActualShippingCost,
        //         'ActualHandlingCost' => $ebay_order_item->ActualHandlingCost,
        //         'OrderLineItemID' => $ebay_order_item->OrderLineItemID,
        //         'OrderId' => $ebay_order_item->OrderId
        //     ]);
        //     $find = Part::where('part_number', $ebay_order_item->SKU)->first();
        //     if($find){
        //         $find->update(['qty' => $find->qty - $ebay_order_item->QuantityPurchased ]);
        //     }
        // }

        // return response()->json($Ebay_Orders_Items);
        // $hostname = env("IMAP_HOSTNAME");
        // $username = env("IMAP_USERNAME");
        // $password = env("IMAP_PASSWORD");
        // $inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
        // $emails = imap_search($inbox,'ALL');
        // $dates = [];
        // $most_recent = 0;
        // if($emails) {
        //     rsort($emails);
        //     foreach($emails as $email_number) 
        //     {
        //         $overview = imap_fetch_overview($inbox,$email_number,0);
        //         array_push($dates, $overview[0]->date);
        //     }
        //     foreach($dates as $key => $date){
        //         if( strtotime($date) < strtotime('now') && strtotime($date) > strtotime($dates[$most_recent]) ){
        //             $most_recent = $key;
        //         }
        //     }
        //     $max = $dates[$most_recent];

        //     foreach($emails as $email_number) 
        //     {
        //         $overview = imap_fetch_overview($inbox,$email_number,0);

        //         $message = imap_fetchbody($inbox,$email_number,2);

        //         $structure = imap_fetchstructure($inbox, $email_number);

        //         $attachments = array();

        //         if(isset($structure->parts) && count($structure->parts)) 
        //         {
        //             for($i = 0; $i < count($structure->parts); $i++) 
        //             {
        //                 $attachments[$i] = array(
        //                     'is_attachment' => false,
        //                     'filename' => '',
        //                     'name' => '',
        //                     'attachment' => '',
        //                     'date' => $overview[0]->date,
        //                     'subject' => $overview[0]->subject
        //                 );

        //                 if($structure->parts[$i]->ifdparameters) 
        //                 {
        //                     foreach($structure->parts[$i]->dparameters as $object) 
        //                     {
        //                         if(strtolower($object->attribute) == 'filename') 
        //                         {
        //                             $attachments[$i]['is_attachment'] = true;
        //                             $attachments[$i]['filename'] = $object->value;
        //                         }
        //                     }
        //                 }

        //                 if($structure->parts[$i]->ifparameters) 
        //                 {
        //                     foreach($structure->parts[$i]->parameters as $object) 
        //                     {
        //                         if(strtolower($object->attribute) == 'name') 
        //                         {
        //                             $attachments[$i]['is_attachment'] = true;
        //                             $attachments[$i]['name'] = $object->value;
        //                         }
        //                     }
        //                 }

        //                 if($attachments[$i]['is_attachment']) 
        //                 {
        //                     $attachments[$i]['attachment'] = imap_fetchbody($inbox, $email_number, $i+1);

        //                     if($structure->parts[$i]->encoding == 3) 
        //                     { 
        //                         $attachments[$i]['attachment'] = base64_decode($attachments[$i]['attachment']);
        //                     }
        //                     elseif($structure->parts[$i]->encoding == 4) 
        //                     { 
        //                         $attachments[$i]['attachment'] = quoted_printable_decode($attachments[$i]['attachment']);
        //                     }
        //                 }
        //             }
        //         }

        //         foreach($attachments as $attachment)
        //         {
        //             if($attachment["date"] == $max && $attachment["subject"] == "Proforma"){
        //                 $filename = $attachment['name'];
        //                 if(empty($filename)) $filename = $attachment['filename'];
        //                 if(empty($filename)) $filename = time() . ".dat";
        //                 $dst = '../storage/app/test.xls';
        //                 $fp = fopen($dst, "w+");
        //                 // $fp = fopen("./" . $email_number . "-" . $filename, "w+");
        //                 fwrite($fp, $attachment['attachment']);
        //                 fclose($fp);
        //             }
        //         }
        //     }

        // } 
        // imap_close($inbox);

        // echo "Done";

        
        // return response()->json($structure);
        // $parts = Part::where([
        //     ['warehouse', 'canada'],
        //     ['qty', '<', 5]
        // ])->get();
        // $arr = array();

        // foreach($parts as $part){
        //     $obj["brand_name"] = $part->brand_name;
        //     $obj["part_number"] = $part->part_number;
        //     $obj["qty"] = $part->qty;
        //     array_push($arr, $obj);
        // }

        // $data = array(
        //     'parts' => $arr
        // );

        // Mail::send("email.lowQuantity", $data, function ($mail) {
        //     $mail->from('support@gmail.com');
        //     $mail->to("nikitosnov@gmail.com")
        //          ->subject('Low Quantity');
        // });

        // return response()->json($arr);
        // /// ot suda
        // $data = Excel::toCollection(null, 'proforma.xls', 'local');

        // if(count((array)$data) > 0 ){
        //     foreach($data->toArray() as $key => $value){
        //         foreach($value as $row){
        //             if($row[0] >= 1 && $row[6] == "STOCK"){
        //                 $insert_data [] = array(
        //                     'S/N' => $row[0],
        //                     'ORDER DATE' => $row[1],
        //                     'ALGORITHM' => $row[2],
        //                     'REF' => $row[3],
        //                     'ORDER NUMDER' => $row[4],
        //                     'ORDER ROW NN' => $row[5],
        //                     'CLIENT COLUMN 1' => $row[6],
        //                     'CLIENT COLUMN 2' => $row[7],
        //                     'CLIENT COLUMN 3' => $row[8],
        //                     'CLIENT COLUMN 4' => $row[9],
        //                     'CLIENT COLUMN 5' => $row[10],
        //                     'BRAND' => $row[11],
        //                     'DESCRIPTION' => $row[12],
        //                     'PART NUMBER' => $row[13],
        //                     'QTY' => $row[14],
        //                     'UNIT PRICE' => $row[15],
        //                     'TOTAL TAXABLE PRICE' => $row[16],
        //                     'VAT AMOUNT' => $row[17],
        //                     'TOTAL PRICE PAYABLE (INCL. VAT)' => $row[18],                          
        //                 );
        //             }
        //         }
        //     }

        //     foreach($insert_data as $data){
        //         $part = Part::where([ 
        //                 ['brand_name', $data["BRAND"]],
        //                 ['part_number', $data["PART NUMBER"]],
        //                 ['warehouse', 'canada']
        //             ])->first();
        //         // if(!$part){
        //         //     return response()->json($part);
        //         // }
        //         if($part && $part->changedAdministrator == true){
        //             $part->update(['price' => $part->price, 'qty' => $part->qty + $data["QTY"] ]);
        //         }
        //         else if($part && $part->changedAdministrator == false){
        //             $weight = $part->weight_physical;
        //             $cost = $data["UNIT PRICE"];
        //             $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
        //             $part->update(['price' => $price, 'qty' => $part->qty + $data["QTY"] ]);
        //         }
        //         else if(!$part){
        //             $part = Part::where([ 
        //                 ['brand_name', $data["BRAND"]],
        //                 ['part_number', $data["PART NUMBER"]]
        //             ])->first();
        //             if($part){
        //                 $weight = $part->weight_physical;
        //                 $cost = $data["UNIT PRICE"];
        //                 $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
        //                 $uniqueHash = md5($data["BRAND"].$data["PART NUMBER"]."canada");
        //                 Part::create([
        //                     "brand_name" => $data["BRAND"],
        //                     "part_number" => $data["PART NUMBER"],
        //                     "description_english" => $data["DESCRIPTION"],
        //                     "qty" => $data["QTY"],
        //                     "warehouse" => "canada",
        //                     "price" => $price,
        //                     "unique_hash" => $uniqueHash,
        //                     "is_stock_ca" => 1
        //                 ]);
        //             }
        //         }
        //     }
            
        //     if(!empty($insert_data)){
        //         return response()->json($insert_data);
        //     }
        // }
    }
}