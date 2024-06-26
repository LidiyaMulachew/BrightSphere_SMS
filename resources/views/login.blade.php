@extends('layout')
@section('content')
@section('title', 'Login')

<div class="row justify-content-center mt-5">
<div class="col-md-6">

<div class="card">
<div class="card-header">
    <h1 class="card-title" style="text-align: center;">Login</h1>
</div>
    <div class="card-body">

    
<div class="mt-5">
      @if($errors->any())
      <div class="col-12">
        @foreach($errors->all() as $error)
        <div class="alert alert-danger">{{$error}}

        </div>
        @endforeach
      </div>
      @endif

      @if(session()->has('error'))
       <div class="alert alert-danger">{{session('error')}}
       @endif


       @if(session()->has('success'))
       <div class="alert alert-success">{{session('success')}}
       @endif

      </div>
    </div>



    <form action="{{route('login.post')}}" method="POST" class="ms-auto mt-auto" style="width: 500px;">
            @csrf
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" >
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" name="password">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
</div>

</div>

@stop