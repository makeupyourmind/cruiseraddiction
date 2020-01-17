<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Tpd extends Model
{
    protected $table = 'tpds';

    protected $fillable = ['id', 'part_number', 'name', 'replaced', 'retail', 'price', 'description', 'discontinued', 'relatedParts'];

    public $timestamps = true;

    protected $casts = [
        'relatedParts' => 'array',
    ];
}
