<?php

namespace App\Http\Controllers;

use App\Models\Course;
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
}
