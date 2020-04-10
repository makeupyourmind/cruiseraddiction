<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartNumberInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('part_number_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('brand_name');
            $table->string('part_number');
            $table->string('raw_part_number');
            $table->string('description_english')->nullable();
            $table->boolean('is_bundle')->default(0);
            $table->json('replacement_id');
            $table->string('a_weight')->nullable();
            $table->string('v_weight')->nullable();
            $table->string('height')->nullable();
            $table->string('width')->nullable();
            $table->string('lenght')->nullable();
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
        Schema::dropIfExists('part_number_infos');
    }
}
