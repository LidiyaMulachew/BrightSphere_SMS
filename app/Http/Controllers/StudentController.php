<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        
        return view('students.index', compact('students'));
    }
    
    public function create()
    {
        return view('students.create');
        //return "works"; 
   }

public function store(Request $request)
{
    $data = $request->all();

    Student::create($data);

    return redirect()->route('students.index')
        ->with('success', 'Student created successfully.');
}

    
    public function edit($id)
    {
        return view('students.edit', compact('student'));
    }
    
    public function update(Request $request, Student $student)
    {
        $student->update($request->all());
        
        return redirect()->route('students.index');
    }
    
    public function destroy(Student $student)
    {
        $student->delete();
        
        return redirect()->route('students.index');
    }
}