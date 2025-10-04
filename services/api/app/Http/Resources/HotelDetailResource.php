<?php

namespace App\Http\Resources;

use App\Models\Hotel;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Hotel $resource;
 */
class HotelDetailResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'address1' => $this->resource->address1,
            'address2' => $this->resource->address2 ?? null,
            'zipcode' => $this->resource->zipcode,
            'city' => $this->resource->city,
            'country' => $this->resource->country,
            'lng' => $this->resource->lng,
            'lat' => $this->resource->lat,
            'description' => $this->resource->description,
            'max_capacity' => $this->resource->max_capacity,
            'price_per_night' => $this->resource->price_per_night,
            'pictures' => $this->resource->pictures,
            'created_at' => $this->resource->created_at->format('d/m/Y'),
        ];
    }
}
