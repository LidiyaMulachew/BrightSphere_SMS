<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class StudentListController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Inertia\Response
     */

     public function index(Request $request)
     {
         $user = $request->user();
     
         if ($user->isTeacher()) {
             // Fetch student IDs registered by the teacher
             $studentIds = Course::where('teacher_id', $user->id)
                 ->pluck('student_id'); // Assuming the column name is 'student_id'
     
             // Fetch user details for the students with those IDs
             $users = User::whereIn('id', $studentIds)
                 ->where('role', User::STUDENT) // Ensure to filter by role if needed
                 ->get(['name', 'email', 'role']);
        } else {
                    // Return a custom message if the user is not a teacher
             return response()->json([
                        'message' => 'You are not authorized to view the students list.'
            ], 403); // 403 Forbidden HTTP status code
        }
     
         return Inertia::render('Teacher/List', ['studentsList' => $users]);
     }
     


    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'required|in:teacher,student,parent',
            // 'teacher_id' => $request->user()->isuper_admin ? 'nullable' : 'required|exists:users,id',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'role' => $validatedData['role'],
            // 'teacher_id' => $validatedData['teacher_id'] ?? null,
        ]);

        return redirect()->route('users.index');
    }

    /**
     * Display the specified user.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('SuperAdmin/Show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('SuperAdmin/Edit', ['user' => $user]);
    }

    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('users.index');
    }
}
