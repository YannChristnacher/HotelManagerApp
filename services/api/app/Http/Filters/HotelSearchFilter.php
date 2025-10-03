<?php

namespace App\Http\Filters;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
class HotelSearchFilter implements Filter
{
    public function __invoke(Builder $query, $value, string $property): Builder
    {
        return $query->where(function ($q) use ($value) {
            $q->where('name', 'LIKE', "%{$value}%")
                ->orWhere('city', 'LIKE', "%{$value}%")
                ->orWhere('country', 'LIKE', "%{$value}%");
        });
    }
}
