<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnInTablePartsTmp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('parts_tmp', function (Blueprint $table) {
            // $table->text('categories')->nullable();
            // $table->text('tags')->nullable();
            $table->string('min_price')->nullable();
            $table->string('max_price')->nullable();
            // $table->string('part_number_without_too_much')->nullable();
            $table->string('min_stock')->nullable();
            $table->boolean('in_stock_ca')->nullable();
            // $table->string('location')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('parts_tmp', function (Blueprint $table) {
            //
        });
    }
}
