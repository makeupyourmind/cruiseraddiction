<?php

namespace App\Http\Controllers\API\Filters;
use Illuminate\Database\Eloquent\Builder;
use DB;

class QtyBellowMinStock implements Filter
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
        return DB::select("SELECT * FROM `parts` WHERE qty < CAST(min_stock AS UNSIGNED )");
        // return $builder;
    }
}