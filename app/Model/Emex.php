<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Emex extends Model
{
    protected $table = 'emexes';

    protected $fillable = ['id', 'part_number', 'brand_name', 'chain' , 'analogues'];

    public $timestamps = true;

    protected $casts = [
        'chain' => 'array',
        'analogues' => 'array',
    ];
}
