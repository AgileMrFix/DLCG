<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            //for optimization. You don't need to use a relation to build a tree
            'children' => $this->nodeChildren ? CategoryResource::collection($this->nodeChildren) : [],
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
