<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomePageController extends Controller
{
    public function home()
    {
        return Inertia::render('Welcome'); // This should match the name of your React component
    }
    public function facultyMembers()
    {
        return Inertia::render('FacultyMembers'); // This should match the name of your React component
    }
    public function departments()
    {
        return Inertia::render('Departments'); // This should match the name of your React component
    }    public function researchCenter()
    {
        return Inertia::render('ResearchCenter'); // This should match the name of your React component
    }    public function campusFacility()
    {
        return Inertia::render('CampusFacility'); // This should match the name of your React component
    }
}
