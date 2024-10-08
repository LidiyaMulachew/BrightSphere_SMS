<?php
use App\Http\Controllers\AssignmentSubmissionController;
use App\Http\Controllers\AssessmentWeightController;
use App\Http\Controllers\AssessmentRecordController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\AuthenticatedSessionController;
use App\Http\Middleware\RedirectToUserDashboard;
use App\Http\Controllers\CourseTeacherController;
use App\Http\Controllers\FamilyController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\RegisteredStudentController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\SuperAdminMiddleware;
use App\Http\Middleware\StudentListMiddleware;
use App\Http\Controllers\ParentAccountController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\EnrollToCoursesController;
use App\Http\Controllers\StudentListController;
use App\Http\Controllers\WelcomePageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/materials', [MaterialController::class, 'store'])
        ->name('materials.store');
});

//welcome page
Route::get('/Home', [WelcomePageController::class, 'home'])->name('home');
Route::get('/faculty-members', [WelcomePageController::class, 'facultyMembers'])->name('faculty-members');
Route::get('/departments', [WelcomePageController::class, 'departments'])->name('departments');
Route::get('/research-center', [WelcomePageController::class, 'researchCenter'])->name('research-center');
Route::get('/campus-facility', [WelcomePageController::class, 'campusFacility'])->name('campus-facility');


//Multi_Authentication
Route::middleware(['auth', RedirectToUserDashboard::class])->group(function () {
    Route::get('/super_admin/dashboard', [SuperAdminController::class, 'dashboard'])->name('super_admin.dashboard');
    Route::get('/student/dashboard', [StudentController::class, 'dashboard'])->name('student.dashboard');
    Route::get('/teacher/dashboard', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');
    Route::get('/family/dashboard', [FamilyController::class, 'dashboard'])->name('family.dashboard');
});


// Route to render registration form for superadmin
Route::get('/registration', [RegisteredUserController::class, 'create'])->name('registration');
Route::post('/registration', [RegisteredUserController::class, 'store']);


// Route to render registration form for teachers
Route::get('/registerstudents', [RegisteredStudentController::class, 'create'])->name('registerstudents.index');
Route::post('/registerstudents', [RegisteredStudentController::class, 'store'])->name('registerstudents.store');


// Edit teachers account
Route::middleware(['auth', SuperAdminMiddleware::class])->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{id}', [UserController::class, 'show'])->name('users.show');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit'); 
    // Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
});


// Edit students 
Route::middleware('auth')->group(function () {
    Route::get('/studentslist', [StudentListController::class, 'index'])->name('studentslist.index');
    Route::get('/studentslist/{id}', [StudentListController::class, 'show'])->name('studentslist.show');
    Route::post('/studentslist', [StudentListController::class, 'store'])->name('studentslist.store');
    Route::get('/studentslist/{id}/edit', [StudentListController::class, 'edit'])->name('studentslist.edit'); 
    // Route::put('/studentslist/{id}', [StudentListController::class, 'update'])->name('studentslist.update');
    Route::put('/studentslist/{user}', [StudentListController::class, 'update'])->name('studentslist.update');
    Route::delete('/studentslist/{id}', [StudentListController::class, 'destroy'])->name('studentslist.destroy');
});

//create parent account by teacher
Route::get('/parent/create/{studentId}', [ParentAccountController::class, 'create'])->name('parent.create');
Route::post('/parent/store', [ParentAccountController::class, 'store'])->name('parent.store');
Route::get('/parent/{studentId}', [ParentAccountController::class, 'show'])->name('parent.show');

// Route::middleware(['auth',  SuperAdminMiddleware::class])->group(function () {
//     Route::resource('users', UserController::class);
// });


//create courses 
Route::middleware(['auth'])->group(function () {
    Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');
    Route::get('/courses/create', [CourseController::class, 'create'])->name('courses.create');
    Route::post('/courses/store', [CourseController::class, 'store'])->name('courses.store');
    Route::get('/courses/{course}/edit', [CourseController::class, 'edit'])->name('courses.edit');
    Route::put('/courses/{course}', [CourseController::class, 'update'])->name('courses.update');
    Route::delete('/courses/{course}', [CourseController::class, 'destroy'])->name('courses.destroy');
    //assign teachers to courses
    Route::post('/courses/{course}/assign', [CourseController::class, 'assignTeachers'])->name('courses.assign.teachers');
    Route::get('/courses/{course}/assign-teachers', [CourseController::class, 'assign'])->name('courses.assign');
    //unassign teachers from courses and assigned teachers list
    Route::delete('/teachers/unassign', [CourseController::class, 'unassign'])->name('teachers.unassign');
    Route::get('/courses/{course}/teachers', [CourseController::class, 'showAssignedTeachers'])->name('courses.teachers');
});

//register students to courses
Route::middleware(['auth'])->group(function (){
    Route::get('/enroll/courses', [EnrollToCoursesController::class, 'getCourses'])->name('student.getcourses');
    Route::get('/teachers-by-course/{courseId}', [EnrollToCoursesController::class, 'getTeachersByCourse'])->name('student.getTeachersByCourse');
    Route::get('/student/courses',[EnrollToCoursesController::class, 'index'])->name('student.course.index');
    Route::post('/enroll', [EnrollToCoursesController::class, 'enroll'])->name('student.course.enroll');

    Route::get('/all-courses-with-materials', [EnrollToCoursesController::class, 'showAllCoursesWithMaterials'])->name('courses.with.materials');

    Route::get('/all-courses', [EnrollToCoursesController::class, 'getCoursesByStudentId'])->name('courses.student');
    Route::get('/courses/{course}', [EnrollToCoursesController::class, 'material'])->name('courses.material');

    Route::get('/students/{studentId}/results', [EnrollToCoursesController::class, 'assessment']);
    Route::get('/courses/{selectedCourseId}/results', [EnrollToCoursesController::class, 'fetchStudentResults']);

    // Route::get('/courses/{courseId}/students/{studentId}/results', [EnrollToCoursesController::class, 'fetchStudentResults']);


    //student can submit the assignment
    Route::get('/assignments/{material}/submission', [AssignmentSubmissionController::class, 'index'])->name('submissions.index');
    Route::post('/Assignment/submissions', [AssignmentSubmissionController::class, 'store'])->name('submissions.store');

    //teacher can see the submitted assignment
    Route::get('/assignments/{material}/submissions', [AssignmentSubmissionController::class, 'submissionsList'])->name('submissionsList.index');
    // Route::get('/assignments/{material}/submission', [AssignmentSubmissionController::class, 'create'])->name('assignments.createSubmission');

});


//upload course materials

Route::middleware(['auth'])->group(function () {

    Route::get('/materials', [MaterialController::class, 'index'])->name('materials.index');
    Route::get('/materials/create', [MaterialController::class, 'create'])->name('materials.create');
    Route::get('/materials/courses', [MaterialController::class, 'getCourses'])->name('getcourses');
    Route::post('/materials', [MaterialController::class, 'store'])->name('materials.store');
    Route::put('/materials/show', [MaterialController::class, 'show'])->name('materials.show');
    Route::get('/materials/{id}/edit', [MaterialController::class, 'edit'])->name('materials.edit');
    Route::post('/materials/{id}', [MaterialController::class, 'update'])->name('materials.update');
    Route::delete('/materials/{material}', [MaterialController::class, 'destroy'])->name('materials.destroy');
});


// Routes for managing assessment weights
Route::middleware(['auth'])->group(function () {
    Route::get('/assigned-courses', [AssessmentWeightController::class, 'showAssignedCourses'])->name('assigned.courses');
    Route::get('/courses/{course}/assessment-weights', [AssessmentWeightController::class, 'index'])->name('assessmentWeights.index');
    Route::get('/courses/{courseId}/assessment-weights/{assessmentId}/results', [AssessmentWeightController::class, 'showEnterResults'])->name('courses.assessment-results');
    Route::post('/courses/{courseId}/assessment-weights/{assessmentId}/results', [AssessmentWeightController::class, 'saveResults'])->name('courses.save-assessment-results');
    Route::post('/courses/{courseId}/assessment-weights/{assessmentId}/results', [AssessmentWeightController::class, 'storeResults']) ->name('courses.store-results');

    Route::get('/courses/{courseId}/assessment-weights/create', [AssessmentWeightController::class, 'create'])->name('assessmentWeights.create');
    Route::post('/assessment-weights', [AssessmentWeightController::class, 'store'])->name('assessmentWeights.store');
    Route::get('/assessment-weights/{id}/edit', [AssessmentWeightController::class, 'edit'])->name('assessmentWeights.edit');
    Route::put('/assessment-weights/{id}', [AssessmentWeightController::class, 'update'])->name('assessmentWeights.update');
    Route::delete('/assessment-weights/{id}', [AssessmentWeightController::class, 'destroy'])->name('assessmentWeights.destroy');
});

 //assessment record

Route::middleware(['auth'])->group(function () {
    Route::get('/courses/{courseId}/assessment-records', [AssessmentRecordController::class, 'index'])->name('students.list');
    Route::get('/courses/{courseId}/assessment-records/{studentId}/result', [AssessmentRecordController::class, 'showResultForm']);
    Route::post('/courses/{courseId}/assessment-records/{studentId}/store', [AssessmentRecordController::class, 'storeResult']);
    Route::post('/finalize-results/{courseId}', [AssessmentRecordController::class, 'finalizeResults']);
    Route::get('courses/{courseId}/students', [AssessmentRecordController::class, 'list'])->name('students.list');
    Route::get('courses/{courseId}/students/{studentId}/grade', [AssessmentRecordController::class, 'showForm'])->name('grade.form');
    Route::post('courses/{courseId}/students/{studentId}/grade/store', [AssessmentRecordController::class, 'submitGrade'])->name('grade.submit');
    Route::get('/student-assessment-results/{courseId}', [AssessmentRecordController::class, 'show'])->name('assessmentResults.show');
});

//grade submission 

Route::middleware(['auth'])->group(function () {
    Route::get('/courses/{courseId}/grades', [GradeController::class, 'showGrades'])->name('grades.show');
    Route::post('/courses/{courseId}/store', [GradeController::class, 'store'])->name('grades.store');
});


// parents can see their children result

Route::middleware(['auth'])->group(function () {
    Route::get('/family/children', [ParentAccountController::class, 'children'])->name('parent.children');
    Route::get('/family/courses', [ParentAccountController::class, 'showCourses'])->name('parent.courses');
    Route::get('/family/courses/{courseId}/results', [ParentAccountController::class, 'showResults'])->name('parent.results');
    Route::get('/parent/courses/{course}/results', [ParentAccountController::class, 'showResults'])->name('parent.results');

});

require __DIR__ . '/auth.php';
