<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use App\Models\Grade;
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
            'course' => $course, 

        ]);
    }
    public function showEnterResults($courseId, $assessmentId)
    {
        $course = Course::find($courseId);
        $assessment = AssessmentWeight::find($assessmentId);
    
        if (!$course || !$assessment) {
            return redirect()->back()->with('error', 'Course or assessment not found.');
        }
    
        // $students = User::whereIn('id', function ($query) use ($courseId) {
        //     $query->select('student_id')
        //           ->from('course_student')
        //           ->where('course_teacher_id', Auth::id());
        //         //   ->where('course_id', $courseId);
        // })->get(['id', 'name']); // Ensure 'name' is included
        $teacherId = auth()->id(); 

        $students = User::whereExists(function ($query) use ($courseId, $teacherId) {
            $query->select('*')
                  ->from('course_student')
                  ->join('course_teacher', 'course_student.course_teacher_id', '=', 'course_teacher.course_id')
                  ->where('course_student.course_teacher_id', $courseId)
                  ->where('course_teacher.teacher_id', $teacherId)
                  ->whereColumn('course_student.student_id', 'users.id');
        })->whereNull('deleted_at')
          ->get();
        return Inertia::render('Teacher/EnterResults', [
            'assessment' => $assessment,
            'students' => $students,
            'course' => $course
        ]);
    }
//     public function storeResults(Request $request, $courseId, $assessmentId)
// {
//     // Validate the request
//     $request->validate([
//         'student_results' => 'required|array',
//         'student_results.*' => 'numeric|min:0|max:100', // Adjust validation as needed
//     ]);

//     // Get the authenticated teacher
//     $teacherId = auth()->user()->id; // Assuming you are using Laravel's built-in authentication

//     $assessment = AssessmentWeight::find($assessmentId);
//     $course = Course::find($courseId);

//     if (!$assessment || !$course) {
//         return response()->json(['error' => 'Course or assessment not found.'], 404);
//     }

//     foreach ($request->input('student_results') as $studentId => $score) {
//         // Update or create the assessment record with course_id and teacher_id
//         AssessmentRecord::updateOrCreate(
//             [
//                 'student_id' => $studentId,
//                 'assessment_weight_id' => $assessmentId,
//                 'course_id' => $courseId, // Include course_id in the data
//                 'teacher_id' => $teacherId // Include teacher_id in the data
//             ],
//             [
//                 'score' => $score // Use 'score' instead of 'result'
//             ]
//         );
//     }

//     return response()->json(['message' => 'Results saved successfully.']);
// }
 

public function storeResults(Request $request, $courseId, $assessmentId)
{
    // Validate the request
    $request->validate([
        'student_results' => 'required|array',
        'student_results.*' => 'numeric|min:0|max:100', // Adjust validation as needed
    ]);

    // Get the authenticated teacher
    $teacherId = auth()->user()->id; // Assuming you are using Laravel's built-in authentication

    // Fetch the assessment and course
    $assessment = AssessmentWeight::find($assessmentId);
    $course = Course::find($courseId);

    if (!$assessment || !$course) {
        return response()->json(['error' => 'Course or assessment not found.'], 404);
    }

    // Check if grades are locked for the students in this course
    $lockedGrades = Grade::where('course_id', $courseId)
                         ->where('locked', true)
                         ->pluck('student_id')
                         ->toArray();

    foreach ($request->input('student_results') as $studentId => $score) {
        // Check if the student's grade is locked
        if (in_array($studentId, $lockedGrades)) {
            return response()->json([
                'error' => "Cannot update results for student ID $studentId because their grade is locked."
            ], 403);
        }

        // Update or create the assessment record
        AssessmentRecord::updateOrCreate(
            [
                'student_id' => $studentId,
                'assessment_weight_id' => $assessmentId,
                'course_id' => $courseId, // Include course_id in the data
                'teacher_id' => $teacherId // Include teacher_id in the data
            ],
            [
                'score' => $score // Use 'score' instead of 'result'
            ]
        );
    }

    return response()->json(['message' => 'Results saved successfully.']);
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

        return redirect()->route('assessmentWeights.index', $assessmentWeight->course_id)
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
