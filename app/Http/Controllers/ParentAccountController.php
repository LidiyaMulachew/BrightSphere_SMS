<?php

namespace App\Http\Controllers;

use App\Models\TeacherStudent;
use App\Models\StudentParent;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use App\Models\AssessmentRecord;
use App\Models\AssessmentWeight;
use App\Models\Grade;


use App\Models\CourseTeacher;
use App\Models\CourseStudent;


use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class ParentAccountController extends Controller
{
    /**
     * Show the form for creating a parent account.
     *
     * @param  int  $studentId
     * @return \Inertia\Response
     */
    public function create($studentId): Response
    {
        // Fetch the course related to the studentId to validate the studentId
        $course = TeacherStudent::where('student_id', $studentId)->firstOrFail();

        return Inertia::render('Teacher/CreateParentAccount', [
            'studentId' => $studentId, // Pass studentId to the component
        ]);
    }

    /**
     * Store a newly created parent account in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:8|confirmed',
            'role' => ['required', 'in:' . implode(',', [User::FAMILY])],
            'student_id' => 'required|exists:student_teacher,student_id', // Ensure student_id is valid
        ]);

        // Check if a parent with the provided email already exists
        $parent = User::where('email', $request->email)->first();

        if ($parent) {
            // Parent exists, update existing parent's data if needed
            // Ensure the parent is associated with the student if necessary
            if (!StudentParent::where('parent_id', $parent->id)
                ->where('student_id', $request->student_id)
                ->exists()) {
                // Create the StudentParent relationship if it does not exist
                StudentParent::create([
                    'parent_id' => $parent->id,
                    'student_id' => $request->student_id,
                ]);
            }
        } else {
            // Parent does not exist, create a new parent account
            $parent = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $request->role,
            ]);

            // Create the StudentParent relationship
            StudentParent::create([
                'parent_id' => $parent->id,
                'student_id' => $request->student_id,
            ]);
        }

        return redirect()->route('studentslist.index'); 
    }


        
    //  Show the student information with their associated parents.
 
    public function show($studentId)
    {
        // Fetch the student with their associated parents
        $student = User::with('parent')->findOrFail($studentId);

        // Prepare the data for the view
        $studentData = [
            'student' => [
                'id' => $student->id,  // Ensure ID is included
                'name' => $student->name,
                'email' => $student->email,
            ],
            'parent' => $student->parent->map(function ($parent) {
                return [
                    'name' => $parent->name,
                    'email' => $parent->email,
                ];
            }),
        ];
       

        return Inertia::render('Teacher/Parent', $studentData);
    }

   

public function children()
{
    // Get the authenticated user (parent)
    $parent = auth()->user();

    // Fetch students associated with the parent
    $students = $parent->student; // Assuming 'student' is the relationship method name
    // Extract student names
    $studentNames = $students->pluck('name'); // Replace 'name' with the actual field for student names
    // dd($studentNames);

   
    return Inertia::render('Family/ChildrenList', [
        'student_names' => $studentNames,
    ]);
}


public function showCourses(Request $request)
{
    // Get the authenticated user (parent)
    $parent = Auth::user();

    // Get the student name from the query parameters
    $studentName = $request->query('student');

    // Validate the student name parameter
    if (empty($studentName)) {
        return abort(400, 'Student name is required');
    }

    // Fetch the student based on the name
    $student = $parent->student->where('name', $studentName)->first();

    if (!$student) {
        return abort(404, 'Student not found');
    }

    // Fetch courses that the specific student is enrolled in
    $courses = $student->enrolledCourses; // Using the defined relationship

    // Return the Inertia view with student and courses data
    return Inertia::render('Family/Courses', [
        'student' => $student,
        'courses' => $courses,
    ]);
}
 



public function showResults($courseId)
{
    $parent = auth()->user(); // Get the authenticated user (family)

    // Get student IDs associated with the family
    $studentIds = $parent->student->pluck('id');

    // Fetch the course by ID
    $course = Course::find($courseId);

    if (!$course) {
        abort(404, 'Course not found.');
    }

    // Fetch assessment records with related weight and grade information
    $results = DB::table('assessment_record')
        ->join('users', 'assessment_record.student_id', '=', 'users.id')
        ->join('assessment_weight', 'assessment_record.assessment_weight_id', '=', 'assessment_weight.id')
        ->leftJoin('grades', function ($join) use ($studentIds, $courseId) {
            $join->on('assessment_record.id', '=', 'grades.assessment_record_id')
                 ->whereIn('grades.student_id', $studentIds) // Join with the student IDs from the family
                 ->where('grades.course_id', $courseId) // Match with the course ID
                 ->where('grades.locked', true);
        })
        ->whereIn('assessment_record.student_id', $studentIds)
        ->where('assessment_record.course_id', $course->id)
        ->select(
            'users.id as student_id',
            'users.name as student_name',
            'assessment_record.id',
            'assessment_record.score',
            'assessment_weight.assessment_type',
            'assessment_weight.weight',
            'grades.grade' // Select grade from grades table
        )
        ->get()
        ->groupBy('student_id') // Group results by student ID
        ->map(function ($records, $studentId) {
            return [
                'student_id' => $studentId,
                'student_name' => $records->first()->student_name,
                'assessment_records' => $records->map(function ($record) {
                    return [
                        'id' => $record->id,
                        'assessment_weight_type' => $record->assessment_type,
                        'assessment_weight_weight' => $record->weight,
                        'score' => $record->score,
                        'grade' => $record->grade ?? ' ', // Use 'N/A' if no grade is available
                    ];
                }),
                'final_score' => $records->sum('score'),
                'grade' => $records->first()->grade ?? ' ', // Default if no grade is available
            ];
        })
        ->values(); // Convert to a plain array

    return Inertia::render('Family/Results', [
        'course' => $course,
        'results' => $results,
    ]);
}



// public function showResults($courseId)
// {
//     $parent = auth()->user(); // Get the authenticated user (family)

//     // Get student IDs associated with the family
//     $studentIds = $parent->student->pluck('id');

//     // Fetch the course by ID
//     $course = Course::find($courseId);

//     if (!$course) {
//         abort(404, 'Course not found.');
//     }

//     // Fetch assessment records with related weight and grade information
//     $results = DB::table('assessment_record')
//         ->join('users', 'assessment_record.student_id', '=', 'users.id')
//         ->join('assessment_weight', 'assessment_record.assessment_weight_id', '=', 'assessment_weight.id')
//         ->leftJoin('grades', function ($join) use ($studentIds, $courseId) {
//             $join->on('assessment_record.id', '=', 'grades.assessment_record_id')
//                  ->whereIn('grades.student_id', $studentIds) // Join with the student IDs from the family
//                  ->where('grades.course_id', $courseId) // Match with the course ID
//                  ->where('grades.locked', true);
//         })
//         ->whereIn('assessment_record.student_id', $studentIds)
//         ->where('assessment_record.course_id', $course->id)
//         ->select(
//             'users.id as student_id',
//             'users.name as student_name',
//             'assessment_record.id as assessment_record_id',
//             'assessment_record.score',
//             'assessment_weight.assessment_type',
//             'assessment_weight.weight',
//             'grades.grade' // Select grade from grades table
//         )
//         ->get()
//         ->groupBy('student_id') // Group results by student ID
//         ->map(function ($records, $studentId) {
//             return [
//                 'student_id' => $studentId,
//                 'student_name' => $records->first()->student_name,
//                 'assessment_records' => $records->map(function ($record) {
//                     return [
//                         'id' => $record->assessment_record_id, // Correctly reference the ID
//                         'assessment_weight_type' => $record->assessment_type,
//                         'assessment_weight_weight' => $record->weight,
//                         'score' => $record->score,
//                         'grade' => $record->grade ?? 'N/A', // Use 'N/A' if no grade is available
//                     ];
//                 }),
//                 'final_score' => $records->sum('score'),
//                 'grade' => $records->whereNotNull('grade')->isNotEmpty() ? $records->first()->grade : 'N/A', // Default to 'N/A' if no grade exists
//             ];
//         })
//         ->values(); // Convert to a plain array

//     return Inertia::render('Family/Results', [
//         'course' => $course,
//         'results' => $results,
//     ]);
// }



}

