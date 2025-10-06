<?php

namespace App\Http\Actions;

use App\Http\Resources\PictureResource;
use App\Models\Picture;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PictureCreateAction
{
    public static function execute( UploadedFile $file, Model $model, int $position):PictureResource
    {


        $filesize = $file->getSize();

        $filename = "pictures/" . Str::uuid() . "." . $file->getClientOriginalExtension();
        $isSaved =Storage::disk('s3')->put($filename, file_get_contents($file));
        if(!$isSaved) throw new \Exception("Impossible d'enregistrer l'image");

        $url = Storage::disk('s3_public')->url($filename);

        $element = Picture::create([
            'model_id' => $model->id,
            'model_type'=> $model::class,
            'filepath' => $filename,
            'public_url' => $url,
            'filesize' => $filesize,
            'position' => $position
        ]);


        return new PictureResource($element);
    }
}
