<?php

namespace App\Http\Requests;

use App\Http\Requests\Dtos\UpdateHotelRequestOutput;
use Illuminate\Foundation\Http\FormRequest;

class UpdateHotelRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => "string|max:255",
            "address1" => "string",
            "address2" => "nullable|string",
            "zipcode" => "string",
            "city" => "string",
            "country" => "string",
            "lat" => "numeric|between:-90,90",
            "lng" => "numeric|between:-180,180",
            "description" => "string|max:5000",
            "max_capacity" => "integer|between:1,200",
            "price_per_night" => "numeric|min:1",
        ];
    }

    public function messages(): array
    {
        return [
            'name.string' => 'Le nom doit être une chaîne de caractères.',
            'name.max' => 'Le nom ne peut pas dépasser 255 caractères.',

            'address1.string' => "L'adresse doit être une chaîne de caractères.",
            'address2.string' => "L'adresse complémentaire doit être une chaîne de caractères.",

            'zipcode.string' => 'Le code postal doit être une chaîne de caractères.',
            'city.string' => 'La ville doit être une chaîne de caractères.',
            'country.string' => 'Le pays doit être une chaîne de caractères.',

            'lat.numeric' => 'La latitude doit être un nombre.',
            'lat.between' => 'La latitude doit être comprise entre -90 et 90.',

            'lng.numeric' => 'La longitude doit être un nombre.',
            'lng.between' => 'La longitude doit être comprise entre -180 et 180.',

            'description.string' => 'La description doit être une chaîne de caractères.',
            'description.max' => 'La description ne peut pas dépasser 5000 caractères.',

            'max_capacity.integer' => 'La capacité maximale doit être un nombre entier.',
            'max_capacity.between' => 'La capacité maximale doit être comprise entre 1 et 200.',

            'price_per_night.numeric' => 'Le prix par nuit doit être un nombre.',
            'price_per_night.min' => 'Le prix par nuit doit être au moins de 1.',
        ];
    }


    public function toDto(): UpdateHotelRequestOutput
    {
        $validated = $this->validated();

        return new UpdateHotelRequestOutput(
            name: $validated["name"] ?? null,
            address1: $validated["address1"] ?? null,
            address2: $validated["address2"] ?? null,
            zipcode: $validated["zipcode"] ?? null,
            city: $validated["city"] ?? null,
            country: $validated["country"] ?? null,
            lat: $validated["lat"]?? null,
            lng: $validated["lng"]?? null,
            description: $validated["description"] ?? null,
            max_capacity: $validated["max_capacity"] ?? null,
            price_per_night: $validated["price_per_night"] ?? null,
        );
    }
}
