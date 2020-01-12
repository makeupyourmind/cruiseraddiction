<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Order;
use Excel;
use App\Exports\OrdersExport;
use Mail;
use App\Model\OrderNumber;
use Storage;

class SendOrdersToSuppliers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sendOrders:ToSuppliers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send orders to suppliers';

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
        echo "Order parser is started : ".date('Y/m/d H:i:s')."\n";
        $orders = Order::where('isCheckedParser', 0)->get();
        Order::where('isCheckedParser', 0)->update(['isCheckedParser' => 1]);
        $collect = [];
        if(count($orders) > 0){
            foreach ($orders as $order){
                foreach($order->data as $data){
                    if($data['warehouse'] != 'canada' && $data['warehouse'] != 'usa'){
                        $temp = [
                            'BrandName' => $data["brand_name"],
                            'PartNumber' => $data["part_number"],
                            'qty' => $data["count"],
                            'price' => $data["price"],
                            'price tolerance' => '15',
                            'replaces' => 'ONLY THIS #',
                            'warehouse' => 'JA',
                            'note' => '',
                            'DescriptionEnglish' => $data["description_english"],
                            'DescriptionRussian' => '',
                            'Column 1' => $order['id'],
                            'Column 2' => $data["unique_hash"],
                            'Column 3' => '',
                            'Column 4' => '',
                            'Barcode' => '',
                            'Information 1' => $order['id'],
                            'Information 2' => '',
                        ];
                        array_push($collect, $temp);
                    }
                }
            }
            if(count($collect) > 0){
                $OrderNumber = OrderNumber::first();
                $orderNumber = $OrderNumber->number;
                $store = Excel::store(new OrdersExport($collect), "orders/order_$orderNumber.xls", 'local');
                $pathToFile = storage_path("app/orders/order_$orderNumber.xls");
                Mail::send([], [] ,function($message) use ($pathToFile, $orderNumber) {
                    $message->to('Info@cruiseraddiction.com') //order@vivat-uae.net
                            // ->cc('Info@cruiseraddiction.com')
                            ->subject("Cruiser Addiction Test: Order # $orderNumber");           
                    $message->attach($pathToFile);
                });
                $OrderNumber->increment('number', 1);
                echo "Order parser is done. Successfully! ".date('Y/m/d H:i:s')."\n";
            }
            else{
                echo "Order parser is done. File contains no orders that belongs to Canada warehouse or USA! ".date('Y/m/d H:i:s')."\n";
            }
        }
        else{
            echo "Order parser is done. No new orders ".date('Y/m/d H:i:s')."\n";
        }
    }
}
