<?php

namespace App\Http\Requests\Dtos;
class CreateHotelRequestOutput
{
    public function __construct(
        protected string $name,
        protected string $address1,
        protected ?string $address2,
        protected string $zipcode,
        protected string $city,
        protected string $country,
        protected string $lat,
        protected string $lng,
        protected string $description,
        protected int $max_capacity,
        protected float $price_per_night,
        protected array $pictures
    )
    {}

    public function getName(): string
    {
        return $this->name;
    }

    public function getAddress1(): string
    {
        return $this->address1;
    }

    public function getAddress2(): ?string
    {
        return $this->address2;
    }

    public function getZipcode(): string
    {
        return $this->zipcode;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function getCountry(): string
    {
        return $this->country;
    }

    public function getLat(): string
    {
        return $this->lat;
    }

    public function getLng(): string
    {
        return $this->lng;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getMaxCapacity(): int
    {
        return $this->max_capacity;
    }

    public function getPricePerNight(): float
    {
        return $this->price_per_night;
    }

    public function getPictures(): array
    {
        return $this->pictures;
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'address1' => $this->address1,
            'address2' => $this->address2,
            'zipcode' => $this->zipcode,
            'city' => $this->city,
            'country' => $this->country,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'description' => $this->description,
            'max_capacity' => $this->max_capacity,
            'price_per_night' => $this->price_per_night,
            'pictures' => $this->pictures
        ];
    }
}
