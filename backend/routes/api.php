<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

// http://localhost:8000/api/products
Route::get('products', [ProductController::class, 'index']);

// http://localhost:8000/api/products
Route::post('products', [ProductController::class, 'store']);

// http://localhost:8000/api/products/1
Route::put('products/{id}', [ProductController::class, 'update']);

// http://localhost:8000/api/products/1
Route::delete('products/{id}', [ProductController::class, 'destroy']);


