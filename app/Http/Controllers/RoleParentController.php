<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleParentController extends Controller
{
    /**
     * Display the role_parent dashboard.
     *
     * @return \Inertia\Response
     */
    public function dashboard()
    {
        return Inertia::render('RoleParent/Dashboard');
    }


    public function login(Request $request)
    {
        if (Auth::guard('role_parent')->attempt($request->only('email', 'password'))) {
            return redirect()->route('parent.dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout()
    {
        Auth::guard('parent')->logout();
        return redirect()->route('login');
    }


}