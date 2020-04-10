<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Brand;
use Maatwebsite\Excel\Facades\Excel;

class SeedBrands extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:brands';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed brands from csv file';

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
        echo "Start seed brands : " . date('Y/m/d H:i:s') . "\n";

        [$brands] = Excel::toCollection(null, 'Brands.csv', 'local')->toArray();

        Brand::truncate();

        foreach ($brands as $brand) {
            Brand::create([
                'BrandName' => $brand[1]
            ]);
        }

        echo "All done : " . date('Y/m/d H:i:s') . "\n";
    }
}
