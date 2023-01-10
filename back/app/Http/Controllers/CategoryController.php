<?php

namespace App\Http\Controllers;

use App\Http\Components\Services\CategoryService;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request, CategoryService $categoryService)
    {
        $asTree = $request->get('asTree', false);
        $withProducts = $request->get('withProducts', false);

        $categories = $categoryService->getCategories($asTree, $withProducts);

        return CategoryResource::collection($categories);
    }


}
