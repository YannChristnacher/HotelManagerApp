<?php

use Illuminate\Support\Facades\Route;

Route::prefix('hotels')
    ->name('hotels.')
    ->group(function () {

        Route::get("", function () {
            return ['message' => 'hotels.all'];
        })->name('all');

        Route::get("{id}", function () {
            return ['message' => 'hotels.get'];
        })->where('id', '[0-9]+')->name('get');

        Route::post("", function () {
            return ['message' => 'hotels.create'];
        })->name('create');

        Route::put("{id}", function () {
            return ['message' => 'hotels.edit'];
        })->where('id', '[0-9]+')->name('edit');

        Route::delete("{id}", function () {
            return ['message' => 'hotels.delete'];
        })->where('id', '[0-9]+')->name('delete');
    });
