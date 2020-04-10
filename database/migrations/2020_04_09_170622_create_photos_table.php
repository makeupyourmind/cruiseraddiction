<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('photo')->nullable();
            $table->bigInteger('o1_wh_id')->nullable()->unsigned();
            $table->foreign('o1_wh_id')->references('id')->on('o1_wh_s')->onDelete('cascade');
            $table->bigInteger('ca_wh_id')->nullable()->unsigned();
            $table->foreign('ca_wh_id')->references('id')->on('ca_wh_s')->onDelete('cascade');
            $table->bigInteger('e1_wh_id')->nullable()->unsigned();
            $table->foreign('e1_wh_id')->references('id')->on('e1_wh_s')->onDelete('cascade');
            $table->bigInteger('usa_wh_id')->nullable()->unsigned();
            $table->foreign('usa_wh_id')->references('id')->on('usa_wh_s')->onDelete('cascade');
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
        Schema::dropIfExists('photos');
    }
}
