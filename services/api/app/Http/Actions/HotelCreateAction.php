<?php

namespace App\Http\Actions;

use App\Http\Requests\Dtos\CreateHotelRequestOutput;
use App\Http\Resources\HotelPreviewResource;
use App\Models\Hotel;

class HotelCreateAction
{
    public static function execute(CreateHotelRequestOutput $hotelRequestOutput): HotelPreviewResource
    {
        $hotel = Hotel::create($hotelRequestOutput->toArray());
        return new HotelPreviewResource($hotel);
    }
}
