<?php

namespace Database\Seeders;

use App\Models\Hotel;
use App\Models\Picture;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $hotels = Hotel::factory(10)->create();

        $hotels->each(function (Hotel $hotel) {
            $rand = rand(1, 4);
            for ($i = 0 ; $i < $rand ; $i++ ) {
                Picture::factory()
                    ->forModel($hotel)
                    ->forPosition($i)
                    ->create();
            }
        });
    }
}
