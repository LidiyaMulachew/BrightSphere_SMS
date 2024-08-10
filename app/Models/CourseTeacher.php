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
    

    // public function course()
    // {
    //     return $this->belongsTo(Course::class);
    // }
}
