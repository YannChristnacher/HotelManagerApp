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
        $faker = \Faker\Factory::create('fr_FR');
        return [
            'name' => $faker->name(),
            'address1' => $faker->streetAddress(),
            'address2' => array_rand([null, 'CEDEX ' . $faker->numberBetween(1, 99)]),
            'zipcode'=>$faker->postcode(),
            'city' => $faker->city(),
            'country' => $faker->country(),
            'lng' => $faker->longitude(),
            'lat' => $faker->latitude(),
            'description'=> $faker->text(),
            'max_capacity' => $faker->numberBetween(5,200),
            'price_per_night' => $faker->numberBetween(50,300),
        ];
    }
}
