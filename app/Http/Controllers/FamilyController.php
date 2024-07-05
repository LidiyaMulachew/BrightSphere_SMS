<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FamilyController extends Controller
{
    /**
     * Display the role_parent dashboard.
     *
     * @return \Inertia\Response
     */
    public function dashboard()
    {
        return Inertia::render('Family/Dashboard');
    }


    public function login(Request $request)
    {
        if (Auth::guard('family')->attempt($request->only('email', 'password'))) {
            return redirect()->route('family.dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout()
    {
        Auth::guard('family')->logout();
        return redirect()->route('login');
    }


}