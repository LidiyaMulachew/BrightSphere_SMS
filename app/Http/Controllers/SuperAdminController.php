<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuperAdminController extends Controller
{

    public function dashboard()
{
    return Inertia::render('SuperAdmin/Dashboard');
}
    public function login(Request $request)
    {
        if (Auth::guard('super_admin')->attempt($request->only('email', 'password'))) {
            return redirect()->route('SuperAdmin.dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout()
    {
        Auth::guard('super_admin')->logout();
        return redirect()->route('login');
    }
}