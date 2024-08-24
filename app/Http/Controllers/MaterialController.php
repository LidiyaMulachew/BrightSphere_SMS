<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Material;
use App\Models\CourseTeacher;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{
    public function index()
    {
        // Retrieve authenticated user
        $user = Auth::user();

        // Ensure $user is an instance of App\Models\User and has materials() method available
        if ($user instanceof \App\Models\User) {
            // Fetch materials associated with the authenticated user
            $materials = $user->materials()->get();

            return Inertia::render('Teacher/MaterialList', [
                'materials' => $materials,
            ]);
        } else {
            // Handle case where $user is not an instance of App\Models\User
            return redirect()->back()->with('error', 'Unauthorized access.');
        }
    }
    // public function index()
    // {
    //     // Assuming you want to fetch all materials here
    //     $materials = Material::all(); // Fetch all materials from the database

    //     return Inertia::render('Teacher/MaterialList', [
    //         'materials' => $materials,
    //     ]);
    // }
    public function create()
    {
        return Inertia::render('Teacher/MaterialUpload');
    }

    public function getCourses()
    {
        // Fetch all courses
        // $courses = Course::all(); 
        // return response()->json($courses);

        $teacher = auth()->user(); 
        // Get the courses assigned to the teacher
        $courses = $teacher->courses;
        return response()->json($courses);

    }
  

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:course_teacher,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            // 'file' => 'required|file|max:102400', // max 10GB
            'file' => 'required|file|mimes:pdf,doc,docx,ppt,pptx,zip|max:102400', // Adjust file validation as needed
        ]);

        $file = $request->file('file');
        $path = $file->store('public/materials');

        // Retrieve authenticated user
        $user = Auth::user();

        // Ensure $user is an instance of App\Models\User and has materials() method available
        if ($user instanceof \App\Models\User) {
            // Create new Material instance
            $material = new Material([
                'course_id' => $request->input('course_id'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'file_path' => $path,
            ]);

            // Save the material using the user's materials relationship
            $user->materials()->save($material);

            return Redirect::route('materials.index')
                ->with('success', 'File uploaded successfully.');
        } else {
            // Handle case where $user is not an instance of App\Models\User
            return redirect()->back()->with('error', 'Unauthorized access.');
        }
    }


    // Show the form for editing the specified material.
    public function edit($id)
    {


        $material = Material::where('id', $id)->first();

        return Inertia::render('Teacher/EditMaterial', [
            'material' => $material,
        ]);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'file' => 'nullable|file|max:102400', // max 100MB
        ]);

        // Find the material by id
        $material = Material::findOrFail($id);

        // Update material attributes
        $material->title = $request->input('title');
        $material->description = $request->input('description');

        if ($request->hasFile('file')) {
            // Handle file upload if a new file is provided
            $file = $request->file('file');
            $path = $file->store('public/materials');
            Storage::delete($material->file_path); // Delete old file
            $material->file_path = $path;
        }

        $material->save();

        return redirect()->route('materials.index')->with('success', 'Material updated successfully.');
    }


    // Remove the specified material from storage.
    public function destroy(Material $material)
    {
        // Delete the file associated with the material
        Storage::delete($material->file_path);

        // Delete the material record
        $material->delete();

        // Redirect back with success message
        return redirect()->route('materials.index')->with('success', 'Material deleted successfully.');

        // return redirect()->back()->with('success', 'Material deleted successfully.');
    }
   
}
