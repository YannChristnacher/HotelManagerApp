<?php

namespace App\Http\Requests\Dtos;

class UpdateHotelRequestOutput
{
    public function __construct(
        protected ?string $name,
        protected ?string $address1,
        protected ?string $address2,
        protected ?string $zipcode,
        protected ?string $city,
        protected ?string $country,
        protected ?string $lat,
        protected ?string $lng,
        protected ?string $description,
        protected ?int $max_capacity,
        protected ?float $price_per_night
    )
    {}

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getAddress1(): ?string
    {
        return $this->address1;
    }

    public function getAddress2(): ?string
    {
        return $this->address2;
    }

    public function getZipcode(): ?string
    {
        return $this->zipcode;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function getLng(): ?string
    {
        return $this->lng;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getMaxCapacity(): ?int
    {
        return $this->max_capacity;
    }

    public function getPricePerNight(): ?float
    {
        return $this->price_per_night;
    }

    public function toArray(): array
    {
        $data = [];

        if($this->getName())$data["name"] = $this->getName();
        if($this->getAddress1())$data["address1"] = $this->getAddress1();
        if($this->getZipcode())$data["zipcode"] = $this->getZipcode();
        if($this->getCity())$data["city"] = $this->getCity();
        if($this->getCountry())$data["country"] = $this->getCountry();
        if($this->getLat())$data["lat"] = $this->getLat();
        if($this->getLng())$data["lng"] = $this->getLng();
        if($this->getDescription())$data["description"] = $this->getDescription();
        if($this->getMaxCapacity())$data["max_capacity"] = $this->getMaxCapacity();
        if($this->getPricePerNight())$data["price_per_night"] = $this->getPricePerNight();

        $data["address2"] = $this->getAddress2();

        return $data;
    }
}
