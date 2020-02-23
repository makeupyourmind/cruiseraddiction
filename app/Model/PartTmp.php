<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PartTmp extends Model
{
    protected $table = 'parts_tmp';

    protected $fillable = [
        'part_number', 'description_english', 'weight_physical', 'weight_volumetric', 'brand_name',
        'is_bundle', 'qty', 'price', 'part_fits', 'image', 'warehouse', 'bundle_id', 'bundle_qty', 'unique_hash', 
        'is_stock_ca', 'min_price', 'max_price', 
        'min_stock', 'full_part_number', 
    //'modified_by' 'subst_for' 'color' 'notes' 'categories', 'tags', part_number_without_too_much description_full
    ];

}
