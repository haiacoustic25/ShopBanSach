<?php

use App\Http\Controllers\API\AuthorController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BillController;
use App\Http\Controllers\API\DetailCartController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
// author
Route::get('/author',[AuthorController::class,'show']);

Route::post('/add-author', [AuthorController::class,'store']);

Route::get('/edit-author/{id}',[AuthorController::class,'findAuthorById']);

Route::post('/update-author',[AuthorController::class, 'updateAuthor']);

Route::delete('/delete-author/{id}',[AuthorController::class, 'deleteById']);

//category
Route::get('/category',[CategoryController::class,'show']);

Route::post('/add-category', [CategoryController::class,'store']);

Route::get('/edit-category/{id}',[CategoryController::class,'findCategoryById']);

Route::put('/update-category/{id}',[CategoryController::class, 'updateCategory']);

Route::delete('/delete-category/{id}',[CategoryController::class, 'deleteById']);


//book

Route::get('/book',[BookController::class,'show']);

Route::get('/search-book',[BookController::class,'searchBook']);

Route::post('/add-book', [BookController::class,'store']);

Route::get('/edit-book/{id}',[BookController::class,'findBookById']);

Route::post('/update-book',[BookController::class, 'updateBook']);

Route::delete('/delete-book/{id}',[BookController::class, 'deleteById']);

// user

Route::get('/get-user',[AuthController::class,'show']);

Route::post('/register', [AuthController::class,'store']);

Route::post('/update-user',[AuthController::class, 'updateUser']);

// Route::post('/login', [AuthController::class,'postAuthLogin']);

// Cart
Route::post('/add-cart', [DetailCartController::class,'store']);
Route::get('/show-gh-by-user/{cart_id}', [DetailCartController::class, 'showByUserId']);
Route::get('/show-product/{username}', [AuthController::class, 'showCart']);
Route::post('/delete-product-in-cart',[DetailCartController::class, 'deleteDetailCartByProduct']);
// Route::get('/bill/{id}',[BillController::class,'store']);
Route::post('/pay',[BillController::class, 'store']);
Route::post('/bill-edit',[BillController::class, 'edit']);
Route::get('/bill/{id}',[BillController::class, 'showById']);
Route::get('/bill-all',[BillController::class, 'showAll']);
Route::get('/bill-view',[BillController::class, 'BillViewAdminAPI']);
Route::post('/bill-update',[BillController::class, 'updateBill']);


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('/login', [AuthController::class, 'postAuthLogin']);
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });