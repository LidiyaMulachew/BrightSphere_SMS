<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class ParentAccountController extends Controller
{
    /**
     * Show the form for creating a parent account.
     *
     * @param  int  $studentId
     * @return \Inertia\Response
     */
    // public function index(Request $request)
    // {
    //     $parentsAccount = $request->user();
    //     if ($parentsAccount->isTeacher()) {
    //         // Fetch students and parents associated with the current teacher
    //         $users = User::where('teacher_id', $parentsAccount->id)
    //             ->whereIn('role', [User::STUDENT])
    //             ->get();
    //     } else {
    //         // Default: Fetch all users
    //         $users = User::all();
    //     }
    //     return Inertia::render('Teacher/CreateParentAccount', ['parentsAccount' => $users]);
        
    // }
    public function create($studentId)
    {
        $student = User::findOrFail($studentId);

        return Inertia::render('Teacher/CreateParentAccount', [
            'studentId' => $student->id,
        ]);
    }



    /**
     * Store a newly created parent account in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',// 'confirmed' rule ensures password_confirmation field matches
            'role' => 'required|in:parent',
            'student_id' => 'required|exists:users,id',
            'teacher_id' => 'required|exists:teachers,id', // Ensure teacher_id exists and is required        ]);
        ]);
        // Create parent account
        $parent = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'role' => $validatedData['role'],
            'student_id' => $validatedData['student_id'],
            'teacher_id' => $request->teacher_id,
        ]);

        return redirect()->route('studentslist.index'); // Adjust redirection as needed
    }
}
