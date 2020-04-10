<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJPWHSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jp_whs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('cost_yen')->nullable();
            $table->string('cost_usd')->nullable();
            $table->string('list_usd')->nullable();
            $table->string('list_cad')->nullable();
            $table->string('qty')->nullable();
            $table->boolean('discontinued')->default(0);
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
        Schema::dropIfExists('jp_whs');
    }
}
