<?php

namespace App\Http\Controllers;

use App\Http\Actions\HotelAllAction;
use App\Http\Actions\HotelDetailAction;
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
    public function create(){

    }
    public function read(Hotel $hotel){
        $response = new SingleResponse();
        return $response
            ->setMessage("Détail de l'hotel : " . $hotel->id)
            ->setData(HotelDetailAction::execute($hotel));
    }
    public function update(Hotel $hotel){}
    public function delete(Hotel $hotel){}
}
