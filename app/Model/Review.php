<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';

    protected $fillable = [
	'order_id', 'rate', 'understanding', 'recommend', 'comment'
    ];
}
