<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $table = 'parts';

    protected $fillable = [
        'part_number', 'description_english', 'weight_physical', 'weight_volumetric', 'brand_name', 'description_full',
        'color', 'is_bundle', 'subst_for', 'qty', 'changedAdministrator', 'price', 'part_fits', 'image', 'warehouse', 'modified_by', 'notes', 'bundle_id', 'bundle_qty',
        'unique_hash', 'is_stock_ca', 'categories', 'tags', 'min_price', 'max_price', 'min_stock', 'location', 'part_number_without_too_much', 'full_part_number'
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

}
