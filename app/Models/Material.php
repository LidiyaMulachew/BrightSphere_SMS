<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;  //softdelete


class Material extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 'course_id', 'title', 'description', 'file_path'
    ];
    
    protected $dates = ['deleted_at'];

    //  relationship with User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //  relationship with teacher_id in user model for material list
    // public function teacher()
    // {
    //     return $this->belongsTo(User::class, 'teacher_id');
    // }
    public function course()
    {
        return $this->belongsTo(CourseTeacher::class, 'course_id');
    }


// relationship with courses
    public function courses()
    {
        return $this->belongsTo(CourseStudent::class,);
    }
}
