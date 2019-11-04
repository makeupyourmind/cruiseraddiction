<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App\Model\Ebay_Orders_Items;
use App\Model\Part;

class EbayOrdersItems extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:EbayOrdersItems';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Ebay_Orders_Items';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        date_default_timezone_set('Canada/Eastern');
        $Ebay_Orders_Items_exsist = Ebay_Orders_Items::orderBy('CreatedDate', 'desc')->limit(1)->first();
        if(!$Ebay_Orders_Items_exsist){
            $Ebay_Orders_Items_exsist = new \stdClass();
            $Ebay_Orders_Items_exsist->CreatedDate = null;
        }
        $Ebay_Orders_Items = DB::connection('sqlsrv')
                                ->select("SELECT * FROM Ebay_Orders_Items WHERE CreatedDate > '$Ebay_Orders_Items_exsist->CreatedDate' ");
        // $Ebay_Orders_Items = DB::connection('sqlsrv')->select("SELECT * FROM Ebay_Orders_Items");
        foreach($Ebay_Orders_Items as $ebay_order_item){
            $create = Ebay_Orders_Items::create([
                'Email' => $ebay_order_item->Email, 
                'UserFirstName' => $ebay_order_item->UserFirstName, 
                'UserLastName' => $ebay_order_item->UserLastName, 
                'SellingManagerSalesRecordNumber' => $ebay_order_item->SellingManagerSalesRecordNumber, 
                'CreatedDate' => $ebay_order_item->CreatedDate, 
                'ItemID' => $ebay_order_item->ItemID, 
                'Title' => $ebay_order_item->Title, 
                'SKU' => $ebay_order_item->SKU, 
                'ConditionDisplayName' => $ebay_order_item->ConditionDisplayName, 
                'QuantityPurchased' => $ebay_order_item->QuantityPurchased,
                'TransactionID'=> $ebay_order_item->TransactionID,
                'TransactionPrice' => $ebay_order_item->TransactionPrice,
                'TaxAmount' => $ebay_order_item->TaxAmount, 
                'ActualShippingCost' => $ebay_order_item->ActualShippingCost,
                'ActualHandlingCost' => $ebay_order_item->ActualHandlingCost,
                'OrderLineItemID' => $ebay_order_item->OrderLineItemID,
                'OrderId' => $ebay_order_item->OrderId
            ]);
            $find = Part::where('part_number', str_replace("-", "",$ebay_order_item->SKU))->first();
            if($find){
                $find->update(['qty' => $find->qty - $ebay_order_item->QuantityPurchased ]);
            }
        }
        echo "Ebay Done : ".date('Y/m/d H:i:s')."\n";
    }
}
