<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return Inertia::render('SuperAdmin/CourseList', ['courses' => $courses]);
    }

    public function create()
    {
        return Inertia::render('SuperAdmin/Courses');
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            // 'description' => 'nullable|string',
        ]);

        Course::create($request->all());

        return redirect()->route('courses.index');
    }

    public function edit(Course $course)
    {
        return Inertia::render('SuperAdmin/EditCourse', ['course' => $course]);
    }

    public function update(Request $request, Course $course)
    {
        $request->validate([
            'course_id' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            // 'description' => 'nullable|string',
        ]);

        $course->update($request->all());

        return redirect()->route('courses.index');
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return redirect()->route('courses.index');
    }


    public function assign(Request $request, Course $course)
    {

    // Dump request data
    // dd($request->all());

    // Validate the input email
    $request->validate([
        'teacher_email' => 'required|email', 
        'course_id' => 'required|integer|exists:courses,id',
    ]);

    // Extract email from request
    $email = trim($request->input('teacher_email'));

    // Debugging: Check if email is correctly retrieved
    // dd('Received Email:', $email);

    // Fetch teacher ID based on the email
    $teacherId  = User::where('email', $email)
                     ->where('role', User::TEACHER)
                     ->value('id'); // Use value to get a single ID

     if (!$teacherId) {
        // Handle the case where the teacher does not exist
        return redirect()->route('courses.index')->with('error', 'Teacher not found or is not a teacher!');
    }

    // Debugging: Check if the teacher ID is correctly retrieved
    // dd('Teacher ID:', $teacherId);

    // Attach the teacher to the course without removing existing teachers
    $course->teachers()->syncWithoutDetaching([$teacherId]);

    $courseTeachers = $course->teachers()->pluck('users.id'); // Retrieve IDs of attached teachers
    // dd('Attached Teachers:', $courseTeachers);

    return redirect()->route('courses.index')->with('success', 'Teacher assigned to course successfully!');}

    
    public function unassign(Request $request, Course $course)
    {
        // Validate the input teacher IDs
        $request->validate([
            'teacher_ids' => 'required|array|exists:users,id',
        ]);

        // Detach teachers from the course
        $course->teachers()->detach($request->teacher_ids);

        return redirect()->route('courses.index')->with('success', 'Teachers removed from course successfully!');
    }

    public function showAssignmentPage(Course $course)
    {
        // Fetch all teachers (or filter based on your application's logic)
        $teachers = User::where('role', 'teacher')->get();

        return Inertia::render('SuperAdmin/AssignTeachers', [
            'course' => $course,
            'teachers' => $teachers,
        ]);
    }
}
