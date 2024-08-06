<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
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

}
