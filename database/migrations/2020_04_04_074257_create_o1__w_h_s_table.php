<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateO1WHSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('o1_wh_s', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('part_number_info_id')->unsigned();
            $table->string('cost_usd')->nullable();
            $table->string('list_usd')->nullable();
            $table->string('list_cad')->nullable();
            $table->string('qty')->nullable();
            $table->boolean('discontinued')->default(0);
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
        Schema::dropIfExists('o1_wh_s');
    }
}
