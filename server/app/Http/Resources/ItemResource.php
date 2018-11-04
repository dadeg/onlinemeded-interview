<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type'          => 'items',
            'id'            => (string)$this->id,
            'attributes'    => [
                'title' => $this->title,
                'completed' => $this->completed
            ],
            'links'         => [
                'self' => route('items.show', ['item' => $this->id]),
            ],
        ];
    }
}
