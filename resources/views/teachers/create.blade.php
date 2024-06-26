@extends('teachers.layout')
@section('content')
<div class="card">
    <div class="card-header">Teacher_page</div>
    <div class="card-body">
        <form action="{{ route('teachers.store') }}" method="post">
            @csrf
            <label>Full Name</label>
            <input type="text" name="First_name" id="Ull_name" value="{{ isset($students) ? $students->Full_name : '' }}" class="form-control"/><br/>
            <label>Email</label>
            <input type="text" name="Email" id="Email" value="{{ isset($students) ? $students->Email : '' }}" class="form-control"/><br/>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
@stop