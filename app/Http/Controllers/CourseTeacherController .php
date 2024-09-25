<?php
// namespace App\Http\Controllers;
// use Inertia\Inertia;
// use App\Models\Course;
// use App\Models\User;

// use Illuminate\Http\Request;

// class CourseTeacherController extends Controller
// {
//     public function assign(Request $request, Course $course)
//     {
//         $request->validate([
//             'teacher_ids' => 'required|array|exists:users,id',
//             // 'teacher_ids' => 'required|array|exists:teacher_student,teacher_id',

//         ]);

//         $course->teachers()->sync($request->teacher_ids);

//         return redirect()->route('courses.index')->with('success', 'Teachers assigned to course successfully!');
//     }

//     public function unassign(Request $request, Course $course)
//     {
//         $request->validate([
//             'teacher_ids' => 'required|array|exists:users,id',
//         ]);

//         $course->teachers()->detach($request->teacher_ids);

//         return redirect()->route('courses.index')->with('success', 'Teachers removed from course successfully!');
//     }

//     public function showAssignmentPage(Course $course)
//     {
//         // Fetch all teachers (or any filtering if needed)
//         $teachers = User::where('role', 'teacher')->get(); 

//         return Inertia::render('SuperAdmin/AssignTeachers', [
//             'course' => $course,
//             'teachers' => $teachers,
//         ]);
//     }
// }





// public function fetchStudentResults($courseId)
// {
//     $user = auth()->user(); 

//     // Fetch the course details
//     $course = Course::find($courseId);
    
//     // Fetch the assessment records for the student in the specified course
//     $assessmentRecords = AssessmentRecord::where('course_id', $courseId)
//         ->where('student_id', $user->id)
//         ->with(['assessmentWeight', 'grades']) // Ensure both relationships are loaded
//         ->get();

//     if ($assessmentRecords->isEmpty()) {
//         // Render the view with a message indicating no assessment records are found
//         return Inertia::render('Student/CourseResult', [
//             'course' => [
//                 'id' => $courseId,
//                 'course_name' => $course->course_name,
//                 'assessment_records' => [],
//                 'final_score' => 'N/A',
//                 'grade' => 'No assessment records found for this course.'
//             ],
//         ]);
//     }

//     // Compute the final score
//     $finalScore = $assessmentRecords->sum('score');

//     // Fetch grades for the specific student and assessment records
//     $grades = Grade::whereIn('assessment_record_id', $assessmentRecords->pluck('id'))
//         ->where('student_id', $user->id)
//         ->where('locked', true)
//         ->get();

//     // Prepare the response with final score and grade
//     return Inertia::render('Student/CourseResult', [
//         'course' => [
//             'id' => $courseId,
//             'course_name' => $assessmentRecords->first()->assessmentWeight->course->course_name, // Assuming the relationship exists
//             'assessment_records' => $assessmentRecords->map(function ($record) use ($grades) {
//                 // Find the grade related to the current assessment record and student
//                 $recordGrade = $grades->firstWhere('assessment_record_id', $record->id);

//                 return [
//                     'id' => $record->id,
//                     'assessment_weight_type' => $record->assessmentWeight->assessment_type,
//                     'assessment_weight_weight' => $record->assessmentWeight->weight,
//                     'score' => $record->score,
//                     'grade' => $recordGrade ? $recordGrade->grade : ' ', // Default to ' ' if no grade exists
//                 ];
//             }),
//             'final_score' => $finalScore,
//             'grade' => $grades->isNotEmpty() ? $grades->first()->grade : ' ', // Default to ' ' if no grade exists
//         ],
//     ]);
// }
