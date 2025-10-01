<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'address1' => $this->faker->streetAddress(),
            'address2' => $this->faker->streetAddress(),
            'zipcode'=>$this->faker->postcode(),
            'city' => $this->faker->city(),
            'country' => $this->faker->country(),
            'lng' => $this->faker->longitude(),
            'lat' => $this->faker->latitude(),
            'description'=> $this->faker->text(),
            'max_capacity' => $this->faker->numberBetween(5,200),
            'price_per_night' => $this->faker->numberBetween(50,300),
        ];
    }
}
