<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Helper;
use Redirect;
use Illuminate\Support\Facades\Input;
/** All Paypal Details class **/
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;
use App\Model\Customer;
use App\Model\Price;
use App\Model\Part;
use App\Model\Order;
use App\User;
use App\PayPalData;
use Illuminate\Support\Str;

class PayPalController extends Controller
{
    private $_api_context;
    protected $price;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        /** setup PayPal api context **/
        $paypal_conf = \Config::get('paypal');
        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
        $this->_api_context->setConfig($paypal_conf['settings']);
        // $this->price = Input::get('amount');

    }
    /**
     * Show the application paywith paypalpage.
     *
     * @return \Illuminate\Http\Response
     */
    public function payWithPaypal()
    {
        $amount = $this->price;
        return view('paywithpaypal', compact('amount'));
    }
    /**
     * Store a details of payment with paypal.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function post(Request $request){
        $hash = Str::random();
        PayPalData::create([
            'amount' => $request->amount,
            'currency' => $request->currency,
            'result' => $request->result,
            'hash' => $hash
        ]);
        return response()->json($hash);
    }

    public function postPaymentWithpaypal(Request $request)
    {
        $payPalData = PayPalData::where('hash', $request->hash)
                                ->first();
        Session::put('amount', $payPalData->amount);
        Session::put('result', $payPalData->result);
	    $orderData = json_decode(base64_decode($payPalData->result), true);
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        $item_list = new ItemList();
        $tempArr = [];
        $total_full = 0;
        foreach($orderData['data'] as $partHash) {
            $partCollection = Part::where('unique_hash', $partHash['unique_hash'])
                                  ->get(['brand_name', 'part_number', 'warehouse', 'unique_hash', 'price', 'description_english']);
    	    $part = $partCollection->firstWhere('unique_hash', $partHash['unique_hash']);
    	    $price_total = $orderData['exchange'] ? $part->price * $orderData['exchange'] : $part->price;

    	    $rounded = round($price_total, 2);
    	    $total_full += $rounded;

            $item_ = new Item();
            $item_->setName($part->part_number." ".$part->brand_name) /** item name **/
                  ->setCurrency($payPalData->currency) //was USD
                  ->setQuantity(1)
                  ->setPrice($rounded);

            array_push($tempArr, $item_);
        }
        
        $total_full += $orderData['user']['shipping']['total_price'];
        $item_shipping = new Item();
        $item_shipping->setName('Item shipping '. $orderData['user']['shipping']['service_name']) /** item name **/
                      ->setCurrency($payPalData->currency) //was USD
                      ->setQuantity(1)
                      ->setPrice($orderData['user']['shipping']['total_price']); /** unit price **/

        array_push($tempArr, $item_shipping);
        if($orderData['taxes']['active']){
            $item_taxes = new Item();
            $item_taxes->setName('Item taxes')
                       ->setCurrency($payPalData->currency)
                       ->setQuantity(1)
                       ->setPrice($orderData['taxes']['total_price']);
            array_push($tempArr, $item_taxes);
        }
        $item_list->setItems($tempArr);        
        
        $amount = new Amount();
        $amount->setCurrency($payPalData->currency) //was USD
               ->setTotal($total_full);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
                    ->setItemList($item_list)
                    ->setDescription('Your transaction description');
        $redirect_urls = new RedirectUrls();

        $redirect_urls->setReturnUrl('https://testback.cruiseraddiction.com/paypal/success') /** Specify return URL **/
                      ->setCancelUrl(URL::route('payment.status'));
        $payment = new Payment();
        $payment->setIntent('Sale')
                ->setPayer($payer)
                ->setRedirectUrls($redirect_urls)
                ->setTransactions(array($transaction));

        try {
            $payment->create($this->_api_context);
        } catch (\PayPal\Exception\PayPalConnectionException $ex) {
    	    dd($ex);
            if (\Config::get('app.debug')) {
                \Session::put('error','Connection timeout');
                return Redirect::route('addmoney.paywithpaypal');
                /** echo "Exception: " . $ex->getMessage() . PHP_EOL; **/
                /** $err_data = json_decode($ex->getData(), true); **/
                /** exit; **/
            } else {
                \Session::put('error','Some error occur, sorry for inconvenient');
                return Redirect::route('addmoney.paywithpaypal');
                /** die('Some error occur, sorry for inconvenient'); **/
            }
        }

        foreach($payment->getLinks() as $link) {
            if($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }
        /** add payment ID to session **/
        Session::put('paypal_payment_id', $payment->getId());
        if(isset($redirect_url)) {
            /** redirect to paypal **/
            PayPalData::where('hash', $request->hash)->delete();
            return Redirect::away($redirect_url);
        }
        \Session::put('error','Unknown error occurred');
        return Redirect::route('addmoney.paywithpaypal');
    }

    public function getPaymentStatus()
    {
        /** Get the payment ID before session clear **/
        //$payment_id = Session::get('paypal_payment_id');
        $payment_id = Input::get('paymentId');

        /** clear the session payment ID **/
        Session::forget('paypal_payment_id');
        if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            \Session::put('error','Payment failed');
            return Redirect::route('addmoney.paywithpaypal');
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        /** PaymentExecution object includes information necessary **/
        /** to execute a PayPal account payment. **/
        /** The payer_id is added to the request query parameters **/
        /** when the user is redirected from paypal back to your site **/
        $execution = new PaymentExecution();
        $execution->setPayerId(Input::get('PayerID'));
        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_api_context);
        /** dd($result);exit; /** DEBUG RESULT, remove it later **/
        if ($result->getState() == 'approved') {

            /** it's all right **/
            /** Here Write your database logic like that insert record or value in database if you want **/
            \Session::put('success','Payment success');
            $resultData = Session::get('result');
            Session::forget('result');

            $amount = Session::get('amount');
            Session::forget('amount');

            $orderData = json_decode(base64_decode($resultData), true);

            $customersOrder = array();
            $customersOrder['user'] = $orderData['user'];
            $customersOrder['amount'] = $amount;
            $dataElem = 0;
            $array = [];
            //dd($customersOrder);
            foreach($orderData['data'] as $partHash) {
                $partCollection = Part::where('unique_hash', $partHash['unique_hash'])->get(['brand_name', 'part_number', 'warehouse', 'unique_hash', 'price', 'description_english']);
                $part = $partCollection->firstWhere('unique_hash', $partHash['unique_hash']);

                $object = new \stdClass();
                $object->amount = $customersOrder['amount'];
                $object->brand_name = $part->brand_name;
                $object->client_column_two = time().$dataElem;
                $object->count = $partHash['count'];
                $object->description_english = $part->description_english;
                $object->part_number = $part->part_number;
                $object->part_number_without_too_much = str_replace(['-', '-'], '', $part->part_number);
                $object->price = $part->price;
                $object->unique_hash = $part->unique_hash;
                $object->warehouse = $part->warehouse;
                $user = User::where('email', $customersOrder['user']['email'])->first();
                $object->user_id = $user->id;
                array_push($array, $object);
		        $dataElem++;
            }

            $ship = new \stdClass();
            $ship->create_ac = $customersOrder['user']['create_ac'];
            $ship->same_address = $customersOrder['user']['same_address'];
            $ship->shipping = $customersOrder['user']['shipping'];
            $ship->currency = $customersOrder['user']['currency'];
            $ship->order_notes = $customersOrder['user']['order_notes'];
            
            $newOrder = Order::create([
                'shipping' => $ship,
                'amount' => $customersOrder['amount'],
                'data' => $array,
                'user_id' => $customersOrder['user']['id']
            ]);

            try{
                $insertedId = $newOrder->id;
                $customersOrder['order_id'] = $insertedId;
                $customersOrder['data'] = $newOrder->data;
                $url = base64_encode(json_encode($customersOrder));
                return Redirect::away('http://test.cruiseraddiction.com/final?result='.$url);
                        
            } catch(Exception $e){
                dd($e);
            }
        }
        \Session::put('error','Payment failed');
        return Redirect::route('addmoney.paywithpaypal');
    }
}
