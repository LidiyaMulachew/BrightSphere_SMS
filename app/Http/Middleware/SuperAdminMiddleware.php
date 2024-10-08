<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SuperAdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check() && auth()->user()->role !== 'super_admin') {
            return redirect('/'); 
        }

        return $next($request);
    }
}

