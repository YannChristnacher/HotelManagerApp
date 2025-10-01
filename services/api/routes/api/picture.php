<?php

use Illuminate\Support\Facades\Route;

Route::prefix('hotels/{idHotel}/pictures')
    ->name('pictures.')
    ->group(function () {

        Route::post("", function () {
            return ['message' => 'pictures.create'];
        })->name('create');

        Route::put("{id}", function () {
            return ['message' => 'pictures.edit'];
        })->where('id', '[0-9]+')->name('edit');

        Route::delete("{id}", function () {
            return ['message' => 'pictures.delete'];
        })->where('id', '[0-9]+')->name('delete');
    });
