<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Order;
use Excel;
use App\Exports\OrdersExport;
use Mail;

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
        $orders = Order::with(['user'])->where('isCheckedParser', 0)->get();
        $pathToFile = storage_path('app/orders.xls');
        if(count($orders) > 0){
            $store = Excel::store(new OrdersExport(), 'orders.xls', 'local');
            Mail::send([], [] ,function($message) use ($pathToFile) {
                $message->to('order@vivat-uae.net') //order@vivat-uae.net
                        ->cc('Info@cruiseraddiction.com')
                        ->subject('Orders');           
                $message->attach($pathToFile);
            });           
            echo 'Order parse is done. Successfully!';
        }
        else{
            echo 'Order parse is done. No new orders';
        }
    }
}
