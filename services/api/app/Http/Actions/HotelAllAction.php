<?php

namespace App\Http\Actions;

use App\Http\Actions\Dtos\HotelAllActionResponse;
use App\Http\Resources\HotelPreviewResource;
use App\Models\Hotel;
use Spatie\QueryBuilder\QueryBuilder;

class HotelAllAction
{
    public static function execute(): HotelAllActionResponse
    {
        $perPage = request()->query('per_page', 15);
        $paginator = QueryBuilder::for(Hotel::class)
            ->with("pictures")
            ->allowedFilters(['name', 'city', 'country'])
            ->allowedSorts(['name', 'city', 'country'])
            ->paginate($perPage)
            ->appends(request()->query());

        $hotels = HotelPreviewResource::collection($paginator);
        return new HotelAllActionResponse(
            paginator: $paginator,
            hotelsPreviewResource: $hotels
        );
    }
}
