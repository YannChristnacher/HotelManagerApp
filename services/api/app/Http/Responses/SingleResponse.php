<?php

namespace App\Http\Responses;

class SingleResponse extends BaseResponse
{

    public function toResponse($request)
    {
        return response()->json([
            "status" => $this->status,
            "message" => $this->message,
            "data" => $this->data,
        ],
            status: $this->code
        );
    }
}
