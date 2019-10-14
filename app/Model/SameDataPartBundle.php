<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SameDataPartBundle extends Model
{
    //
    protected $table = 'bundle_part_to_same_part';

    protected $fillable = [
        'qty','description', 'bundle_part_id', 'bundle_id'
    ];
}
