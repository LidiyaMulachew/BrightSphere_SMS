<?php



// namespace App\Http\Controllers;

// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

// class UserController extends Controller
// {
//     // Get all students associated with the logged-in teacher
//     public function getStudents()
//     {
//         $currentUser = Auth::user();

//         if ($currentUser->role !== 2) { // Assuming role 2 is teacher
//             abort(403, 'Unauthorized action.');
//         }

//         $students = $currentUser->students()->get();

//         return response()->json($students);
//     }

//     // Delete a student
//     public function deleteStudent($id)
//     {
//         $currentUser = Auth::user();

//         if ($currentUser->role !== 2) { // Only teachers can delete students
//             abort(403, 'Unauthorized action.');
//         }

//         $student = User::findOrFail($id);

//         if ($student->teacher_id !== $currentUser->id) {
//             abort(403, 'Unauthorized action.');
//         }

//         $student->delete();

//         return response()->json(['message' => 'Student deleted successfully']);
//     }
// }
