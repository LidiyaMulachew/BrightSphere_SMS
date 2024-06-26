<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Session;


class LoginController extends Controller
{



public function login()
{
    
    return view('login');
}



public function loginPost(Request $request){
    $request->validate([
       'email' =>'required' ,
       'password' =>'required' 

    ]);
        return $request->all();
    $credentials = $request->only('email', 'password');
    if(Auth::attempt($credentials)){
        return redirect()->intended('admin');
    }
    return redirect(route('login'))->with ("error", "Login details are not valid.");
}




function logout(){
    Session::flush();
    Auth::logout();
    return redirect(route('login'));
 }



public function admin()
{
     return view('admin');

            
}


}