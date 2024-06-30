<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use App\Http\Middleware\StudentMiddleware;
use App\Http\Middleware\TeacherMiddleware;
use App\Http\Middleware\RoleParentMiddleware;
class Kernel extends HttpKernel
{
    
    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'student' => \App\Http\Middleware\StudentMiddleware::class,
        'teacher' => \App\Http\Middleware\TeacherMiddleware::class,
        'role_parent' => \App\Http\Middleware\RoleParentMiddleware::class,
    ];
}