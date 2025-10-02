<?php

namespace App\Http\Controllers;

use App\Http\Actions\HotelAllAction;
use App\Http\Actions\HotelCreateAction;
use App\Http\Actions\HotelDeleteAction;
use App\Http\Actions\HotelDetailAction;
use App\Http\Actions\HotelUpdateAction;
use App\Http\Requests\CreateHotelRequest;
use App\Http\Requests\UpdateHotelRequest;
use App\Http\Resources\HotelDetailResource;
use App\Http\Resources\HotelPreviewResource;
use App\Http\Responses\PaginateResponse;
use App\Http\Responses\SingleResponse;
use App\Models\Hotel;
use Spatie\QueryBuilder\QueryBuilder;

class HotelController extends Controller
{
    public function all(){
       $result = HotelAllAction::execute();
       $response = new PaginateResponse();

       return $response
           ->setStatus(true)
           ->setMessage("Liste des hotels")
           ->setPaginator($result->getPaginator())
           ->setData($result->getHotelsResource());
    }
    public function create(CreateHotelRequest $request){
        $response = new SingleResponse();
        return $response
            ->setMessage("Création d'un hotel")
            ->setData(HotelCreateAction::execute($request->toDto()));
    }
    public function read(?Hotel $hotel = null){

        $response = new SingleResponse();
        return $response
            ->setMessage("Détail de l'hotel : " . $hotel->id)
            ->setData(HotelDetailAction::execute($hotel));
    }
    public function update(Hotel $hotel, UpdateHotelRequest $request){
        $response = new SingleResponse();
        return $response
            ->setMessage("Mis à jour de l'hotel : " . $hotel->id)
            ->setData(HotelUpdateAction::execute($hotel, $request->toDto()));
    }
    public function delete(Hotel $hotel){
        $response = new SingleResponse();
        return $response
            ->setMessage("Suppresion de l'hotel : " . $hotel->id)
            ->setData(HotelDeleteAction::execute($hotel));
    }
}
