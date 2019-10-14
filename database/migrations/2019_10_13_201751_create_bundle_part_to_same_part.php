<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBundlePartToSamePart extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        schema::create('bundle_part_to_same_part', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('qty')->nullable();
            $table->text('description')->nullable();
            $table->integer('bundle_part_id');
            $table->integer('bundle_id');
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
        Schema::dropIfExists('bundle_part_to_same_part');
    }
}
