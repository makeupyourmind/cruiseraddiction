<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CA_WH extends Model
{
    protected $table = 'ca_wh_s';

    protected $fillable = [
        'id', 'part_number_info_id', 'qty', 'min_stock', 'min_price',
        'list_usd', 'list_cad', 'max_price', 'discontinued', 'stock',
        'location'
    ];

    public $timestamps = true;

    public function partNumberInfo()
    {
        return $this->belongsTo('App\Model\PartNumberInfo');
    }
}
