<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\StudentParent;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class ParentAccountController extends Controller
{
    /**
     * Show the form for creating a parent account.
     *
     * @param  int  $courseId
     * @return \Inertia\Response
     */
    public function create($courseId): Response
    {
        $course = Course::findOrFail($courseId);
        $studentId = $course->student_id; // Assuming this is correct

        return Inertia::render('Teacher/CreateParentAccount', [
            'studentId' => $studentId,
            'courseId' => $courseId, // Pass courseId for later use
        ]);
    }

    /**
     * Store a newly created parent account in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'role' => ['required', 'in:' . implode(',', [User::FAMILY])],
            'student_id' => 'required|exists:course,student_id', // Ensure student_id is valid
        ]);

        // Create the parent account
        $parent = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        // Create the StudentParent relationship
        StudentParent::create([
            'parent_id' => $parent->id,
            'student_id' => $request->student_id,
        ]);

        return redirect()->route('studentslist.index');
    }
}


