<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use App\Models\AssessmentWeight;
use App\Models\AssessmentRecord;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;



class AssessmentWeightController extends Controller
{    
    // Display the courses assigned to the authenticated teacher
    public function showAssignedCourses()
    {

        $teacher = auth()->user(); 
        // Get the courses assigned to the teacher
        $courses = $teacher->courses;

        
        return Inertia::render('Teacher/AssignedCourse', [
            'courses' => $courses,
        ]);
    }
    public function index($courseId)
    {
        $course = Course::findOrFail($courseId);
        $assessmentWeights = AssessmentWeight::where('course_id', $courseId)
                                             ->where('teacher_id', Auth::id())
                                             ->get();

        return Inertia::render('Teacher/AssessmentDetail', [
            'assessmentWeights' => $assessmentWeights,
        ]);
    }
    // Show the form to create assessment weights
    public function create($courseId)
    {
        $course = Course::findOrFail($courseId);

        return Inertia::render('Teacher/CreateAssessmentWeight', [
            'course' => $course,
        ]);
    }

    // Store new assessment weights
    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'assessment_type' => 'required|string',
            'weight' => 'required|numeric|min:0|max:100',
        ]);

        AssessmentWeight::create([
            'teacher_id' => Auth::id(), 
            'course_id' => $request->course_id,
            'assessment_type' => $request->assessment_type,
            'weight' => $request->weight,
        ]);

        return redirect()->route('assessmentWeights.create', $request->course_id)
            ->with('success', 'Assessment weight created successfully!');
    }

    // Show the form to edit an assessment weight
    public function edit($id)
    {
        $assessmentWeight = AssessmentWeight::findOrFail($id);

        // Ensure the authenticated teacher owns this assessment weight
        if ($assessmentWeight->teacher_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('Teacher/EditAssessmentWeight', [
            'assessmentWeight' => $assessmentWeight,
        ]);
    }

    // Update an existing assessment weight
    public function update(Request $request, $id)
    {
        $request->validate([
            'assessment_type' => 'required|string',
            'weight' => 'required|numeric|min:0|max:100',
        ]);

        $assessmentWeight = AssessmentWeight::findOrFail($id);

        // Ensure the authenticated teacher owns this assessment weight
        if ($assessmentWeight->teacher_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $assessmentWeight->update($request->only(['assessment_type', 'weight']));

        return redirect()->route('assessmentWeights.create', $assessmentWeight->course_id)
            ->with('success', 'Assessment weight updated successfully!');
    }

    // Delete an assessment weight

    public function destroy($id)
    {
        $assessmentWeight = AssessmentWeight::findOrFail($id);
        $courseId = $assessmentWeight->course_id;

        // Ensure the authenticated teacher owns this assessment weight
        if ($assessmentWeight->teacher_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized action.'], 403);
        }

        $assessmentWeight->delete();

        return response()->json(['success' => 'Assessment weight deleted successfully!']);
    }
}
