<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\Part;
use Illuminate\Database\Eloquent\Builder;
use DB;

class UserFilter
{

    public static function apply(Request $filters)
    {
        $query = static::applyDecoratorsFromRequest($filters, (new Part)->newQuery());
        return static::getResults($query, $filters);
    }

    private static function applyDecoratorsFromRequest(Request $request, Builder $query)
    {
        foreach ($request->all() as $filterName => $value) {
            $decorator = static::createFilterDecorator($filterName);
            if (static::isValidDecorator($decorator)) {
                $query = $decorator::apply($query, $value);
            }
        }
        return $query;
    }

    /**
     * @return string 
     */
    private static function createFilterDecorator($name)
    {
        return __NAMESPACE__ . "\\Filters\\" . studly_case($name);
    }

    private static function isValidDecorator($decorator)
    {
        return class_exists($decorator);
    }

    /**
     * @return Builder 
     */
    private static function getResults(Builder $query, Request $request)
    {
        // return $query->get();
        return $query->where('is_stock_ca', true)->orderBy($request->order_name, $request->order_by)
                     ->paginate(100);
    }
}
