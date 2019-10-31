<?php

namespace App\Http\Controllers\API\Filters;
use Illuminate\Database\Eloquent\Builder;
use DB;

class QtyAbove implements Filter
{
    /**
     * Apply a given search value to the builder instance.
     *
     * @param Builder $builder
     * @param mixed $value
     * @return Builder $builder
     */
    public static function apply($builder, $value)
    {
        // return $builder->where("qty", ">", $value)->get();
        return DB::select("SELECT * FROM `parts` WHERE qty > $value");
    }
}