<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Material;
use Inertia\Inertia;

class MaterialController extends Controller
{
    public function index()
    {
        return Inertia::render('Teacher/MaterialUpload'); 
        // return response()->json($users); 
    }

    public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'file' => 'required|file|max:102400', // max 10GB
    ]);

    $file = $request->file('file');
    $path = $file->store('public/materials');

    // Retrieve authenticated user
    $user = Auth::user();

    // Ensure $user is an instance of App\Models\User and has materials() method available
    if ($user instanceof \App\Models\User) {
        // Create new Material instance
        $material = new Material([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'file_path' => $path,
        ]);

        // Save the material using the user's materials relationship
        $user->materials()->save($material);

        // return redirect()->back()->with('success', 'File uploaded successfully.');
                
                return Redirect::route('materials.show')
                ->with('success', 'File uploaded successfully.');
    } else {
        // Handle case where $user is not an instance of App\Models\User
        return redirect()->back()->with('error', 'Unauthorized access.');
    }
}


public function show(Material $material)
{
    return Inertia::render('Teacher/ShowMaterial' );
        // return response()->json($material); 

//     return Redirect::route('materials.show', ['material' => $material->id])
//     ->with('success', 'File uploaded successfully.');
}


// Show the form for editing the specified material.
public function edit(Material $material)
{
    

    return Inertia::render('Teacher/EditMaterial', [
        'material' => $material,
    ]);
}

// Update the specified material in storage.
public function update(Request $request, Material $material)
{


    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'file' => 'nullable|file|max:102400', // max 10MB
    ]);

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

        return redirect()->back()->with('success', 'Material deleted successfully.');
    }
}

