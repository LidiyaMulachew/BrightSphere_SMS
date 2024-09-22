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

        $teachersList = $request->user();

        if ($teachersList->isSuper_Admin()) {
            // Fetch all teachers for super admin
            $users = User::where('role', User::TEACHER)->get();

        } else {
            // Return a custom message if the user is not a super_admin
            return response()->json([
                'message' => 'You are not authorized to view the teachers list.'
            ], 403); // 403 Forbidden HTTP status code
        }


        $teachers=[$users];
        return Inertia::render('SuperAdmin/List', ['teachersList' => $users,'teacherData' => $teachers]);

        // return response()->json($users);
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
        return Inertia::render('SuperAdmin/EditUser', ['user' => $user]);
    }

    // public function edit($id)
    // {
    //     $user = User::find($id);
    
    //     if (!$user) {
    //         return response()->json(['message' => 'User not found'], 404);
    //     }
    
    //     // return response()->json($user);
    //     return Inertia::render('SuperAdmin/EditUser', ['user' => $user]);
    // }


    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    
    
//      public function update(Request $request, $id)
//     {
// dd($id);
//         $user = User::find($id);
// // dd($user);

//         if (!$user) {
//             return response()->json(['message' => 'User not found'], 404);
//         }

        
//         $validatedData = $request->validate([
//             'name' => 'required|string|max:255',
//             // 'email' => 'required|email|unique:users,email,' . $id,
//             'email' => 'required|email', // Removed unique validation
//                     'role' => 'required|integer',
//         ]);

//         // $user = User::findOrFail($id);
//         $user->update($validatedData);

//         return redirect()->route('users.index');
//     }

public function update(Request $request, User $user)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,' . $user->id,
        'role' => 'required|integer',
    ]);

    $user->name = $validatedData['name'];
    $user->email = $validatedData['email'];
    $user->role = $validatedData['role'];
    $user->save();

    return response()->json(['message' => 'User updated successfully!']);
}


//     public function update(Request $request, $id)
// {
//     dd($id);
//     // Validate the incoming request data
//     $validatedData = $request->validate([
//         'name' => 'required|string|max:255',
//         // 'email' => 'required|email|unique:users,email,' . $id,
//         'email' => 'required|email', // Removed unique validation
//         'role' => 'required|integer',
//     ]);

//     // Find the user by ID
//     $user = User::findOrFail($id);

//     // Update user properties
//     $user->name = $validatedData['name'];
//     $user->email = $validatedData['email'];
//     $user->role = $validatedData['role'];

//     // Save the changes
//     $user->save();

//     // Return a response, maybe redirect or return a JSON response
//     return response()->json(['message' => 'User updated successfully!']);
// }


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
