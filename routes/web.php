<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\AuthenticatedSessionController;
use App\Http\Middleware\RedirectToUserDashboard;
use App\Http\Controllers\RegistrationController;
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


// Route::middleware(['auth',  SuperAdminMiddleware::class])->group(function () {
//     Route::resource('users', UserController::class);
// });

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



// Route::middleware('auth:sanctum')->group(function () {
//     // Authenticated routes
//     Route::get('/users/students', [UserController::class, 'getStudents']);
//     Route::delete('/users/{id}', [UserController::class, 'deleteStudent']);
// });


// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/students', [StudentListController::class, 'index']);
//     Route::post('/students', [StudentListController::class, 'store']);
//     Route::put('/students/{id}', [StudentListController::class, 'update']);
//     Route::delete('/students/{id}', [StudentListController::class, 'destroy']);
// });



// Route::get('/students', [StudentController::class, 'index'])->name('students.index');
// Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
// Route::post('/students', [StudentController::class, 'store'])->name('students.store');
// Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');
// Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');
// Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destroy');










// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'super_admin'])->name('super_admin.dashboard');
// Route::get('student/dashboard', function () {
//     return Inertia::render('Student/dashboard');
// })->middleware(['auth', 'student'])->name('student.dashboard');
// Route::get('teacher/dashboard', function () {
//     return Inertia::render('teacher.ashboard');
// })->middleware(['auth', 'teacher'])->name('teacher.dashboard');







// Route::middleware('role:student')->group(function () {
//     // Admin-only routes
//     Route::get('/student/dashboard', [StudentController::class, 'dashboard'])->name('student.dashboard');
// });
// Route::middleware('role:teacher')->group(function () {
//     // Admin-only routes
//     Route::get('/teacher/dashboard', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');
// });










// Route::middleware(['web', 'student'])->prefix('student')->group(function () {
//     Route::get('/dashboard', [StudentController::class, 'dashboard'])->name('student.dashboard');
//     Route::get('/profile', [StudentController::class, 'profile'])->name('student.profile');
// });


// Route::middleware(['web', 'teacher'])->prefix('teacher')->group(function () {
//     Route::get('/dashboard', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');
//     Route::get('/profile', [TeacherController::class, 'profile'])->name('teacher.profile');
// });


// Route::middleware(['web', 'role_parent'])->prefix('parent')->group(function () {
//     Route::get('/dashboard', [RoleParentController::class, 'dashboard'])->name('parent.dashboard');
//     Route::get('/profile', [RoleParentController::class, 'profile'])->name('parent.profile');
// });



// Route::get('/admin', [LoginController::class, 'admin'])->name('admin');
// Route::post('/admin', [LoginController::class, 'admin'])->name('admin');

// Route::get('/login', [LoginController::class, 'login'])->name('login');
// Route::post('/login', [LoginController::class, 'loginPost'])->name('login.post');

// Route::get('/logout', [LoginController::class, 'logout'])->name('logout');




// Route::get('/students', [StudentController::class, 'index'])->name('students.index');
// Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
// Route::post('/students', [StudentController::class, 'store'])->name('students.store');
// Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');
// Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');
// Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destroy');


// Route::get('/teachers', [TeacherController::class, 'index'])->name('teachers.index');
// Route::get('/teachers/create', [TeacherController::class, 'create'])->name('teachers.create');
// Route::post('/teachers', [TeacherController::class, 'store'])->name('teachers.store');
// Route::get('/teachers/{teacher}/edit', [TeacherController::class, 'edit'])->name('teachers.edit');
// Route::put('/teachers/{teacher}', [TeacherController::class, 'update'])->name('teachers.update');
// Route::delete('/teachers/{teacher}', [TeacherController::class, 'destroy'])->name('teachers.destroy');



require __DIR__ . '/auth.php';
