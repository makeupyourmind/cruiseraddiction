<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $table = 'attachments';

    protected $fillable = [
      'artikul', 'client_column_one', 'client_column_two', 'status', 'order_date', 'status_id'
    ];
}
