<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Ebay_Orders_Items extends Model
{
    //
    protected $table = 'ebay_orders_items';

    protected $fillable = [
        'id', 'Email', 'UserFirstName', 'UserLastName', 'SellingManagerSalesRecordNumber', 'CreatedDate', 'ItemID', 'Title', 'SKU', 'ConditionDisplayName', 'QuantityPurchased',
        'TransactionID','TransactionPrice','TaxAmount', 'ActualShippingCost','ActualHandlingCost','OrderLineItemID','OrderId'
    ];
}
