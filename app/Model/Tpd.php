<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Tpd extends Model
{
    protected $table = 'tpds';

    protected $fillable = ['id', 'part_number', 'full_part_number', 'brand_name', 'replaced', 'retail_price', 
                        'price', 'description', 'discontinued', 'relatedParts', 'created_at'];

    public $timestamps = true;

    protected $casts = [
        'relatedParts' => 'array',
    ];
}
