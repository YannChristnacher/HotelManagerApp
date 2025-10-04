<?php

use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\Route;

Route::prefix('hotels/{forHotel}/pictures')
    ->name('pictures.')
    ->group(function () {

        Route::post("", [PictureController::class, 'store'])->name('create');

        Route::put("{id}", function () {
            return ['message' => 'pictures.edit'];
        })->where('id', '[0-9]+')->name('edit');

        Route::delete("{id}", function () {
            return ['message' => 'pictures.delete'];
        })->where('id', '[0-9]+')->name('delete');
    });
