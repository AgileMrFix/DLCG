<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=>'required|string|min:10|max:255',
            'price'=> 'required|numeric|min:0|max:999999',
            'category_id'=>'required|numeric|exists:categories,id',
            'active'=>'required|boolean'
        ];
    }
}
