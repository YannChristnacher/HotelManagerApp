<?php

namespace App\Http\Actions;

use App\Http\Resources\PictureResource;
use App\Models\Picture;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PictureStoreAction
{
    public static function execute( UploadedFile $file, Model $model, int $position):PictureResource
    {


        $filesize = $file->getSize();

        //$filename = "pictures/" . Str::uuid() . "." . $file->getClientOriginalExtension();
        $filename = "pictures/" . "test_" . $position . "." . $file->getClientOriginalExtension();
        $isSaved =Storage::disk('s3_public')->put($filename, file_get_contents($file));
        if(!$isSaved) throw new \Exception("Impossible d'enregistrer l'image");

        $url = Storage::disk('s3_public')->url($filename);
        $publicUrl = str_replace(env('AWS_PUBLIC_URL'), env('AWS_ENDPOINT'), $url);

        $element = Picture::create([
            'model_id' => $model->id,
            'model_type'=> $model::class,
            'filepath' => $publicUrl,
            'filesize' => $filesize,
            'position' => $position
        ]);


        return new PictureResource($element);
    }
}
