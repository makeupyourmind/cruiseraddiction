<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AvailabilityNotification extends Model
{
    protected $table = 'availability_notifications';

    protected $fillable = ['id', 'brand_name', 'part_number', 'warehouse', 'description', 'user_email'];

    public $timestamps = true;
}
