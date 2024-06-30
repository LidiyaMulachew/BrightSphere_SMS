<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display the teacher dashboard.
     *
     * @return \Inertia\Response
     */
    public function dashboard()
    {
        return Inertia::render('Teacher/Dashboard');
    }

    /**
     * Display the list of students.
     *
     * @return \Inertia\Response
     */
    public function students()
    {
        return Inertia::render('Teacher/Students');
    }
}