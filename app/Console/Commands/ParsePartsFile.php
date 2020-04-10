<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\PartNumberInfo;
use Illuminate\Support\Facades\DB;
use Storage;

class ParsePartsFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:parts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed in part info table data from csv';

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
        echo "Start seed parts number info : " . date('Y/m/d H:i:s') . "\n";

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        PartNumberInfo::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::table('part_number_info_temp')->truncate();

        //work
        $path = Storage::path('Parts.csv');

        $ipsPath = addslashes($path);
        $req1 = DB::connection()->getpdo()->exec("LOAD DATA LOCAL INFILE '" . $ipsPath . "' 
                    INTO TABLE part_number_info_temp 
                    FIELDS TERMINATED BY ',' 
                    ENCLOSED BY '\"'
                    LINES TERMINATED BY '\n'
                    IGNORE 1 ROWS;");
        $req2 = DB::connection()->getpdo()->exec(
            "INSERT INTO part_number_infos
                    (part_number, raw_part_number, description_english, a_weight, v_weight,brand_name)
                    SELECT PartNumber, ClearPartNumber, DescriptionEnglish, WeightPhysical, WeightVolumetric, `brands`.BrandName 
                    FROM `part_number_info_temp`, `brands` 
                    WHERE part_number_info_temp.BrandId = brands.id;"
        );
        //work

        // $handle = fopen(storage_path('app/Parts_202004021353.csv'), "r");
        // $header = true;
        // [$brands] = Excel::toCollection(null, 'Brands_202004021400.csv', 'local')->toArray();
        // $counter = 1;
        // while ($row = fgetcsv($handle, 1000, ",")) {
        //     if ($header) {
        //         $header = false;
        //     } else {
        //         $key = $this->searchForPosition($row[5], $brands);
        //         PartNumberInfo::create([
        //             'brand_name' => $brands[$key][1],
        //             'part_number' => $row[1],
        //             'raw_part_number' => $row[6],
        //             'a_weight' => $row[3],
        //             'v_weight' => $row[4],
        //             'description_english' => $row[2],
        //             'replacement_id' => []
        //         ]);
        //         var_dump($counter);
        //         $counter++;
        //     }
        // }

        // $data = Excel::toCollection(null, 'Parts_202004021353.csv', 'local');
        // [$brands] = Excel::toCollection(null, 'Brands_202004021400.csv', 'local')->toArray();
        // [$usa_parts] = Excel::toCollection(null, 'USA.csv', 'local')->toArray();
        // echo "Got usa parts : " . date('Y/m/d H:i:s') . "\n";
        // $counter = 1;
        // if (count((array) $data) > 0) {
        //     foreach ($data->toArray() as $value) {
        //         foreach ($value as $row) {
        //             if ($row[1] != "PartNumber") {
        //                 $key = $this->searchForPosition($row[5], $brands);
        //                 PartNumberInfo::create([
        //                     'brand_name' => $brands[$key][1],
        //                     'part_number' => $row[1],
        //                     'raw_part_number' => $row[6],
        //                     'a_weight' => $row[3],
        //                     'v_weight' => $row[4],
        //                     'description_english' => $row[2],
        //                     'replacement_id' => []
        //                 ]);
        //                 $counter++;
        //             }
        //         }
        //     }
        // }

        // echo "PartNumberInfo done : " . date('Y/m/d H:i:s') . "\n";
        // $counter = 0;
        // if (count($usa_parts) > 0) {
        //     foreach ($usa_parts as $usa_part) {
        //         if ($usa_part[0] != "PART#") {
        //             $record = PartNumberInfo::where('raw_part_number', str_replace('-', '', $usa_part[0]))->first();
        //             if ($record) {
        //                 USA_WH::create([
        //                     'part_number_info_id' => $record->id,
        //                     'cost_usd' => $usa_part[2],
        //                     'qty' => 1,
        //                     'pictures' => []
        //                 ]);
        //                 $counter++;
        //                 var_dump($counter);
        //             }
        //         }
        //     }
        // }

        echo "All done : " . date('Y/m/d H:i:s') . "\n";
    }

    public function searchForPosition($searched_value, $array)
    {
        foreach ($array as $key => $val) {
            $index = array_search($searched_value, $val);
            if ($index !== false) {
                return $key;
            }
        }
        return null;
    }
}
