<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OrderNumber extends Model
{
    protected $table = 'order_number';

    protected $fillable = [
        'id', 'number'
    ];
}
