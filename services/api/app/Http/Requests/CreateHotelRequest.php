<?php

namespace App\Http\Requests;

use App\Http\Requests\Dtos\CreateHotelRequestOutput;
use Illuminate\Foundation\Http\FormRequest;

class CreateHotelRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => "required|string|max:255",
            "address1" => "required|string",
            "address2" => "nullable|string",
            "zipcode" => "required|string",
            "city" => "required|string",
            "country" => "required|string",
            "lat" => "required|numeric|between:-90,90",
            "lng" => "required|numeric|between:-180,180",
            "description" => "required|string|max:5000",
            "max_capacity" => "required|integer|between:1,200",
            "price_per_night" => "required|numeric|min:1",
            "pictures" => "nullable|array",
            "pictures.*" => "image|mimes:jpeg,png,jpg,gif,svg|max:5120",
        ];
    }

    public function toDto(): CreateHotelRequestOutput
    {
        $validated = $this->validated();
        return new CreateHotelRequestOutput(
            name: $validated["name"],
            address1: $validated["address1"],
            address2: $validated["address2"],
            zipcode: $validated["zipcode"],
            city: $validated["city"],
            country: $validated["country"],
            lat: $validated["lat"],
            lng: $validated["lng"],
            description: $validated["description"],
            max_capacity: $validated["max_capacity"],
            price_per_night: $validated["price_per_night"],
            pictures: $validated["pictures"]
        );
    }
}
