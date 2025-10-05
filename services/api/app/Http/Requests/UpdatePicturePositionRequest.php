<?php

namespace App\Http\Requests;

use App\Http\Requests\Dtos\PicturePositionDto;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePicturePositionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "pictures" => "required|array",
            "pictures.*.id" => "required|integer",
            "pictures.*.position" => "required|integer",
        ];
    }

    /**
     * @return array<PicturePositionDto>
     */
    public function toDto():array
    {
        $validated = $this->validated();

        $data = [];
        foreach ($validated["pictures"] as $pictureData) {
            $data[] = new PicturePositionDto(
                id: $pictureData["id"],
                position: $pictureData["position"],
            );
        }
        return $data;
    }
}
