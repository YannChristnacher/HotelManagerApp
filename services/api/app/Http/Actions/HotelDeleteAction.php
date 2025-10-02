<?php

namespace App\Http\Actions;

use App\Models\Hotel;

class HotelDeleteAction
{
    public static function execute(Hotel $hotel): bool
    {
        return $hotel->delete();
    }
}
