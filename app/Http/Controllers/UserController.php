<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {

        $currentUser = $request->user();

        if ($currentUser->isSuper_Admin()) {
            // Fetch all teachers for super admin
            $users = User::where('role', User::TEACHER)->get();
        } elseif ($currentUser->isTeacher()) {
            // Fetch students and parents associated with the current teacher

            $users = User::where('teacher_id', $currentUser->id)
                ->whereIn('role', [User::STUDENT, User::FAMILY])
                ->get();
        } else {
            // Default: Fetch all users
            $users = User::all();
        }
        // return Inertia::render('SuperAdmin/List', ['users' => $currentUser]);
        return response()->json($users);
    }


    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'required|in:teacher,student,parent',
            'teacher_id' => $request->user()->isuper_admin ? 'nullable' : 'required|exists:users,id',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'role' => $validatedData['role'],
            'teacher_id' => $validatedData['teacher_id'] ?? null,
        ]);

        return redirect()->route('users.index');
    }

    /**
     * Display the specified user.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('SuperAdmin/Show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('SuperAdmin/Edit', ['user' => $user]);
    }

    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('users.index');
    }
}
// class UserController extends Controller
// {
//     /**
//      * Display a listing of the users.
//      *
//      * @return \Inertia\Response
//      */
//     public function index()
//     {
//         $users = User::all(); 
//         return Inertia::render('SuperAdmin/List', ['users' => $users]); 
//         // return response()->json($users); 
//     }

//     /**
//      * Store a newly created user in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @return \Illuminate\Http\RedirectResponse
//      */
//     public function store(Request $request)
//     {
        
//         $validatedData = $request->validate([
//             'name' => 'required|string|max:255',
//             'email' => 'required|email|unique:users,email',
//             'password' => 'required|string|min:8',
            
//         ]);

        
//         User::create($validatedData);

//         return redirect()->route('users.index'); 
//     }

//     /**
//      * Display the specified user.
//      *
//      * @param  int  $id
//      * @return \Inertia\Response
//      */
//     public function show($id)
//     {
//         $user = User::findOrFail($id); 
//         return Inertia::render('SuperAdmin/Show', ['user' => $user]);
//     }

//     /**
//      * Show the form for editing the specified resource.
//      *
//      * @param  int  $id
//      * @return \Inertia\Response
//      */
//     public function edit($id)
//     {
//         $user = User::findOrFail($id); 
//         return Inertia::render('SuperAdmin/Edit', ['user' => $user]);
//     }

//     /**
//      * Update the specified user in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  int  $id
//      * @return \Illuminate\Http\RedirectResponse
//      */
//     public function update(Request $request, $id)
//     {
    
//         $validatedData = $request->validate([
//             'name' => 'required|string|max:255',
//             'email' => 'required|email|unique:users,email,' . $id,
            
//         ]);

        
//         $user = User::findOrFail($id);

        
//         $user->update($validatedData);

//         return redirect()->route('users.index'); 
//     }
    

//     /**
//      * Remove the specified user from storage.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\RedirectResponse
//      */
//     public function destroy($id)
//     {
        
//         $user = User::findOrFail($id);

        
//         $user->delete();

//         return redirect()->route('users.index'); 
//     }
// }
