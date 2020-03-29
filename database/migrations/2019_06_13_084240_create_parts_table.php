<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('brand_name')->nullable();
            $table->string('part_number');
            $table->string('description_english')->nullable();
            $table->string('weight_physical')->nullable();
            $table->string('weight_volumetric')->nullable();
            $table->integer('qty')->default('0');
            $table->string('warehouse')->nullable();
            $table->boolean('changedAdministrator')->default(0);
            $table->string('price')->default('0');
            $table->string('unique_hash')->unique();
            $table->text('part_fits')->nullable();
            // $table->string('description_full')->nullable();
            // $table->string('color')->nullable();
            $table->string('image')->nullable();
            $table->integer('is_bundle')->default('0');
            // $table->integer('subst_for')->default('0');
            // $table->string('modified_by')->nullable();
            $table->text('full_part_number')->nullable();
            // $table->text('notes')->nullable();
            $table->string('bundle_id', '512')->default(0);
            $table->integer('bundle_qty')->default(0);
            $table->boolean('discontinued')->default(0);
            $table->boolean('not_available')->default(0);
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
        Schema::dropIfExists('parts');
    }
}
