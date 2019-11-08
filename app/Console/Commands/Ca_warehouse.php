<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Part;
use Excel;

class Ca_warehouse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ca:warehouse';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all record that have relation to canade warehouse and insert new data';

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
        echo "Ca_warehouse is started. ".date('Y/m/d H:i:s')."\n";
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
                            'weight_volumetric' => $weight_volumetric,
                            'is_stock_ca' => 1
                        ]);
                    }
                }
            }
        }
        echo "Ca_warehouse - Ok. Done ".date('Y/m/d H:i:s')."\n";
    }
}
