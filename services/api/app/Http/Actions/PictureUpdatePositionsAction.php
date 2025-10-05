<?php

namespace App\Http\Actions;

use App\Http\Requests\Dtos\PicturePositionDto;
use App\Models\Picture;

class PictureUpdatePositionsAction
{
    /**
     * @param array<PicturePositionDto> $picturePositionData
     * @return bool
     */
    public static function execute(array $picturePositionData): bool
    {
        foreach ($picturePositionData as $positionData) {
            $model = Picture::findOrFail($positionData->getId());
            $model->position = $positionData->getPosition();
            try {
                $model->save();
            }catch (\Exception $exception){
                throw new \Exception("Impossible de modifier la position");
            }
        }
        return true;
    }
}
