<?php

namespace App\Http\Controllers;

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

    /**
     * Display the list of children.
     *
     * @return \Inertia\Response
     */
    public function children()
    {
        return Inertia::render('RoleParent/Children');
    }
}