<?php

namespace App\Http\Controllers;

use App\Models\TeacherStudent;
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
     * @param  int  $studentId
     * @return \Inertia\Response
     */
    public function create($studentId): Response
    {
        // Fetch the course related to the studentId to validate the studentId
        $course = TeacherStudent::where('student_id', $studentId)->firstOrFail();

        return Inertia::render('Teacher/CreateParentAccount', [
            'studentId' => $studentId, // Pass studentId to the component
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
            'email' => 'required|email',
            'password' => 'required|string|min:8|confirmed',
            'role' => ['required', 'in:' . implode(',', [User::FAMILY])],
            'student_id' => 'required|exists:student_teacher,student_id', // Ensure student_id is valid
        ]);

        // Check if a parent with the provided email already exists
        $parent = User::where('email', $request->email)->first();

        if ($parent) {
            // Parent exists, update existing parent's data if needed
            // Ensure the parent is associated with the student if necessary
            if (!StudentParent::where('parent_id', $parent->id)
                ->where('student_id', $request->student_id)
                ->exists()) {
                // Create the StudentParent relationship if it does not exist
                StudentParent::create([
                    'parent_id' => $parent->id,
                    'student_id' => $request->student_id,
                ]);
            }
        } else {
            // Parent does not exist, create a new parent account
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
        }

        return redirect()->route('studentslist.index'); 
    }


        /**
     * Show the student information with their associated parents.
     *
     * @param  int  $studentId
     * @return \Inertia\Response
     */
    public function show($studentId)
    {
        // Fetch the student with their associated parents
        $student = User::with('parent')->findOrFail($studentId);

        // Prepare the data for the view
        $studentData = [
            'student' => [
                'name' => $student->name,
                'email' => $student->email,
            ],
            'parent' => $student->parent->map(function ($parent) {
                return [
                    'name' => $parent->name,
                    'email' => $parent->email,
                ];
            }),
        ];
       

        return Inertia::render('Teacher/Parent', $studentData);
    }
}

