<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssessmentWeight extends Model
{
    use HasFactory;

    protected $table = 'assessment_weight'; 

    protected $fillable = [
       'teacher_id', 'course_id',  'assessment_type', 'weight'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
    // Define the relationship with AssessmentRecord
    public function assessmentRecords()
    {
        return $this->hasMany(AssessmentRecord::class);
    }

}
