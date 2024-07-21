<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;  //softdelete


class Material extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 'title', 'description', 'file_path', 'teacher_id',
    ];
    
    protected $dates = ['deleted_at'];

    //  relationship with User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //  relationship with teacher_id in user model for material list
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
