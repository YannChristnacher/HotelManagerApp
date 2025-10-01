<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Picture>
 */
class PictureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $words = ['Chambre', 'Balcon', 'Salle de bain', 'Piscine', 'Salon', 'Bar', 'Salle de sport', 'Spa', 'Restaurant'];

        $word = $words[array_rand($words)];
        $url = "https://openplaceholder.com/800x600/{$word}";
        $response = Http::get($url);
        if ($response->successful()) {
            $fileContent = $response->body();
            $filename = 'pictures/' . Str::uuid() . '.jpg';
            // Taille du fichier (en octets)
            $filesize = strlen($fileContent);

            Storage::disk('s3')->put($filename, $fileContent);

            return [
                'filepath' => $filename,
                'filesize' => $filesize,
            ];
        }
        return [];
    }

    public function forModel(Model $model): self
    {
        return $this->state(function (array $attributes) use ($model) {
            return [
                'model_type' => $model::class,
                'model_id'=> $model->id,
            ];
        });
    }

    public function forPosition(int $pos): self
    {
        return $this->state(function (array $attributes) use ($pos) {
            return [
                'position' => $pos
            ];
        });
    }
}
