<?php

use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\Route;

Route::prefix('hotels/{forHotel}/pictures')
    ->name('pictures.')
    ->group(function () {

        Route::post("", [PictureController::class, 'store'])->name('create');

        Route::put("/update-positions", [PictureController::class, 'updatePositions'])->where('id', '[0-9]+')->name('edit.position');

        Route::delete("{picture}", [PictureController::class, 'delete'])->where('id', '[0-9]+')->name('delete');
    });
