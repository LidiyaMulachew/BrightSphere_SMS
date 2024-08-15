<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AssessmentRecord extends Model
{
    use HasFactory;

    protected $table = 'assessment_record'; 

    protected $fillable = [
        'teacher_id', 'course_id', 'student_id', 'assessment_weight_id', 
        'score', 'final_score', 'grade', 'locked'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function assessmentWeight()
    {
        return $this->belongsTo(AssessmentWeight::class, 'assessment_weight_id');
    }
    
}
