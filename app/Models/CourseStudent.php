<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseStudent extends Model
{
    use HasFactory;
    protected $table='course_student';
    protected $fillable=['student_id','course_teacher_id'];


    // public function courseTeacher()
    // {
    //     return $this->belongsTo(CourseTeacher::class, 'course_teacher_id');
    // }

    // public function students()
    // {
    //     return $this->belongsToMany(User::class, 'course_student', 'course_teacher_id', 'student_id');
    // }

}
