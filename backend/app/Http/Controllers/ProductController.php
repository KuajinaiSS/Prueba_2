<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    // funcion para mostrar todos los productos
    public function index()
    {
        $products = Product::all(['name', 'price', 'description', 'image']);
        return response()->json($products);
    }


    // funcion para mostrar un producto en especifico
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'nullable',
            'image' => 'required'
        ]);

        $product = Product::create($request->all());
        return response()->json($product, 201);
    }



    // funcion para actualizar un producto en especifico
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'nullable',
            'image' => 'required'
        ]);

        $product->update($request->all());
        return response()->json($product, 200);
    }


    // funcion para eliminar un producto en especifico
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);
    }
}
