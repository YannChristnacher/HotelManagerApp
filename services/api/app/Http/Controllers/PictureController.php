<?php

namespace App\Http\Controllers;

use App\Http\Actions\PictureStoreAction;
use App\Http\Requests\CreatePictureRequest;
use App\Http\Responses\SingleResponse;
use App\Models\Hotel;
use App\Models\Picture;

class PictureController extends Controller
{
    /**
     * @throws \Exception
     */
    public function store(Hotel $forHotel, CreatePictureRequest $request){
        $validated = $request->validated();
        $response = new SingleResponse();
        return $response
            ->setMessage("Ajout de l'image réussi !")
            ->setData(PictureStoreAction::execute($request->file("picture"), $forHotel, $validated["position"]));
    }
    public function update(Hotel $forHotel, Picture $picture){}
    public function delete(Hotel $forHotel, Picture $picture){}
}
