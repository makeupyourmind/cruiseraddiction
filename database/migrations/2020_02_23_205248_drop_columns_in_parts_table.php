<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropColumnsInPartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('parts', function (Blueprint $table) {
            // $table->dropColumn(['location', 'categories', 'tags', 
            //                     'notes', 'subst_for', 'color', 
            //                     'part_number_without_too_much', 'description_full', 'modified_by', 'meta']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
