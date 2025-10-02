<?php

namespace App\Http\Actions;

use App\Http\Resources\HotelDetailResource;
use App\Models\Hotel;
use Illuminate\Http\Resources\Json\JsonResource;

class HotelDetailAction
{
    public static function execute(Hotel $hotel): JsonResource
    {
        return HotelDetailResource::make($hotel);
    }
}
