<?php

namespace App\Http\Controllers;

use App\Models\AssignmentSubmission;
use Illuminate\Http\Request;
use App\Models\Material;
use App\Models\Submission;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AssignmentSubmissionController extends Controller
{
    public function index(Material $material)
    {
        return Inertia::render('Student/AssignmentSubmission', [
            'material' => $material
        ]);
    }

    public function store(Request $request )
    {
        $request->validate([
            'material_id' => 'required|exists:materials,id',
            'file' => 'required|file|mimes:pdf,doc,docx'
        ]);

        $filePath = $request->file('file')->store('public/materials');

        AssignmentSubmission::create([
            'material_id' => $request->material_id,
            'student_id' => auth()->id(),
            'file_path' => $filePath
        ]);
        // return redirect()->route('submissions.index');

        return redirect()->back()->with('success', 'Assignment submitted successfully!');
    }


    public function submissionsList(Material $material)
    {
        $submissions = AssignmentSubmission::where('material_id', $material->id)
            ->with('student') // Eager load student information
            ->get();

        return Inertia::render('Teacher/SubmissionsList', [
            'material' => $material,
            'submissions' => $submissions
        ]);
    }
}

