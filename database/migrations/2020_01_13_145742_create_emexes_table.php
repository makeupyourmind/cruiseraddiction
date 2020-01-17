<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmexesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emexes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('part_number')->nullable();
            $table->string('brand_name')->nullable();
            $table->json('chain');
            $table->json('analogues');
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
        Schema::dropIfExists('emexes');
    }
}
