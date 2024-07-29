<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses'; 
    protected $fillable=['course_id', 'course_name'];


        // create relationships with courses and teachers

        public function teachers()
        {
            return $this->belongsToMany(User::class, 'course_teacher', 'course_id', 'teacher_id');
        }
}
