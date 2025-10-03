<?php

namespace App\Http\Actions;

use App\Http\Actions\Dtos\HotelAllActionResponse;
use App\Http\Filters\HotelSearchFilter;
use App\Http\Resources\HotelPreviewResource;
use App\Models\Hotel;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class HotelAllAction
{
    public static function execute(): HotelAllActionResponse
    {
        $perPage = request()->query('per_page', 5);
        $paginator = QueryBuilder::for(Hotel::class)
            ->with("pictures")
            ->allowedFilters([
                'name',
                'city',
                'country',
                AllowedFilter::custom('search', new HotelSearchFilter),
            ])

            ->allowedSorts(['name', "city", 'price_per_night'])
            ->paginate($perPage)
            ->appends(request()->query());

        $hotels = HotelPreviewResource::collection($paginator);
        return new HotelAllActionResponse(
            paginator: $paginator,
            hotelsPreviewResource: $hotels
        );
    }
}
