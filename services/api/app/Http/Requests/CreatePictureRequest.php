<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePictureRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "picture" => "required|image|mimes:jpeg,jpg,png,webp|max:5120",
            "position" => "required|numeric",
        ];
    }

    public function messages(): array
    {
        return [
            'image.required' => 'Une image est obligatoire.',
            'image.image' => 'Le fichier doit être une image.',
            'image.mimes' => 'Formats autorisés : jpeg, jpg, png, webp.',
            'image.max' => 'L\'image ne doit pas dépasser 5 Mo.',
        ];
    }
}
