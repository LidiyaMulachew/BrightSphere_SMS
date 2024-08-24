<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
use App\Models\Material;
use App\Models\Course;
use App\Models\AssessmentRecord;

use App\Models\Grade;
use App\Models\CourseStudent;
use App\Models\CourseTeacher;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
class EnrollToCoursesController extends Controller
{
    public function index(){
        return inertia::render('Student/CourseEnrollment');
    }
    public function getCourses()
    {
        // Fetch all courses
        $courses = Course::all(); 
        return response()->json($courses);
    }


    // public function getTeachersByCourse($courseId)
    // {
       
    //     $teachers = User::where('role', User::TEACHER)->get(); 
    //      // $teachers = User::all();
    //     return response()->json($teachers);
    // }

    public function getTeachersByCourse($courseId)
    {
        // Fetch teachers with their assigned courses
        $teachers = User::where('role', User::TEACHER)
                         ->with(['courses' => function($query) use ($courseId) {
                             $query->where('courses.id', $courseId);
                         }])
                         ->get()
                         ->map(function ($teacher) use ($courseId) {
                             // Find the course name from the teacher's courses
                             $course = $teacher->courses->firstWhere('id', $courseId);
    
                             return [
                                 'id' => $teacher->id,
                                 'name' => $teacher->name,
                                 'course_name' => $course ? $course->course_name : 'N/A',
                                 'course_id' => $courseId,
                             ];
                         });
    
        return response()->json($teachers);
    }
    

    
    public function enroll(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'teacher_id' => 'required|exists:users,id',
        ]);

        $userId = Auth::id(); // Get the authenticated user's ID

        // Find the course_teacher_id based on course_id and teacher_id
        $courseTeacher = CourseTeacher::where('course_id', $request->input('course_id'))
            ->where('teacher_id', $request->input('teacher_id'))
            ->first();

        if (!$courseTeacher) {
            return response()->json(['message' => 'Invalid course or teacher selection.'], 400);
        }

        // Create a new enrollment record
        CourseStudent::create([
            'student_id' => $userId,
            'course_teacher_id' => $courseTeacher->id,
        ]);

        return response()->json(['message' => 'Enrollment successful!']);
    }


        public function getCoursesByStudentId()
    {
        $user = Auth::user(); // Get the authenticated user
    
        // Fetch courses that the user is enrolled in
        $courses = $user->enrolledCourses; // Ensure this is a defined relationship method in your User model

        // dd($courses); 

        return Inertia::render('Student/Courses', [
            'courses' => $courses,
        ]);
    }

       
        public function material(Course $course)
        {
            // Assuming the Course model has a relationship to materials
            $materials = $course->materials; 
        
            return Inertia::render('Student/MaterialList', [
                'course' => $course,
                'materials' => $materials,
            ]);
        }

   
    public function assessment()
    {
        $user = Auth::user(); 
    
        // Fetch courses that the user is enrolled in
        $courses = $user->enrolledCourses; 

        return Inertia::render('Student/Assessment', [
            'courses' => $courses,
        ]);
    }


    // public function fetchStudentResults($courseId)
    // {
    //     $user = auth()->user(); // Get the authenticated user
    
    //     // Fetch the course with its assessment records for the student
    //     $course = Course::with(['assessmentRecords' => function($query) use ($user) {
    //         $query->where('student_id', $user->id);
    //     }, 'assessmentRecords.assessmentWeight']) // Ensure assessmentWeight relationship is loaded
    //     ->find($courseId);
    
    //     if (!$course) {
    //         abort(404, 'Course not found');
    //     }
    
    //     // Fetch the assessment records
    //     $assessmentRecords = $course->assessmentRecords;
    
    //     // Compute the final score
    //     $finalScore = $assessmentRecords->sum('score');
    
    //     // Assume the grade is part of the assessment records or calculated separately
    //     // Find the grade from the assessment records if it exists
    //     $grade = $assessmentRecords->firstWhere('student_id', $user->id)->grade ?? ' ';
    
    //     // Prepare the response with final score and grade
    //     return Inertia::render('Student/CourseResult', [
    //         'course' => [
    //             'id' => $course->id,
    //             'course_name' => $course->course_name,
    //             'assessment_records' => $assessmentRecords->map(function ($record) {
    //                 return [
    //                     'id' => $record->id,
    //                     'assessment_weight_type' => $record->assessmentWeight->assessment_type, // Ensure correct relationship and field names
    //                     'assessment_weight_weight' => $record->assessmentWeight->weight, // Ensure correct relationship and field names
    //                     'score' => $record->score,
    //                 ];
    //             }),
    //             'final_score' => $finalScore, // Include final score in the response
    //             'grade' => $grade, // Include grade in the response
    //         ],
    //     ]);
    // }
    
    public function fetchStudentResults($courseId)
    {
        $user = auth()->user(); 
    
        // Fetch the assessment records for the student in the specified course
        $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
            ->where('student_id', $user->id)
            ->with(['assessmentWeight']) // Ensure assessmentWeight relationship is loaded
            ->get();
    
        if ($assessmentRecords->isEmpty()) {
            abort(404, 'No assessment records found for this course.');
        }
    
        // Compute the final score
        $finalScore = $assessmentRecords->sum('score');
    
        // Find the grade from the grades table using assessment_record_id
        $grade = Grade::whereIn('assessment_record_id', $assessmentRecords->pluck('id'))
            ->where('locked', true) // Ensure grade is locked before showing
            ->first();
    
        $gradeValue = $grade ? $grade->grade : ' '; // Default to 'N/A' if no grade exists
    
        // Prepare the response with final score and grade
        return Inertia::render('Student/CourseResult', [
            'course' => [
                'id' => $courseId,
                'course_name' => $assessmentRecords->first()->course->course_name, // Assuming relationship to course exists
                'assessment_records' => $assessmentRecords->map(function ($record) {
                    return [
                        'id' => $record->id,
                        'assessment_weight_type' => $record->assessmentWeight->assessment_type, // Ensure correct relationship and field names
                        'assessment_weight_weight' => $record->assessmentWeight->weight, // Ensure correct relationship and field names
                        'score' => $record->score,
                    ];
                }),
                'final_score' => $finalScore, // Include final score in the response
                'grade' => $gradeValue, // Include grade in the response
            ],
        ]);
    }
        



}
