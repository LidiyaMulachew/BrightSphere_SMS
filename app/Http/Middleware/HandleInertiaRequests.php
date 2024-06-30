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
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }

    //from here


    protected $routeMiddleware = [
        'student' => \App\Http\Middleware\StudentMiddleware::class,
        'teacher' => \App\Http\Middleware\TeacherMiddleware::class,
        'role_parent' => \App\Http\Middleware\RoleParentMiddleware::class,
    ];

    
    //to here
}
