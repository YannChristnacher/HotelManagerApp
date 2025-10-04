<?php

namespace App\Http\Resources;

use App\Models\Picture;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Picture $resource;
 */
class PictureResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'model_type' => $this->resource->model_type,
            'model_id' => $this->resource->model_id,
            "filepath" => $this->resource->filepath,
            'filesize' => $this->resource->filesize,
            'position' => $this->resource->position,
        ];
    }
}
