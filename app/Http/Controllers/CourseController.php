<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; // Import DB facade

class CourseController extends Controller
{
    /**
     * Fetch and show all courses.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = DB::table('course')->get();
        return response()->json($courses);
        
    }
 

    /**
     * Fetch and show a specific course.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = DB::table('course')->find($id);
        // return view('courses.show', compact('course'));
    }
}
