<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PartTmp extends Model
{
    protected $table = 'parts_tmp';

    protected $fillable = [
        'part_number', 'description_english', 'weight_physical', 'weight_volumetric', 'brand_name', 'description_full',
        'color', 'is_bundle', 'subst_for', 'qty', 'price', 'stock_history', 'image', 'warehouse', 'modified_by'
    ];

}
