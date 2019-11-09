<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PayPalData extends Model
{
    //
    protected $table = 'paypaldatas';

    protected $fillable = [
        'id','amount', 'currency', 'result', 'hash'
    ];
}
