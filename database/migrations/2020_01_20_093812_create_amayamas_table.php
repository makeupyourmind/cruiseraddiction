<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAmayamasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amayamas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->string('part_number')->nullable();
            $table->string('full_part_number')->nullable();
            $table->float('weight')->nullable();
            $table->string('description')->nullable();
            $table->string('catalog')->nullable();
            $table->boolean('discontinued')->default(0);
            $table->json('tableData');
            $table->json('original_replacements');
            $table->json('non_original_replacements');
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
        Schema::dropIfExists('amayamas');
    }
}
