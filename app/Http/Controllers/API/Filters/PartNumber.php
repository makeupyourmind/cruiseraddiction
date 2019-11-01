<?php

namespace App\Http\Controllers\API\Filters;
use Illuminate\Database\Eloquent\Builder;
use DB;

class PartNumber implements Filter
{
    /**
     * Apply a given search value to the builder instance.
     *
     * @param Builder $builder
     * @param mixed $value
     * @return Builder $builder
     */
    public static function apply(Builder $builder, $value)
    {
        return $builder->whereRaw("REPLACE(part_number, '-', '') LIKE '%".str_replace('-', '', $value)."%'");
    }
}