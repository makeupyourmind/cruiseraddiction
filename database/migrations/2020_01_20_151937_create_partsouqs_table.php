<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartsouqsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partsouqs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('part_number')->nullable();
            $table->float('shipping_cost')->nullable();
            $table->json('results');
            $table->json('substitutions');
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
        Schema::dropIfExists('partsouqs');
    }
}
