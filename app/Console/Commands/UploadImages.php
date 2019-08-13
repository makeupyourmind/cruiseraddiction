<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\PartImage;
use App\Model\Part;
use DB;

class UploadImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upload:images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upload parts images from remoute resource';

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
	shell_exec('rm -r '.storage_path("images"));
	shell_exec('rm -r '.storage_path().'/../public/images/parts/*');
	$path = base_path('resources/import_img/parts_images.zip');
        copy('http://cruiseraddiction.ddns.net:81/nextcloud/index.php/s/XfeA3YjsswfmTex/download', $path);
	shell_exec('unzip -d '.storage_path("images").' '.$path);

	$directories = scandir(storage_path('images'));
	foreach($directories as $directory){
    	    if($directory!='.' and $directory!='..' ){
		$directoryPath = storage_path('images/').$directory;
		shell_exec('cp -r "'.$directoryPath.'"/* '.storage_path('images'));
		shell_exec('cp -r "'.$directoryPath.'"/* '.storage_path().'/../public/images/parts');
		shell_exec('rm -r "'.$directoryPath.'"');
	    }
	}
	
	$partsImages = scandir(storage_path('images'));
	PartImage::truncate();
	Part::where('image', '!=', '')
	    ->where('image', '!=', 'NULL')		
	    ->update(['image' => '']);
	$prev = '';
	$collectNumbers = array();
	
	foreach($partsImages as $partKey => $partImage ){
    	    if($partImage!='.' and $partImage!='..' ){
		$insertImage = [
		    'image' => $partImage
		];
		PartImage::create($insertImage);
		$explPartNum = explode('-', $partImage);
		if($prev == '' || $prev == $explPartNum[0]) {
		    $collectNumbers[] = $partImage;

		} else {
		    //var_dump($collectNumbers); //die();
		    //$serialImg = serialize($collectNumbers);
		    $serialImg = json_encode($collectNumbers);
		    Part::where('part_number', $prev)
			->update(['image' => $serialImg]);
		    //DB::connection()->getpdo()->exec("UPDATE parts SET image='$serialImg' WHERE part_number='{$explPartNum[0]}'");
		    $collectNumbers = array();
		    $collectNumbers[] = $partImage;
		}

		if($partKey == (count($partsImages) - 1)) {
		    //$serialImg = serialize($collectNumbers);
		    $serialImg = json_encode($collectNumbers);
		    Part::where('part_number', $explPartNum[0])
			->update(['image' => $serialImg]);
		    //DB::connection()->getpdo()->exec("UPDATE parts SET image='$serialImg' WHERE part_number='{$explPartNum[0]}'");
		    $collectNumbers = array();
		    $collectNumbers[] = $partImage;
		}
		$prev = $explPartNum[0];
		//var_dump($explPartNum[0]);
		//DB::connection()->getpdo()->exec("UPDATE parts SET image=CONCAT(image,'|".$partImage."') WHERE part_number='".$explPartNum[0]."'");
		
		//DB::connection()->getpdo()->exec("UPDATE parts SET image=CONCAT(image,'|".$partImage."') WHERE part_number='{$explPartNum[0]}'");
	    }
	}
	

    }
}