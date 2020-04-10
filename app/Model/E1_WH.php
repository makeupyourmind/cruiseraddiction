<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class E1_WH extends Model
{
    protected $table = 'e1_wh_s';

    protected $fillable = [
        'id', 'part_number_info_id', 'cost_usd', 'list_usd',
        'list_cad', 'qty', 'discontinued'
    ];

    public $timestamps = true;

    public function partNumberInfo()
    {
        return $this->belongsTo('App\Model\PartNumberInfo');
    }
}
