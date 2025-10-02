<?php

namespace App\Http\Requests;

use App\Http\Requests\Dtos\UpdateHotelRequestOutput;

class UpdateHotelRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => "nullable|string|max:255",
            "address1" => "nullable|string",
            "address2" => "nullable|string",
            "zipcode" => "nullable|string",
            "city" => "nullable|string",
            "country" => "nullable|string",
            "lat" => "nullable|numeric|between:-90,90",
            "lng" => "nullable|numeric|between:-180,180",
            "description" => "nullable|string|max:5000",
            "max_capacity" => "nullable|integer|between:1,200",
            "price_per_night" => "nullable|numeric|min:1",
        ];
    }

    public function toDto(): UpdateHotelRequestOutput
    {
        $validated = $this->validated();
        return new UpdateHotelRequestOutput(
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
            price_per_night: $validated["price_per_night"]
        );
    }
}
