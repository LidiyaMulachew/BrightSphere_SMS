<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseTeacher extends Model
{
    use HasFactory;
    protected $table = 'course_teacher'; // Ensure this matches your pivot table name
    protected $fillable= ['course_id', 'teacher_id'];


    public function materials()
    {
        return $this->hasMany(Material::class);
    }
        // Define the inverse relationship with User
        public function user()
        {
            return $this->belongsTo(User::class, 'teacher_id'); // Adjust the foreign key as needed
        }
    








        // > \App\Models\User::find(3)->courseTeachers()->find(6)->students









        
    // Define the relationship with the Course model
    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'course_student', 'course_teacher_id', 'student_id');
    }

    // public function course()
    // {
    //     return $this->belongsTo(Course::class);
    // }
}
