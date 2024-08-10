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


        // Method to fetch all courses the student is enrolled in
        public function getCoursesByStudentId(User $user)
        {
            // $users = Auth::user();
    
            // Fetch courses that the user is enrolled in
            $courses = $user->enrolledCourses()->with('student_id')->get();
            // dd('courses', $courses);
            return Inertia::render('Student/Courses', [
                'courses' => $courses,
            ]);
        }
           

        public function material(Course $course)
        {
            // Fetch the materials for the given course
            $materials = $course->materials()->get();
    
            return Inertia::render('Student/MaterialList', [
                'course' => $course,
                'materials' => $materials,
            ]);
        }


   
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
   
    
    // public function showMaterials(Course $course)
    // {
    //     $user = auth()->user();
    //     $isEnrolled = $user->enrolledCourses()->where('course_id', $course->id)->exists();
    //     $materials = $course->materials;

    //     return Inertia::render('Student/MaterialList', [
    //         'course' => $course,
    //         'isEnrolled' => $isEnrolled,
    //         'materials' => $materials,
    //     ]);
    // }

}
