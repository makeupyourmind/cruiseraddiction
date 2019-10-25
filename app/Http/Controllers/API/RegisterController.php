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
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['first_name'] =  $user->name;

        $token = Str::random();
        $verify = VerificationToken::create([
            'user_id' => $user->id,
            'token' => $token 
        ]);

        $url = "http://localhost:8000/api/verifyRegistration?token=".$token;
        $data = array(
            'url'=> $url,
        );

        Mail::send("email.registration", $data , function ($mail) use ($user) {
            $mail->from('support@gmail.com');
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
            $mail->from('support@gmail.com');
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
            if($user->isVerified){
                $success['token'] =  $user->createToken('New token')->accessToken;

                return $this->sendResponse($success, 'User authorized successfully.');
            }
            
        }

            return $this->sendError('Authorization failed.', '', 401);

    }

    public function logout() {

        oauthAccessToken::where('user_id', Auth::user()->id)->delete();

        return $this->sendResponse('', 'User logged out successfully.');
    }

    public function test(){
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
        $data = Excel::toCollection(null, 'proforma.xls', 'local');

        if(count((array)$data) > 0 ){
            foreach($data->toArray() as $key => $value){
                foreach($value as $row){
                    if($row[0] >= 1 && $row[6] == "STOCK"){
                        $insert_data [] = array(
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

            foreach($insert_data as $data){
                $part = Part::where([ 
                        ['brand_name', $data["BRAND"]],
                        ['part_number', $data["PART NUMBER"]],
                        ['warehouse', 'canada']
                    ])->first();
                // if(!$part){
                //     return response()->json($part);
                // }
                if($part && $part->changedAdministrator == true){
                    $part->update(['price' => $part->price, 'qty' => $part->qty + $data["QTY"] ]);
                }
                else if($part && $part->changedAdministrator == false){
                    $weight = $part->weight_physical;
                    $cost = $data["UNIT PRICE"];
                    $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                    $part->update(['price' => $price, 'qty' => $part->qty + $data["QTY"] ]);
                }
                else if(!$part){
                    $part = Part::where([ 
                        ['brand_name', $data["BRAND"]],
                        ['part_number', $data["PART NUMBER"]]
                    ])->first();
                    if($part){
                        $weight = $part->weight_physical;
                        $cost = $data["UNIT PRICE"];
                        $price = ((($weight * 6.0) + $cost * 0.061 + $cost) * 1.3) * 1.037;
                        $uniqueHash = md5($data["BRAND"].$data["PART NUMBER"]."canada");
                        Part::create([
                            "brand_name" => $data["BRAND"],
                            "part_number" => $data["PART NUMBER"],
                            "description_english" => $data["DESCRIPTION"],
                            "qty" => $data["QTY"],
                            "warehouse" => "canada",
                            "price" => $price,
                            "unique_hash" => $uniqueHash,
                            "is_stock_ca" => 1
                        ]);
                    }
                }
            }
            
            if(!empty($insert_data)){
                return response()->json($insert_data);
            }
        }
    }
}