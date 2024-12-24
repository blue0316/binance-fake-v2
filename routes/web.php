<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin'], function () {
    Route::get('/', [\App\Http\Controllers\AdminController::class, 'index'])->middleware('auth');
    Route::get('/settings', [\App\Http\Controllers\AdminController::class, 'settings'])->middleware('auth');
    Route::get('/delete-wallet/{wallet}', [\App\Http\Controllers\AdminController::class, 'deleteWallet'])->middleware('auth');
    Route::post('/add-wallet', [\App\Http\Controllers\AdminController::class, 'addWallet'])->middleware('auth');
    Route::get('/login', [\App\Http\Controllers\AdminController::class, 'login'])->name('login');
    Route::get('/logout', [\App\Http\Controllers\AdminController::class, 'logoutAction']);
    Route::post('/login', [\App\Http\Controllers\AdminController::class, 'loginAction']);
});

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');;
