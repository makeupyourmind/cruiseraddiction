<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AvailableWarehouse extends Model
{
    protected $table = "available_warehouses";

    protected $fillable = ['id', 'warehouse', 'isAvailable', 'warehouse_name', 'position'];

    public $timestamps = true;
}
