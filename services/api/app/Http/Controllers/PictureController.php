<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\Picture;

class PictureController extends Controller
{
    public function create(Hotel $hotel){}
    public function update(Hotel $hotel, Picture $picture){}
    public function delete(Hotel $hotel, Picture $picture){}
}
