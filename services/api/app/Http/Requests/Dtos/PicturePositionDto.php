<?php

namespace App\Http\Requests\Dtos;

class PicturePositionDto
{
    public function __construct(
        protected int $id,
        protected int $position,
    )
    {}

    public function getId(): int
    {
        return $this->id;
    }

    public function getPosition(): int
    {
        return $this->position;
    }


}
