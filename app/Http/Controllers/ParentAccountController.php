<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
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
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'role' => ['required', 'in:' . implode(',', [
                 User::FAMILY
           ])],            
        ]);

        // Create parent account
        $parent = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            // 'student_id' => ($request->role == User::STUDENT) ? $request->student_id : null,
            'student_id' => ($request->role == User::FAMILY) ? $request->student_id : null,
            'teacher_id' => ( $request->role == User::FAMILY) ? Auth::id() : null,

        ]);

        return redirect()->route('studentslist.index'); 
    }
}
