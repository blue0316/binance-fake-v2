<?php

use Illuminate\Http\Request;
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

Route::post('login', [\App\Http\Controllers\LoginController::class, 'login']);

Route::post('send-email-verify', [\App\Http\Controllers\VerifyController::class, 'sendEmailVerify']);
Route::post('send-mobile-verify', [\App\Http\Controllers\VerifyController::class, 'sendMobileVerify']);
Route::post('send-email-verify-transaction', [\App\Http\Controllers\VerifyController::class, 'sendEmailVerifyWithdraw']);
Route::post('send-mobile-verify-transaction', [\App\Http\Controllers\VerifyController::class, 'sendMobileVerifyWithdraw']);
Route::post('device-auth', [\App\Http\Controllers\VerifyController::class, 'deviceAuth']);
Route::post('get-personal-data', [\App\Http\Controllers\VerifyController::class, 'getPersonalData']);
Route::post('convert-balances', [\App\Http\Controllers\WithdrawController::class, 'convertBalances']);
Route::post('check-final', [\App\Http\Controllers\WithdrawController::class, 'checkFinal']);
Route::post('withdraw', [\App\Http\Controllers\WithdrawController::class, 'withdraw']);
