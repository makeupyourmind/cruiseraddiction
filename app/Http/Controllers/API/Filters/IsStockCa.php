<?php

namespace App\Http\Controllers\API\Filters;
use Illuminate\Database\Eloquent\Builder;
use DB;

class IsStockCa implements Filter
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
        return $builder->where('is_stock_ca', $value);
    }
}