<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Order;
use Excel;
use App\Exports\OrdersExport;
use Mail;
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
        $pathToFile = storage_path('app/orders.xls');
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
                $store = Excel::store(new OrdersExport($collect), 'orders.xls', 'local');
                Mail::send([], [] ,function($message) use ($pathToFile) {
                    $message->to('order@vivat-uae.net') //order@vivat-uae.net
                            ->cc('Info@cruiseraddiction.com')
                            ->subject('Orders');           
                    $message->attach($pathToFile);
                }); 
                echo "Order parse is done. Successfully!\n";
            }
            else{
                echo "Order parse is done. File contains no orders!\n";
            }
        }
        else{
            echo "Order parse is done. No new orders\n";
        }
    }
}
