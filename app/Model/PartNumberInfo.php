<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PartNumberInfo extends Model
{
    protected $table = 'part_number_infos';

    protected $fillable = [
        'id', 'brand_name', 'part_number', 'raw_part_number',
        'description_english', 'is_bundle', 'replacement_id',
        'a_weight', 'v_weight', 'height', 'width', 'lenght'
    ];

    public $timestamps = true;

    protected $casts = [
        'replacement_id' => 'array'
    ];

    public function USA_WH()
    {
        return $this->hasOne('App\Model\USA_WH');
    }

    public function CA_WH()
    {
        return $this->hasOne('App\Model\CA_WH');
    }

    public function O1_WH()
    {
        return $this->hasOne('App\Model\O1_WH');
    }

    public function E1_WH()
    {
        return $this->hasOne('App\Model\E1_WH');
    }
}
