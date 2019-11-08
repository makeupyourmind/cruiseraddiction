<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
        'App\Console\Commands\GetPriceList',
        'App\Console\Commands\GmailApi',
        'App\Console\Commands\UploadImages',
        'App\Console\Commands\UsaImport',
        'App\Console\Commands\Proforma',
        'App\Console\Commands\EbayOrdersItems'
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        $schedule->command("get:pricelist")
                 ->daily()->hourly()->between('4:00', '12:00');
        $schedule->command("get:gmail")
                 ->daily();
        // $schedule->command("upload:images")
        //          ->daily();
        // $schedule->command("import:usa")
        //          ->daily();
        $schedule->command('parse:proforma')
                 ->daily();
        $schedule->command('check:EbayOrdersItems')
                 ->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
