<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Models\User;

class RedirectToUserDashboard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // if ($request->user()) {
        //     $user = $request->user();

        //     if ($user->role === 'super_admin') {
        //         return Inertia::location(route('super_admin.dashboard'));
        //     } elseif ($user->role === 'student') {
        //         return Inertia::location(route('student.dashboard'));
        //     } elseif ($user->role === 'teacher') {
        //         return Inertia::location(route('teacher.dashboard'));
        //     } elseif ($user->role === 'parent') {
        //         return Inertia::location(route('parent.dashboard'));
        //     }
        // }

        
if ($request->user()) {
    $user = $request->user();
    $currentRoute = Route::currentRouteName();

    // Define dashboard routes for each role
    $dashboardRoutes = [
        User::SUPER_ADMIN => 'super_admin.dashboard',
        User::STUDENT => 'student.dashboard',
        User::TEACHER => 'teacher.dashboard',
        User::FAMILY=> 'family.dashboard',
    ];


    // Check if the current route is a dashboard route
    if (array_key_exists($user->role, $dashboardRoutes) && $currentRoute !== $dashboardRoutes[$user->role]) {
        return redirect()->route($dashboardRoutes[$user->role]);
    }
}


        return $next($request);
    }
}