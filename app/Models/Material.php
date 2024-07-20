<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;  //softdelete


class Material extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 'title', 'description', 'file_path',
    ];
    
    protected $dates = ['deleted_at'];

    //  relationship with User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
