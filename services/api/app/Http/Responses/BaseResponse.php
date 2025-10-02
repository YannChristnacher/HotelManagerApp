<?php

namespace App\Http\Responses;

use Illuminate\Contracts\Support\Responsable;

abstract class BaseResponse implements Responsable
{
    protected bool $status = true;
    protected string $message;
    protected mixed $data;

    public function setMessage(string $message): self
    {
        $this->message = $message;
        return $this;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function setData(mixed $data): self
    {
        $this->data = $data;
        return $this;
    }
}
