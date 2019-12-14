<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
      'id', 'shipping', 'amount' ,'data', 'user_id', 'isCheckedParser'
    ];

    protected $casts = [
      'shipping' => 'array',
      'data' => 'array'
    ];

    protected $with = ['attachments'];

    public function attachments() {
	    return $this->hasMany('App\Model\Attachment', 'client_column_one', 'id');
    }

    public function user(){
      return $this->belongsTo('App\User');
    }
}
