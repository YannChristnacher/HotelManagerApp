<?php

namespace App\Http\Controllers;

use App\Http\Actions\PictureDeleteAction;
use App\Http\Actions\PictureCreateAction;
use App\Http\Actions\PictureUpdatePositionsAction;
use App\Http\Requests\CreatePictureRequest;
use App\Http\Requests\UpdatePicturePositionRequest;
use App\Http\Responses\SingleResponse;
use App\Models\Hotel;
use App\Models\Picture;

class PictureController extends Controller
{
    /**
     * @throws \Exception
     */
    public function store(Hotel $forHotel, CreatePictureRequest $request): SingleResponse
    {
        $validated = $request->validated();
        $response = new SingleResponse();
        return $response
            ->setMessage("Ajout de l'image réussi !")
            ->setData(PictureCreateAction::execute($request->file("picture"), $forHotel, $validated["position"]));
    }
    public function updatePositions(Hotel $forHotel, UpdatePicturePositionRequest $request): SingleResponse
    {

        $response = new SingleResponse();
        return $response
            ->setMessage("Modification de la position réussi !")
            ->setData(PictureUpdatePositionsAction::execute($request->toDto()));
    }

    public function delete(Hotel $forHotel, Picture $picture): SingleResponse
    {
        $response = new SingleResponse();
        return $response
            ->setMessage("Suppresion de la photo réussi")
            ->setData(PictureDeleteAction::execute($picture));
    }
}
