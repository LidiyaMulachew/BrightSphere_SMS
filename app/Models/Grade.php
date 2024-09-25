<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;
    protected $table= 'grades';
    protected $fillable = [
        'student_id', 
        'course_id',
        'assessment_record_id',
        'final_score',
        'grade',
        'locked',
    ];

    public function student()
    {
        return $this->belongsToMany(User::class, 'student_id');
    }

    public function course()
    {
        return $this->belongsToMany(Course::class, 'course_id');
    }

    public function assessmentRecord()
    {
        return $this->belongsToMany(AssessmentRecord::class, 'assessment_record_id');
    }
}
