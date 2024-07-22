<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class StudentListMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check() && auth()->user()->role !== 'teacher') {
            return redirect('/'); 
        }

        return $next($request);
    }
}

