<?php

use Illuminate\Support\Facades\Route;

Route::get('/hello', function() {
    return ['message' => 'hello from api'];
});

Route::prefix("v1")->name("v1.")->group(function () {
    require "api/hotel.php";
});
