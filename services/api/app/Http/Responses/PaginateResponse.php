<?php

namespace App\Http\Responses;

use Illuminate\Pagination\LengthAwarePaginator;

class PaginateResponse extends BaseResponse
{
    protected LengthAwarePaginator $paginator;

    public function setPaginator(LengthAwarePaginator $paginator): self
    {
        $this->paginator = $paginator;
        return $this;
    }

    public function toResponse($request)
    {
        return response()->json([
            "status" => $this->status,
            "message" => $this->message,
            "data" => $this->data,
            'links' => [
                'first' => $this->paginator->url(1),
                'last' => $this->paginator->url($this->paginator->lastPage()),
                'prev' => $this->paginator->previousPageUrl(),
                'next' => $this->paginator->nextPageUrl(),
            ],
            'meta' => [
                'current_page' => $this->paginator->currentPage(),
                'per_page' => $this->paginator->perPage(),
                'total' => $this->paginator->total(),
                'last_page' => $this->paginator->lastPage(),
            ],
            'request' => request()->query()

        ],
            status: $this->code
        );
    }
}
