<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Partsouq extends Model
{
    protected $table = 'partsouqs';

    protected $fillable = ['id', 'part_number', 'part_number', 'results', 'substitutions', 'shipping_cost'];

    public $timestamps = true;

    protected $casts = [
        'results' => 'array',
        'substitutions' => 'array',
    ];
}
