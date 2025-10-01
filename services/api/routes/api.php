<?php

use Illuminate\Support\Facades\Route;

Route::prefix("v1")->name("v1.")->group(function () {
    require "api/hotel.php";
    require "api/picture.php";
});
