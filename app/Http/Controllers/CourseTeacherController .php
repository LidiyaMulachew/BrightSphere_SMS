<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\User;

use Illuminate\Http\Request;

class CourseTeacherController extends Controller
{
    public function assign(Request $request, Course $course)
    {
        $request->validate([
            'teacher_ids' => 'required|array|exists:users,id',
            // 'teacher_ids' => 'required|array|exists:teacher_student,teacher_id',

        ]);

        $course->teachers()->sync($request->teacher_ids);

        return redirect()->route('courses.index')->with('success', 'Teachers assigned to course successfully!');
    }

    public function unassign(Request $request, Course $course)
    {
        $request->validate([
            'teacher_ids' => 'required|array|exists:users,id',
        ]);

        $course->teachers()->detach($request->teacher_ids);

        return redirect()->route('courses.index')->with('success', 'Teachers removed from course successfully!');
    }

    public function showAssignmentPage(Course $course)
    {
        // Fetch all teachers (or any filtering if needed)
        $teachers = User::where('role', 'teacher')->get(); 

        return Inertia::render('SuperAdmin/AssignTeachers', [
            'course' => $course,
            'teachers' => $teachers,
        ]);
    }
}
