<?php

use Illuminate\Support\Facades\Route;

Route::prefix('hotels')
    ->name('hotels.')
    ->group(function () {

        Route::get("", function () {
            return ['message' => 'hotels.all'];
        })->name('all');

        Route::get("{id}", function () {
            return ['message' => 'hotels.read'];
        })->where('id', '[0-9]+')->name('read');

        Route::post("", function () {
            return ['message' => 'hotels.create'];
        })->name('create');

        Route::put("{id}", function () {
            return ['message' => 'hotels.update'];
        })->where('id', '[0-9]+')->name('update');

        Route::delete("{id}", function () {
            return ['message' => 'hotels.delete'];
        })->where('id', '[0-9]+')->name('delete');
    });
