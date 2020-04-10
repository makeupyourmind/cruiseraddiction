<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCAWHSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ca_wh_s', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('part_number_info_id')->unsigned();
            $table->string('qty')->nullable();
            $table->string('min_stock')->nullable();
            $table->string('min_price')->nullable();
            $table->string('list_usd')->nullable();
            $table->string('list_cad')->default(0);
            $table->string('max_price')->nullable();
            $table->boolean('discontinued')->default(0);
            $table->string('stock')->nullable();
            $table->string('location')->nullable();
            $table->timestamps();
            $table->foreign('part_number_info_id')->references('id')->on('part_number_infos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ca_wh_s');
    }
}
