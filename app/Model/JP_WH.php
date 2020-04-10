<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class JP_WH extends Model
{
    protected $table = 'jp_whs';

    protected $fillable = [
        'id', 'cost_yen', 'cost_usd', 'list_usd',
        'list_cad', 'qty', 'discontinued'
    ];

    public $timestamps = true;
}
