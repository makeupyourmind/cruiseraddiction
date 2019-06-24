<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $table = 'parts';

    protected $fillable = [
        'part_number', 'description_english', 'weight_physical', 'weight_volumetric', 'brand_name', 'description_full',
        'color', 'is_bundle', 'subst_for', 'qty', 'price', 'stock_history', 'image', 'warehouse', 'modified_by'
    ];


}
