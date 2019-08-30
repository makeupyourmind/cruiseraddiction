<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
      'order'
    ];

    protected $with = ['attachments'];

    public function attachments() {
	return $this->hasMany('App\Model\Attachment', 'client_column_one', 'id');
    }
}
