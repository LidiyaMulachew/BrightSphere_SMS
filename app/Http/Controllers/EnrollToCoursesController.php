<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
use App\Models\Material;
use App\Models\Course;
use App\Models\CourseStudent;
use App\Models\CourseTeacher;
use Inertia\Inertia;

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


    //     // Method to fetch all courses the student is enrolled in
    //     public function getEnrolledCourses()
    //     {
    //         $user = Auth::user();
    
    //         // Ensure the user is authenticated
    //         if (!$user) {
    //             return redirect()->route('login');
    //         }
    
    //         // Fetch courses that the user is enrolled in
    //         $courses = $user->enrolledCourses()->get();
    //         // $courseTeacher = CourseTeacher::where('course_id', $request->input('course_id'))
    
    //         return Inertia::render('Student/MaterialList', [
    //             'courses' => $courses,
    //         ]);
    //     }


    // public function material($course_id)
    // {
    //     $user = Auth::user();

    //     // Ensure the user is authenticated
    //     if (!$user) {
    //         return redirect()->route('login');
    //     }

    //     // Check if the user is enrolled in the course
    //     $isEnrolled = $user->enrolledCourses()->where('courses.id', $course_id)->exists();

    //     if (!$isEnrolled) {
    //         return redirect()->back()->with('error', 'You are not enrolled in this course.');
    //     }

    //     // Fetch materials for the specified course
    //     $materials = Material::where('course_id', $course_id)->get();

    //     return Inertia::render('Student/MaterialList', [
    //         'materials' => $materials,
    //     ]);
    // }


   
    public function showAllCoursesWithMaterials()
    {
        // Fetch all materials
        $materials = Material::all();

        return Inertia::render('Student/MaterialList', [
            'materials' => $materials->map(function ($material) {
                return [
                    'id' => $material->id,
                    'title' => $material->title,
                    'description' => $material->description,
                    'file_path' => $material->file_path,
                ];
            }),
        ]);
    }

}
