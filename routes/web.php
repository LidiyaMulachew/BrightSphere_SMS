<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\RoleParentController;



use App\Http\Controllers\LoginController;
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
});







// Student routes
Route::middleware(['web', 'student'])->prefix('student')->group(function () {
    Route::get('/dashboard', [StudentController::class, 'dashboard'])->name('student.dashboard');
    Route::get('/profile', [StudentController::class, 'profile'])->name('student.profile');
});

// Teacher routes
Route::middleware(['web', 'teacher'])->prefix('teacher')->group(function () {
    Route::get('/dashboard', [TeacherController::class, 'dashboard'])->name('teacher.dashboard');
    Route::get('/profile', [TeacherController::class, 'profile'])->name('teacher.profile');
});

// Role_Parent routes
Route::middleware(['web', 'role_parent'])->prefix('parent')->group(function () {
    Route::get('/dashboard', [RoleParentController::class, 'dashboard'])->name('parent.dashboard');
    Route::get('/profile', [RoleParentController::class, 'profile'])->name('parent.profile');
});






Route::get('/registration', function () {
    return Inertia::render('registration');
})->name('registration');


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



require __DIR__.'/auth.php';
