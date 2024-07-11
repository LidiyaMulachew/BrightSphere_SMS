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



// namespace App\Http\Middleware;

// use Closure;
// use Illuminate\Http\Request;

// class SuperAdminMiddleware
// {
//     public function handle(Request $request, Closure $next)
//     {
//         if (auth()->user()->is_admin) {
//             return $next($request);
//         }

//         return redirect()->back()->withErrors(['You are not authorized to access this page.']);
//     }
// }