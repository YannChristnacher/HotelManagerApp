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
            "price_per_night" => "required|numeric|min:1"
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
            price_per_night: $validated["price_per_night"]
        );
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire.',
            'name.string' => 'Le nom doit être une chaîne de caractères.',
            'name.max' => 'Le nom ne peut pas dépasser 255 caractères.',

            'address1.required' => 'L’adresse principale est obligatoire.',
            'address1.string' => 'L’adresse principale doit être une chaîne de caractères.',

            'address2.string' => 'L’adresse complémentaire doit être une chaîne de caractères.',

            'zipcode.required' => 'Le code postal est obligatoire.',
            'zipcode.string' => 'Le code postal doit être une chaîne de caractères.',

            'city.required' => 'La ville est obligatoire.',
            'city.string' => 'La ville doit être une chaîne de caractères.',

            'country.required' => 'Le pays est obligatoire.',
            'country.string' => 'Le pays doit être une chaîne de caractères.',

            'lat.required' => 'La latitude est obligatoire.',
            'lat.numeric' => 'La latitude doit être un nombre.',
            'lat.between' => 'La latitude doit être comprise entre -90 et 90.',

            'lng.required' => 'La longitude est obligatoire.',
            'lng.numeric' => 'La longitude doit être un nombre.',
            'lng.between' => 'La longitude doit être comprise entre -180 et 180.',

            'description.required' => 'La description est obligatoire.',
            'description.string' => 'La description doit être une chaîne de caractères.',
            'description.max' => 'La description ne peut pas dépasser 5000 caractères.',

            'max_capacity.required' => 'La capacité maximale est obligatoire.',
            'max_capacity.integer' => 'La capacité maximale doit être un nombre entier.',
            'max_capacity.between' => 'La capacité maximale doit être comprise entre 1 et 200.',

            'price_per_night.required' => 'Le prix par nuit est obligatoire.',
            'price_per_night.numeric' => 'Le prix par nuit doit être un nombre.',
            'price_per_night.min' => 'Le prix par nuit doit être au moins de 1.',
        ];
    }
}
