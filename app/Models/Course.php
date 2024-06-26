<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory, HasUlids;

    protected $guarded = ['id'];

    public $incrementing = false;

    public function lecturer(): BelongsTo {
        return $this->belongsTo(Lecturer::class);
    }

    public function semester(): BelongsTo {
        return $this->belongsTo(Semester::class);
    }

    public function schedule(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    public function assignment(): HasMany {
        return $this->hasMany(Assignment::class);
    }
}
