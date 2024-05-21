<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lecturer extends Model
{
    use HasFactory, HasUlids;

    protected $guarded = ['id'];

    public $incrementing = false;

    public function course(): HasMany {
        return $this->hasMany(Course::class);
    }
}
