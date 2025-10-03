<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Collection;

/**
 * - Properties
 * @property-read int $id
 * @property string $name
 * @property string $address1
 * @property string $address2
 * @property string $zipcode
 * @property string $city
 * @property string $country
 * @property float $lng
 * @property float $lat
 * @property string $description
 * @property int $max_capacity
 * @property float $price_per_night
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * - Relations
 * @property Collection<Picture> $pictures
 *
 * -Accesors
 * @property-read  string $shortDescription
 */
class Hotel extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'address1',
        'address2',
        'zipcode',
        'city',
        'country',
        'lng',
        'lat',
        'description',
        'max_capacity',
        'price_per_night',
    ];

    /**
     * Relations
     */
    public function pictures(): MorphMany
    {
        return $this->morphMany(Picture::class, 'model');
    }

    /**
     * Accesors
     */
    protected function shortDescription(): Attribute
    {
        return Attribute::make(
            get: fn () => str()->limit($this->description, 50)
        );
    }
}
