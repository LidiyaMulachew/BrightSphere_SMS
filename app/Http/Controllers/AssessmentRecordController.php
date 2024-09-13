<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Course;
use App\Models\CourseTeacher;
use App\Models\User;
use App\Models\Grade;
use App\Models\AssessmentWeight;
use App\Models\AssessmentRecord;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class AssessmentRecordController extends Controller
{


    public function index($courseId)
    {
       
        $teacherId = auth()->id(); 

        // Retrieve students enrolled in the specified course and taught by the authenticated teacher
        $students = User::whereExists(function ($query) use ($courseId, $teacherId) {
            $query->select('*')
                  ->from('course_student')
                  ->join('course_teacher', 'course_student.course_teacher_id', '=', 'course_teacher.course_id')
                  ->where('course_student.course_teacher_id', $courseId)
                  ->where('course_teacher.teacher_id', $teacherId)
                  ->whereColumn('course_student.student_id', 'users.id');
        })->whereNull('deleted_at')
          ->get();

        return Inertia::render('Teacher/StudentResult', [
            'students' => $students,
            'courseId' => $courseId,
        ]);
        
    }
      
    
    

    public function showResultForm($courseId, $studentId)
    {
        $student = User::findOrFail($studentId);
        $assessments = AssessmentWeight::where('course_id', $courseId)
            ->where('teacher_id', auth()->id())
            ->get();

        return Inertia::render('Teacher/EnterResult', [
            'student' => $student,
            'assessments' => $assessments,
            'courseId' => $courseId,
        ]);
    }

    public function storeResult(Request $request, $courseId, $studentId)
    {
        $request->validate([
            'assessment_type' => 'required|exists:assessment_weight,id',
            'result' => 'required|numeric|min:0|max:100',
        ]);
        $teacherId = Auth::id(); 

            // Check if the grade has been submitted and locked for this student in the course
    $gradeLocked = Grade::where('course_id', $courseId)
    ->where('student_id', $studentId)
    ->where('locked', true)
    ->exists();

if ($gradeLocked) {
return redirect()->route('students.list', $courseId)
     ->with('error', 'Cannot edit assessment records because the grade has already been submitted and locked.');
}
        
    // Calculate the final score as the sum of results for the student and course
    $existingRecords = AssessmentRecord::where('course_id', $courseId)
                                       ->where('student_id', $studentId)
                                       ->get();

    $totalScore = $existingRecords->sum('score') + $request->result;
        AssessmentRecord::updateOrCreate(
            [
                'course_id' => $courseId,
                'student_id' => $studentId,
                'assessment_weight_id' => $request->assessment_type,
                'teacher_id' => $teacherId, 
            ],
            [
                'score' => $request->result,
                'final_score' => $totalScore, 
                'grade' => null, // Initial grade is null
                'locked' => false, // Initially not locked
            ]
        );

        return redirect()->route('students.list', $courseId)
            ->with('success', 'Result recorded successfully!');
    }


    public function list($courseId)
    {
        // Subquery to get the latest created_at timestamp for each student
    $latestRecordsSubquery = DB::table('assessment_record')
        ->select('student_id', DB::raw('MAX(created_at) as latest_created_at'))
        ->where('course_id', $courseId)
        ->whereNotNull('final_score')
        ->groupBy('student_id');

    // Join with the assessment_record table to get the latest record details
    $students = DB::table('assessment_record')
        ->joinSub($latestRecordsSubquery, 'latest_records', function ($join) {
            $join->on('assessment_record.student_id', '=', 'latest_records.student_id')
                 ->on('assessment_record.created_at', '=', 'latest_records.latest_created_at');
        })
        ->join('users', 'assessment_record.student_id', '=', 'users.id') // Join with users table to get names
        ->where('assessment_record.course_id', $courseId)
        ->whereNotNull('assessment_record.final_score')
        ->select('users.id', 'users.name', 'assessment_record.final_score')
        ->get()
        ->map(function ($record) {
            return [
                'id' => $record->id,
                'name' => $record->name,
                'final_score' => $record->final_score,
            ];
        });

    return Inertia::render('Teacher/GradeSubmission', [
        'courseId' => $courseId,
        'students' => $students,
    ]);
}



public function showForm($courseId, $studentId)
{
    $assessmentRecord = AssessmentRecord::where('course_id', $courseId)
                                        ->where('student_id', $studentId)
                                        ->first();

    if (!$assessmentRecord || $assessmentRecord->locked) {
        return redirect()->route('students.list', $courseId)
                         ->with('error', 'Record not found or already locked.');
    }

    return Inertia::render('Teacher/GradeForm', [
        'assessmentRecord' => $assessmentRecord,
        'courseId' => $courseId,
        'studentId' => $studentId,
        'assessmentWeightId' => $assessmentRecord->assessment_weight_id ?? null // Pass the assessment_weight_id
    ]);

}


// public function submitGrade(Request $request, $courseId, $studentId)
// {
//     // Validate the request
//     $validatedData = $request->validate([
//         'grade' => 'required|string|max:5',
//         'assessment_weight_id' => 'required|integer|exists:assessment_weight,id', 
//     ]);

//     // Calculate the final score based on existing scores for the student in the course
//     $totalScore = $this->calculateFinalScore($courseId, $studentId);

//     // Find or create the assessment record
//     $record = AssessmentRecord::updateOrCreate(
//         [
//             'course_id' => $courseId,
//             'student_id' => $studentId,
//             'assessment_weight_id' => $validatedData['assessment_weight_id'],
//         ],
//         [
//             'score' => $request->input('score', null), // Handle if score is not sent
//             'final_score' => $totalScore, 
//             'grade' => $validatedData['grade'],
//             'locked' => true, // Lock the record after submission
//             'teacher_id' => auth()->id(),
//         ]
//     );

//     return redirect()->route('students.list', ['courseId' => $courseId])
//         ->with('success', 'Grade submitted successfully!');
// }

// private function calculateFinalScore($courseId, $studentId)
// {
//     // Fetch all assessment records for the given course and student
//     $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
//                                          ->where('student_id', $studentId)
//                                          ->whereNotNull('score') // Ensure only non-null scores are considered
//                                          ->get();
    
//     // Calculate the total score by summing up the scores
//     $totalScore = $assessmentRecords->sum('score');
    
//     return $totalScore;
// }

public function submitGrade(Request $request, $courseId, $studentId)
{
    // Validate the request
    $validatedData = $request->validate([
        'grade' => 'required|string|max:5',
        'assessment_weight_id' => 'required|integer|exists:assessment_weight,id', 
    ]);

    // Fetch existing assessment records for the student and course
    $existingRecords = AssessmentRecord::where('course_id', $courseId)
                                       ->where('student_id', $studentId)
                                       ->get();

    // Calculate the final score based on existing scores and the new assessment
    $totalScore = $existingRecords->sum('score');

    // Find or create the assessment record
    $record = AssessmentRecord::updateOrCreate(
        [
            'course_id' => $courseId,
            'student_id' => $studentId,
            'assessment_weight_id' => $validatedData['assessment_weight_id'],
        ],
        [
            'score' => $request->input('score', null), // Handle if score is not sent
            'final_score' => $totalScore, 
            'grade' => $validatedData['grade'],
            'locked' => true, // Lock the record after submission
            'teacher_id' => auth()->id(),
        ]
    );

    return redirect()->route('students.list', ['courseId' => $courseId])
        ->with('success', 'Grade submitted successfully!');
}



public function show($courseId)
{
    // Fetch the course with its assessment records
    $course = Course::with(['assessmentRecords.student', 'assessmentRecords.assessmentWeight'])
        ->find($courseId);

    if (!$course) {
        abort(404, 'Course not found');
    }

    // Fetch the assessment records
    $assessmentRecords = $course->assessmentRecords;

    // Extract unique assessment types and their weights
    $assessmentTypes = $assessmentRecords->map(function ($record) {
        return [
            'type' => $record->assessmentWeight->assessment_type,
            'weight' => $record->assessmentWeight->weight,
        ];
    })->unique('type')->sortBy('type')->values();

    // Group records by student
    $studentRecords = $assessmentRecords->groupBy('student_id')->map(function ($records) {
        $studentName = $records->first()->student->name ?? 'Unknown';
        return [
            'studentName' => $studentName,
            'records' => $records->mapWithKeys(function ($record) {
                return [
                    $record->assessmentWeight->assessment_type => [
                        'weight' => $record->assessmentWeight->weight,
                        'score' => $record->score,
                        'final_score' => $record->final_score,
                    ]
                ];
            })->toArray(),
        ];
    });

    
    return Inertia::render('Teacher/StudentResultList', [
        'course' => $course,
        'assessmentRecords' => $studentRecords,
        'assessmentTypes' => $assessmentTypes,
    ]);
}


}
