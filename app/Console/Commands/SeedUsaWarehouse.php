<?php

namespace App\Console\Commands;

use App\Model\PartNumberInfo;
use App\Model\USA_WH;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;

class SeedUsaWarehouse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:usa';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed usa warehouse from csv file';

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
        echo "Start seed USA warehouse : " . date('Y/m/d H:i:s') . "\n";

        [$usa_parts] = Excel::toCollection(null, 'USA_SEED.csv', 'local')->toArray();
        echo "Got usa parts : " . date('Y/m/d H:i:s') . "\n";

        $counter = 0;
        if (count($usa_parts) > 0) {
            foreach ($usa_parts as $usa_part) {
                if ($usa_part[0] != "PART#") {
                    $record = PartNumberInfo::where('raw_part_number', str_replace('-', '', $usa_part[0]))->first();
                    if ($record) {
                        $list_usd = (float) (((((int) $record->a_weight * 6.0) + $usa_part[2] * 0.061 + $usa_part[2]) * 1.3) * 1.037);
                        USA_WH::create([
                            'part_number_info_id' => $record->id,
                            'cost_usd' => $usa_part[2],
                            'qty' => 1,
                            'list_usd' => round($list_usd, 2)
                        ]);
                        $counter++;
                        var_dump($counter);
                    }
                }
            }
        }

        echo "All done : " . date('Y/m/d H:i:s') . "\n";
    }
}
