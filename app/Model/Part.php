<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $table = 'parts';

    protected $fillable = [
        'part_number','fits', 'important_general', 'description_english', 'weight_physical', 'weight_volumetric', 'brand_name',
        'color', 'is_bundle', 'qty', 'changedAdministrator', 'price', 'part_fits', 'image', 'warehouse', 'bundle_id', 'bundle_qty',
        'unique_hash', 'is_stock_ca', 'min_price', 'max_price', 'min_stock', 'full_part_number',
        'weight', 'length', 'width', 'depth', 'meta', //'modified_by' subst_for, 'categories', 'tags', 'location', 'part_number_without_too_much'
    ];

    protected $with = [
        'bundlePivot',
        'bundlePartData'
    ];


    /*    public function bundleParts()
        {
            return $this->hasMany('App\Model\Part', 'bundle_id');
        }
    */


    public function bundlePivot()
    {
        return $this->hasMany('App\Model\BundlePart', 'bundle_id', 'id');
    }

    public function bundlePartData()
    {
        return $this->hasOne('App\Model\SameDataPartBundle', 'bundle_part_id', 'id');
    }

    public function orders(){
        return $this->belongsToMany('App\Model\Order');
    }
}
