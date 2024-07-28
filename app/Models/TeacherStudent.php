<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherStudent extends Model
{
    use HasFactory;
    protected $table='student_teacher';
    
    protected $fillable=['student_id', 'teacher_id' ];

}
