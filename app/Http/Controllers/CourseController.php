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
    // dd($request->all());

        // Find the course by ID
            $request->validate([
            'course_id' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            // 'description' => 'nullable|string',
        ]);
        // Check if the course exists
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
    
        // Validate and update the course
        $request->validate([
            'course_id' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',

            // Add other validation rules as needed
        ]);
    
        $course->course_id = $request->input('course_id');
        $course->course_name = $request->input('course_name');

        $course->save();
    
        return response()->json(['message' => 'Course updated successfully!']);
    }
    
    public function destroy(Course $course)
    {
        $course->delete();

        return redirect()->route('courses.index');
    }



    public function assign(Course $course)
    {
        $teachers = User::where('role', User::TEACHER)->get();
        return Inertia::render('SuperAdmin/AssignTeachers', 
        ['course' => $course,
        'teachers' => $teachers,
    ]);


    }

//     public function assignTeachers(Request $request, Course $course)
//     {

//     // Dump request data
//     // dd($request->all());

//     // Validate the input email
//     $request->validate([
//         'teacher_email' => 'required|email', 
//         'course_id' => 'required|integer|exists:courses,id',
//     ]);

//     // Extract email from request
//     $email = trim($request->input('teacher_email'));

//     // Debugging: Check if email is correctly retrieved
//     // dd('Received Email:', $email);

//     // Fetch teacher ID based on the email
//     $teacherId  = User::where('email', $email)
//                      ->where('role', User::TEACHER)
//                      ->value('id'); // Use value to get a single ID

//      if (!$teacherId) {
//         // Handle the case where the teacher does not exist
//         return redirect()->route('courses.index')->with('error', 'Teacher not found or is not a teacher!');
//     }

//     // Debugging: Check if the teacher ID is correctly retrieved
//     // dd('Teacher ID:', $teacherId);

//     // Attach the teacher to the course without removing existing teachers
//     $course->teachers()->syncWithoutDetaching([$teacherId]);

//     $courseTeachers = $course->teachers()->pluck('users.id'); // Retrieve IDs of attached teachers
//     // dd('Attached Teachers:', $courseTeachers);

//     return redirect()->route('courses.teachers', ['course' => $course->id])->with('success', 'Teacher assigned to course successfully!');

// }

public function assignTeachers(Request $request, Course $course)
{
    // Validate the input teacher IDs and course ID
    $request->validate([
        'teacher_ids' => 'required|array', // Validate that teacher_ids is an array
        'teacher_ids.*' => 'integer|exists:users,id', // Each ID must be an integer and exist in the users table
        'course_id' => 'required|integer|exists:courses,id',
    ]);

    // Extract teacher IDs from request
    $teacherIds = $request->input('teacher_ids');

    // Attach the teachers to the course without removing existing teachers
    $course->teachers()->syncWithoutDetaching($teacherIds);

    return redirect()->route('courses.teachers', ['course' => $course->id])
                     ->with('success', 'Teachers assigned to course successfully!');
}



    
     public function unassign(Request $request, Course $course)
    {
        $validated = $request->validate([
            'teacher_id' => 'required|exists:users,id',
            'course_id'  => 'required|exists:courses,id',
        ]);

        // Find the teacher and detach the course
        $teacher = User::find($validated['teacher_id']);
        $teacher->courses()->detach($validated['course_id']);

        // Return a JSON response
        return response()->json(['message' => 'Teacher unassigned successfully.']);
    // return redirect()->route('courses.teachers', ['course' => $course->id])->with( 'Teacher unassigned successfully.');

    }

        // Method to display the list of teachers for a specific course
        public function showAssignedTeachers(Course $course)
        {
            // Eager load teachers to avoid N+1 problem
            $teachers = $course->teachers()->get(); // Get all teachers associated with the course
    
            // Pass teachers data to Inertia view
            return Inertia::render('SuperAdmin/AssignedTeachersList', [
                'course' => $course,
                'teachers' => $teachers
            ]);
        }
}
