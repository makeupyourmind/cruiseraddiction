<?php

namespace App\Console\Commands;

use App\Model\E1_WH;
use App\Model\PartNumberInfo;
use App\Model\O1_WH;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class SeedO1Warehouse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:o1ande1';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed o1 warehouse from csv file';

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

        [$o1] = Excel::toCollection(null, 'o1_wh_SEED.csv', 'local')->toArray();
        echo "Got usa parts : " . date('Y/m/d H:i:s') . "\n";
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        O1_WH::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        $counter = 0;
        if (count($o1) > 0) {
            foreach ($o1 as $part) {
                if ($o1[0] != "PART#") {
                    $record = PartNumberInfo::where('raw_part_number', trim(str_replace('-', '', $part[1])))->first();
                    if ($record) {
                        $list_usd = (float) (((((int) $record->a_weight * 6.0) + $part[3] * 0.061 + $part[3]) * 1.3) * 1.037);
                        if ($part[6] === "E 1 d.") {
                            O1_WH::create([
                                'part_number_info_id' => $record->id,
                                'cost_usd' => $part[7],
                                'qty' => $part[5],
                                'list_usd' => round($list_usd, 2)
                            ]);
                        } else {
                            E1_WH::create([
                                'part_number_info_id' => $record->id,
                                'cost_usd' => $part[7],
                                'qty' => $part[5],
                                'list_usd' => round($list_usd, 2)
                            ]);
                        }
                        $counter++;
                        var_dump($counter);
                    }
                }
            }
        }

        echo "All done : " . date('Y/m/d H:i:s') . "\n";
    }
}
