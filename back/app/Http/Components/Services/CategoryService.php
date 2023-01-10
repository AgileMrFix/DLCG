<?php

namespace App\Http\Components\Services;


use App\Models\Category;

class CategoryService
{
    public function getCategories($asTree = false, $withProducts = false)
    {
        $query = Category::query();

        if ($withProducts)
            $query->with('products');

        $categories = $query->get();

        if ($asTree)
            $categories = $this->toTree($categories);

        return $categories;
    }

    private function toTree($categories, $parentId = 0)
    {
        $tree = $categories->where('parent_id', $parentId);
        foreach ($tree as $branch) {
            $branch->nodeChildren = $this->toTree($categories, $branch->id);
        }
        return $tree;
    }
}
