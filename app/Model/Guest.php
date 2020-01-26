<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    protected $table = 'guests';

    protected $fillable = [
      'id', 'postal_code','city', 'state', 'country', 'phone', 'email', 'first_name', 'last_name', 'street_address', 'street_address_two'
    ];

    public $timestamps = true;

    public function orders(){
      return $this->hasMany('App\Model\Order');
    }

    public function payment_history_files(){
      return $this->hasMany('App\Model\Order', 'guest_id');
  }
}
