<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'file_path',
    ];

    //  relationship with User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
