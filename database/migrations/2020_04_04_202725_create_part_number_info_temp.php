<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartNumberInfoTemp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('part_number_info_temp', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('PartNumber');
            $table->string('DescriptionEnglish');
            $table->string('WeightPhysical');
            $table->string('WeightVolumetric');
            $table->string('BrandId');
            $table->string('ClearPartNumber');
            $table->string('MainPartNumber');
            $table->string('Substitute_part_id');
            $table->string('IsBundle');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('part_number_info_temp');
    }
}
