<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */




    
    // public function share(Request $request): array
    // {
    //     return [
    //         ...parent::share($request),
    //         'auth' => [
    //             'user' => $request->user(),
                
    //         ],
    //     ];
    // }

    
    //Multi_Authentication

    public function share(Request $request): array
    {
        $user = $request->user();
        $userRole = $user ? $user->role : null;

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $user,
                'role' => $userRole,
                'isSuperAdmin' => $userRole === 'super-admin',
                'isStudent' => $userRole === 'student',
                'isTeacher' => $userRole === 'teacher',
                'isParent' => $userRole === 'parent',
            ],
        ]);
    }

    protected $routeMiddleware = [
        'student' => \App\Http\Middleware\StudentMiddleware::class,
        'teacher' => \App\Http\Middleware\TeacherMiddleware::class,
        'family' => \App\Http\Middleware\FamilyMiddleware::class,
        'role' => \App\Http\Middleware\RedirectToUserDashboard::class,
        'super_admin' => \App\Http\Middleware\SuperAdminMiddleware::class,


    ];

    
   //Multi_Authentication
}
