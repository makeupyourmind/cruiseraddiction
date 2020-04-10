<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Storage;

class GetContentFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:content';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get content files from cloud';

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
        $usa = file_get_contents('https://cloud.cruiseraddiction.com/index.php/s/HCGg8HxYYk2xKMc/download');
        Storage::disk('local')->put('USA_SEED.csv', $usa);
        $o1 = file_get_contents('https://cloud.cruiseraddiction.com/index.php/s/k68MHqK7tSNYLAW/download');
        Storage::disk('local')->put('o1_wh_SEED.csv', $o1);
        $brands = file_get_contents('https://cloud.cruiseraddiction.com/index.php/s/ZPQ9wzrikQMccLE/download');
        Storage::disk('local')->put('Brands.csv', $brands);
        $parts = file_get_contents('https://cloud.cruiseraddiction.com/index.php/s/zS32tWd4Z2WSoJN/download');
        Storage::disk('local')->put('Parts.csv', $parts);

        echo "All done : " . date('Y/m/d H:i:s') . "\n";
    }
}
