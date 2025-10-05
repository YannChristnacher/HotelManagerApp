<?php

namespace App\Http\Actions;

use App\Models\Picture;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\Exception;

class PictureDeleteAction
{
    public static function execute(Picture $picture): bool
    {
        $position = $picture->position;

        /** @var Collection<Picture> $pictures */
        $pictures = Picture::query()
            ->where('position',">", $position)
            ->where('model_type', $picture->model_type)
            ->where('model_id', $picture->model_id)
            ->get();

        foreach ($pictures as $picture) {
            $picture->position -= 1;
            $picture->save();
        }
        try {
            Storage::disk('s3_public')->delete($picture->filepath);
        }catch (\Exception $exception){
            throw new Exception("Impossible de supprimer l'image");
        }

        return $picture->delete();
    }
}
