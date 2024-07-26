<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Course;
use App\Models\StudentParent;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredStudentController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/RegisterStudent');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'in:' . implode(',', [
                 User::STUDENT

            ])],
        ]);

        // give id for student_id and teacher_id in course table
        $student = User::create([

            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),

            'role' => $request['role'],
        ]);

        $course= Course::create([
            'student_id'=> $student->id,
            'teacher_id'=> Auth::id(),
        ]);

 
        return redirect(route('teacher.dashboard'));
    }
}
