<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BundlePart extends Model
{
    protected $table = 'bundle_parts';
    
    protected $fillable = [
	'bundle_id', 'part_id'
    ];

    protected $with = ['bundleParts'];

    public function bundleParts() {
	return $this->hasMany('App\Model\Part', 'id', 'part_id');
    }



}
