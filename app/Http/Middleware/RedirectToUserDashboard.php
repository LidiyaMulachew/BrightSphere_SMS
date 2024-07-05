<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        if ($request->user()) {
            $user = $request->user();

            if ($user->role === 'super_admin') {
                return Inertia::location(route('super_admin.dashboard'));
            } elseif ($user->role === 'student') {
                return Inertia::location(route('student.dashboard'));
            } elseif ($user->role === 'teacher') {
                return Inertia::location(route('teacher.dashboard'));
            } elseif ($user->role === 'parent') {
                return Inertia::location(route('parent.dashboard'));
            }
        }

        return $next($request);
    }
}