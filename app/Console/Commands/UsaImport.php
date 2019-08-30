<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Part;

class UsaImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:usa';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import USA parts';

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
	$path = base_path('resources/import_csv/TOYOTA_COMPLETE_tab.csv');
        $data   = array_map(function($datas) { return str_getcsv($datas,"\t"); }, file($path));
        foreach($data as $row) {
	    $uniqueHash = 'USA_'.md5('TOYOTA'.$row[0].'usa');
	    $row[2] = $row[2]*1.35;
            $inputs = ['part_number' => $row[0], 'description_english' => $row[1], 'price' => $row[2], 'brand_name' => 'TOYOTA', 'qty' => 1, 'warehouse' => 'usa', 'unique_hash' => $uniqueHash];
            $part = Part::create($inputs);
        }
    }
}
