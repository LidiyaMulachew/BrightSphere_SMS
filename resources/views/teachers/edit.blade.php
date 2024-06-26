@extends('teachers.layout')
@section('content')
<div class="card">
    <div class="card-header">Edit</div>
    <div class="card-body">
        <form action="{{ route('teachers.update', $teachers->id) }}" method="put">
            @csrf
            <label>Full Name</label>
            <input type="text" name="Full_name" id="Full_name" value="{{ isset($students) ? $students->Full_name : '' }}" class="form-control"/><br/>
            <label>Email</label>
            <input type="text" name="Email" id="Email" value="{{ isset($students) ? $students->Email: '' }}" class="form-control"/><br/>
            
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
</div>
@stop