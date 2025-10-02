<?php

namespace App\Http\Actions\Dtos;

use App\Http\Resources\HotelPreviewResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Pagination\LengthAwarePaginator;

class HotelAllActionResponse
{
    public function __construct(
        protected LengthAwarePaginator $paginator,
        protected AnonymousResourceCollection $hotelsPreviewResource,
    )
    {}

    public function getPaginator(): LengthAwarePaginator
    {
        return $this->paginator;
    }

    public function getHotelsResource(): AnonymousResourceCollection
    {
        return $this->hotelsPreviewResource;
    }


}
