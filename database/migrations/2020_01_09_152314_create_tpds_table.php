<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTpdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tpds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('part_number');
            $table->string('brand_name');
            $table->string('replaced')->nullable();
            $table->string('retail_price')->nullable();
            $table->string('price')->nullable();
            $table->string('description')->nullable();
            $table->boolean('discontinued');
            $table->json('relatedParts');
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
        Schema::dropIfExists('tpds');
    }
}
