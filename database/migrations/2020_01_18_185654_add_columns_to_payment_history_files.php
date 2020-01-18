<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToPaymentHistoryFiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_history_files', function (Blueprint $table) {
            $table->dropForeign(['guest_id']);
            $table->foreign('guest_id')->references('id')->on('guests')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_history_files', function (Blueprint $table) {
            //
        });
    }
}
