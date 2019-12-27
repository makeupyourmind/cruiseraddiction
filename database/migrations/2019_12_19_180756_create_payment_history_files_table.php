<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentHistoryFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_history_files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('originalFileName');
            $table->string('extension');
            $table->string('unique_hash');
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_history_files');
        Schema::dropIfExists('users');
    }
}
