<?php

namespace App\Http\Resources;

use App\Models\Hotel;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Hotel $resource;
 */
class HotelPreviewResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'short_description' => $this->resource->shortDescription,
            "max_capacity" => $this->resource->max_capacity,
            'picture' => $this->resource->pictures->first()
        ];
    }
}
