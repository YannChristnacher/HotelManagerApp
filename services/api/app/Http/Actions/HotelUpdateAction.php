<?php

namespace App\Http\Actions;

use App\Http\Requests\Dtos\UpdateHotelRequestOutput;
use App\Http\Resources\HotelDetailResource;
use App\Models\Hotel;

class HotelUpdateAction
{
    public static function execute(Hotel $hotel, UpdateHotelRequestOutput $updateHotelRequestOutput): HotelDetailResource
    {
        $hotel
            ->load("pictures")
            ->fill($updateHotelRequestOutput->toArray())
            ->save();
        return new HotelDetailResource($hotel);
    }
}
