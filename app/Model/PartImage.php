<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PartImage extends Model
{
    protected $table = 'parts_images';

    protected $fillable = [
      'partnumber', 'brand', 'image'
    ];
}
