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

    // public function getTeachersByCourse($courseId)
    // {
    //     // Fetch teachers with their assigned courses
    //     $teachers = User::where('role', User::TEACHER)
    //                      ->with(['courses' => function($query) use ($courseId) {
    //                          $query->where('courses.id', $courseId);
    //                      }])
    //                      ->get()
    //                      ->map(function ($teacher) use ($courseId) {
    //                          // Find the course name from the teacher's courses
    //                          $course = $teacher->courses->firstWhere('id', $courseId);
    
    //                          return [
    //                              'id' => $teacher->id,
    //                              'name' => $teacher->name,
    //                              'course_name' => $course ? $course->course_name : 'N/A',
    //                              'course_id' => $courseId,
    //                          ];
    //                      });
    
    //     return response()->json($teachers);
    // }
    public function getTeachersByCourse($courseId)
{
    // Fetch teachers directly assigned to the specified course
    $teachers = User::where('role', User::TEACHER)
        ->whereHas('courses', function($query) use ($courseId) {
            $query->where('courses.id', $courseId);
        })
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


    
    // public function enroll(Request $request)
    // {
    //     // dd($request->all());
    //     $request->validate([
    //         'course_id' => 'required|exists:courses,id',
    //         'teacher_id' => 'required|exists:users,id',
    //     ]);

    //     $userId = Auth::id(); // Get the authenticated user's ID

    //     // Find the course_teacher_id based on course_id and teacher_id
        // $courseTeacher = CourseTeacher::where('course_id', $request->input('course_id'))
        //     ->where('teacher_id', $request->input('teacher_id'))
        //     ->first();

    //     if (!$courseTeacher) {
    //         return response()->json(['message' => 'Invalid course or teacher selection.'], 400);
    //     }

    //     // Create a new enrollment record
    //     CourseStudent::create([
    //         'student_id' => $userId,
    //         'course_teacher_id' => $courseTeacher->id,
    //     ]);

    //     return response()->json(['message' => 'Enrollment successful!']);
    // }
    public function enroll(Request $request)
    {
        // Validate the request to ensure course_id is provided and exists
        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);
    
        $userId = Auth::id(); // Get the authenticated user's ID
    
        // Find the course_teacher_id based on course_id
        // $courseTeacher = CourseTeacher::where('course_id', $request->input('course_id'))
        //     ->first();
        $courseTeacher = CourseTeacher::where('course_id', $request->input('course_id'))
        ->where('teacher_id', $request->input('teacher_id'))
        ->first();
    
        if (!$courseTeacher) {
            return response()->json(['message' => 'Invalid course selection.'], 400);
        }
    
        // Check if the student is already enrolled in the same course
        $existingEnrollment = CourseStudent::where('student_id', $userId)
            ->where('course_teacher_id', $courseTeacher->id)
            ->exists();
    
        if ($existingEnrollment) {
            return response()->json(['message' => 'You are already enrolled in this course.'], 400);
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
        $courses = $user->enrolledCourses; 
        // $courses = $user->enrolledCourses()->with('course')->get(); // Eager load course
        // $courses = $user->students->get(); // Use the relationship method to get enrolled courses
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



    public function fetchStudentResults($courseId)
    {
        $user = auth()->user(); 
    
            // Fetch the course details
    $course = Course::find($courseId);
    
        // Fetch the assessment records for the student in the specified course
        $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
            ->where('student_id', $user->id)
            ->with(['assessmentWeight', 'grades']) // Ensure both relationships are loaded
            ->get();


        if ($assessmentRecords->isEmpty()) {
            // Render the view with a message indicating no assessment records are found
            return Inertia::render('Student/CourseResult', [
                'course' => [
                    'id' => $courseId,
                    'course_name' => $course->course_name,
                    'assessment_records' => [],
                    'final_score' => 'N/A',
                    'grade' => 'No assessment records found for this course.'
                ],
            ]);
        }
    
        // Compute the final score
        $finalScore = $assessmentRecords->sum('score');
    
        // Fetch grades for the specific student and assessment records
        $grades = Grade::whereIn('assessment_record_id', $assessmentRecords->pluck('id'))
            ->where('student_id', $user->id)
            ->where('locked', true)
            ->get();
    
        // Prepare the response with final score and grade
        return Inertia::render('Student/CourseResult', [
            'course' => [
                'id' => $courseId,
                'course_name' => $assessmentRecords->first()->course->course_name, // Assuming course relationship exists
                'assessment_records' => $assessmentRecords->map(function ($record) use ($grades) {
                    // Find the grade related to the current assessment record and student
                    $recordGrade = $grades->firstWhere('assessment_record_id', $record->id);
    
                    return [
                        'id' => $record->id,
                        'assessment_weight_type' => $record->assessmentWeight->assessment_type,
                        'assessment_weight_weight' => $record->assessmentWeight->weight,
                        'score' => $record->score,
                        'grade' => $recordGrade ? $recordGrade->grade : ' ', // Default to ' ' if no grade exists
                    ];
                }),
                'final_score' => $finalScore,
                'grade' => $grades->isNotEmpty() ? $grades->first()->grade : ' ', // Default to ' ' if no grade exists
            ],
        ]);
    }






    // public function fetchStudentResults($courseId)
    // {
    //     $user = auth()->user();
    
    //     // Fetch the course details
    //     $course = Course::find($courseId);
    
    //     // Fetch the assessment records for the authenticated student in the specified course
    //     $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
    //         ->with(['assessmentWeight', 'grades' => function ($query) use ($user) {
    //             $query->where('student_id', $user->id); // Filter grades by authenticated student's ID
    //         }])
    //         ->get();
    
    //     if ($assessmentRecords->isEmpty()) {
    //         // Render the view with a message indicating no assessment records are found
    //         return Inertia::render('Student/CourseResult', [
    //             'course' => [
    //                 'id' => $courseId,
    //                 'course_name' => $course->course_name,
    //                 'assessment_records' => [],
    //                 'final_score' => 'N/A',
    //                 'grade' => 'No assessment records found for this course.'
    //             ],
    //         ]);
    //     }
    
    //     // Compute the final score for the authenticated user
    //     $finalScore = 0;
    
    //     // Prepare the response with final score and grades for the authenticated student's assessment records
    //     $recordsWithGrades = $assessmentRecords->map(function ($record) use (&$finalScore) {
    //         // Find the grade related to the current assessment record
    //         $recordGrade = $record->grades->first();
    
    //         // Sum the score for the final score calculation
    //         $finalScore += $record->score;
    
    //         return [
    //             'id' => $record->id,
    //             'assessment_weight_type' => $record->assessmentWeight->assessment_type,
    //             'assessment_weight_weight' => $record->assessmentWeight->weight,
    //             'score' => $record->score,
    //             'grade' => $recordGrade ? $recordGrade->grade : 'N/A', // Use 'N/A' if no grade exists
    //         ];
    //     });
    
    //     return Inertia::render('Student/CourseResult', [
    //         'course' => [
    //             'id' => $courseId,
    //             'course_name' => $course->course_name,
    //             'assessment_records' => $recordsWithGrades,
    //             'final_score' => $finalScore,
    //             'grade' => $recordsWithGrades->isNotEmpty() && $recordsWithGrades->first()['grade'] !== 'N/A'
    //                 ? $recordsWithGrades->first()['grade']
    //                 : 'N/A', // Default to 'N/A' if no grade exists
    //         ],
    //     ]);
    // }
        



}
