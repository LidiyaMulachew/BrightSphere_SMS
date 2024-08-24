<?php


namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Grade;
use App\Models\AssessmentRecord;

class GradeController extends Controller
{
    

    public function showGrades($courseId)
{
    // Fetch assessment records for the given course
    $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
        ->with('student') // Assumes there is a student relationship on AssessmentRecord
        ->get();

    // Aggregate scores by student
    $students = $assessmentRecords->groupBy('student_id')->map(function ($records) use ($courseId) {
        $studentId = $records->first()->student_id;
        $finalScore = $this->calculateFinalScore($studentId, $courseId);
        $grade = $this->calculateGrade($finalScore);

        return [
            'student' => $records->first()->student,
            'final_score' => $finalScore,
            'grade' => $grade
        ];
    });

    // Convert to a collection
    $students = $students->values();

    // Return data to the Inertia page
    return Inertia::render('Teacher/Grade', [
        'courseId' => $courseId,
        'students' => $students
    ]);
}


    // Calculate the final score for a student
    private function calculateFinalScore($studentId, $courseId)
    {
        $scores = AssessmentRecord::where('student_id', $studentId)
            ->where('course_id', $courseId)
            ->sum('score');

    //     return min($scores, 100); // Ensure the score does not exceed 100
    // }
            // If the calculated score exceeds 100, throw an exception
            if ($scores > 100) {
                return ['error' => 'The calculated final score exceeds 100.'];
            }
    
            return $scores; // Return the calculated score (within the valid range)
        }

    // Calculate grade based on final score
    private function calculateGrade($score)
    {

            // Check if the score is valid (0-100 range)
        if ($score > 100) {
            return null; // Or throw an exception or return a specific message if needed
        }
        if ($score < 50) return 'F';
        if ($score < 60) return 'C';
        if ($score < 65) return 'C+';
        if ($score < 70) return 'B-';
        if ($score < 75) return 'B';
        if ($score < 80) return 'B+';
        if ($score < 85) return 'A-';
        if ($score < 90) return 'A';
        return 'A+';
    }

    public function store(Request $request, $courseId)
{
    // Validate the incoming data
    $request->validate([
        'grades' => 'required|array',
        'grades.*.student_id' => 'required|exists:users,id', // Ensure valid student IDs
        'grades.*.final_score' => 'required|numeric|min:0|max:100',
        'grades.*.grade' => 'required|string',
        'grades.*.locked' => 'required|boolean',
    ]);

    // Fetch the assessment_record_id based on the courseId
    $assessmentRecord = AssessmentRecord::where('course_id', $courseId)->first();

    if (!$assessmentRecord) {
        return response()->json(['error' => 'Assessment record not found for this course'], 404);
    }

    $assessmentRecordId = $assessmentRecord->id;

    // Map the incoming grades data
    $gradeData = collect($request->grades);

    foreach ($gradeData as $data) {
        // Update or create the grade entry based on student_id, course_id, and assessment_record_id
        Grade::updateOrCreate(
            [
                'student_id' => $data['student_id'],
                'course_id' => $courseId,
                'assessment_record_id' => $assessmentRecordId
            ],
            [
                'final_score' => $data['final_score'],
                'grade' => $data['grade'],
                'locked' => true,
            ]
        );
    }

    return response()->json(['message' => 'Grades submitted successfully.']);
}

}

