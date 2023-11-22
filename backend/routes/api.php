<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// la ruta es http://localhost:8000/api/products
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// la ruta es http://localhost:8000/api/products
Route::get('/products', 'ProductController@index');

// la ruta es http://localhost:8000/api/products
Route::post('/products', 'ProductController@store');

// la ruta es http://localhost:8000/api/products/1
Route::put('/products/{id}', 'ProductController@update');

// la ruta es http://localhost:8000/api/products/1
Route::delete('/products/{id}', 'ProductController@destroy');

