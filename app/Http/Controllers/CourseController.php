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
        // Validate the input emails
        $request->validate([
            'teacher_emails' => 'required|string',
        ]);

        // Extract emails from request and trim any extra spaces
        $emails = explode(',', $request->input('teacher_emails'));
        $emails = array_map('trim', $emails);

        // Fetch teacher IDs based on emails
        $teacherIds = User::whereIn('email', $emails)
                          ->where('role', 'teacher')
                          ->pluck('id');

        // Sync teacher IDs with the course
        $course->teachers()->sync($teacherIds);

        return redirect()->route('courses.index')->with('success', 'Teachers assigned to course successfully!');
    }

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
