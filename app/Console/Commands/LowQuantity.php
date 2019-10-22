<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\Part;

class LowQuantity extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'low:quantity';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Low quantity in stock';

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
        //
        $parts = Part::where('qty', '<', 5)->get();

        return response()->json($parts);
    }
}
