<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedule extends Model
{
    use HasFactory, HasUlids;

    protected $guarded = ['id'];

    public $incrementing = false;

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
