<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEbayOrdersItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebay_orders_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Email');
            $table->string('UserFirstName');
            $table->string('UserLastName');
            $table->integer('SellingManagerSalesRecordNumber');
            $table->dateTime('CreatedDate');
            $table->string('ItemID');
            $table->string('Title');
            $table->string('SKU');
            $table->string('ConditionDisplayName');
            $table->integer('QuantityPurchased');
            $table->string('TransactionID');
            $table->float('TransactionPrice');
            $table->float('TaxAmount');
            $table->float('ActualShippingCost');
            $table->float('ActualHandlingCost');
            $table->string('OrderLineItemID');
            $table->integer('OrderId');
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
        Schema::dropIfExists('ebay_orders_items');
    }
}
