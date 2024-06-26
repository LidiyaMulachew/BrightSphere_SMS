<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;

class TeacherController extends Controller
{
    
    public function index()
    {
        $teachers = Teacher::all();
        return view('teachers.index', compact('teachers'));
       
    }

    public function create()
    {
        return view('teachers.create');
        //return "works"; 

    }

    public function store(Request $request)
    {
        $data = $request->all();
    
        Teacher::create($data);
    
        return redirect()->route('teachers.index')
            ->with('success', 'Teacher created successfully.');
    }

    
    public function show($id)
    {
        $teachers = Teacher::findOrFail($id);
        return view('teachers.show', compact('teachers'));
    }

   
    public function edit($id)
    {
        $teachers = Teacher::findOrFail($id);
        return view('teachers.edit', compact('teachers'));
    }

    
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'subject' => 'required',
        ]);

        $teachers = Teacher::findOrFail($id);
        $teachers->update($validatedData);

        return redirect()->route('teachers.index')
            ->with('success', 'Teacher updated successfully.');
    }

   
    public function destroy($id)
    {
        $teachers = Teacher::findOrFail($id);
        $teachers->delete();

        return redirect()->route('teachers.index')
            ->with('success', 'Teacher deleted successfully.');
    }
}