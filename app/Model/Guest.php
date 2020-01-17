<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    protected $table = 'guests';

    protected $fillable = [
      'id', 'postal_code','city', 'state', 'country', 'phone', 'email', 'first_name', 'last_name', 'street_address'
    ];

    public $timestamps = true;
}
