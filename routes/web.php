<?php

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
use App\Http\Controllers\StudentListController;
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
    Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
});


// Edit students 
Route::middleware('auth')->group(function () {
    Route::get('/studentslist', [StudentListController::class, 'index'])->name('studentslist.index');
    Route::get('/studentslist/{id}', [StudentListController::class, 'show'])->name('studentslist.show');
    Route::post('/studentslist', [StudentListController::class, 'store'])->name('studentslist.store');
    Route::put('/studentslist/{id}', [StudentListController::class, 'update'])->name('studentslist.update');
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
    Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');
    Route::get('/courses/{course}/edit', [CourseController::class, 'edit'])->name('courses.edit');
    Route::put('/courses/{course}', [CourseController::class, 'update'])->name('courses.update');
    Route::delete('/courses/{course}', [CourseController::class, 'destroy'])->name('courses.destroy');

    Route::post('courses/{course}/assign-teachers', [CourseController::class, 'assign'])->name('courses.assign.teachers');
    Route::delete('courses/{course}/unassign-teachers', [CourseController::class, 'unassign'])->name('courses.unassign');
    Route::get('/courses/{course}/teachers', [CourseController::class, 'showAssignedTeachers'])->name('courses.teachers');
});


//upload course materials

Route::middleware(['auth'])->group(function () {

    Route::get('/materials', [MaterialController::class, 'index'])->name('materials.index');
    Route::get('/materials/create', [MaterialController::class, 'create'])->name('materials.create');
    Route::post('/materials', [MaterialController::class, 'store'])->name('materials.store');
    Route::put('/materials/show', [MaterialController::class, 'show'])->name('materials.show');
    Route::get('/materials/{id}/edit', [MaterialController::class, 'edit'])->name('materials.edit');
    Route::post('/materials/{id}', [MaterialController::class, 'update'])->name('materials.update');
    Route::delete('/materials/{material}', [MaterialController::class, 'destroy'])->name('materials.destroy');
});



require __DIR__ . '/auth.php';
