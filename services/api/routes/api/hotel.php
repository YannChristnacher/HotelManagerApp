<?php

use App\Http\Controllers\HotelController;
use Illuminate\Support\Facades\Route;

Route::prefix('hotels')
    ->name('hotels.')
    ->group(function () {
        Route::get("", [HotelController::class, 'all'])->name('all');
        Route::get("{hotel}", [HotelController::class, 'read'])->where('id', '[0-9]+')->name('read');
        Route::post("", [HotelController::class, 'create'])->name('create');
        Route::put("{hotel}", [HotelController::class, 'update'])->where('id', '[0-9]+')->name('update');
        Route::delete("{hotel}", [HotelController::class, 'delete'])->where('id', '[0-9]+')->name('delete');
    });
