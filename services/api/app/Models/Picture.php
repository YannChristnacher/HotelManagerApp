<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * - Properties
 * @property-read int $id
 * @property string $model_type
 * @property int $model_id
 * @property string $filepath
 * @property int $filesize
 * @property int $position
 *
 * - Relations
 * @property-read Model $model
 */
class Picture extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'model_type',
        'model_id',
        'filepath',
        'filesize',
        'position'
    ];

    /**
     * Relations
     */
    public function model(): MorphTo
    {
        return $this->morphTo();
    }
}
