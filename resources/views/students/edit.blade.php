@extends('students.layout')
@section('content')
<div class="card">
    <div class="card-header">Edit</div>
    <div class="card-body">
    <form action="{{ route('students.update', $student->id) }}" method="put">
            @csrf
            <label>First Name</label>
            <input type="text" name="First_name" id="First_name" value="{{ isset($students) ? $students->First_name : '' }}" class="form-control"/><br/>
            <label>Middle Name</label>
            <input type="text" name="Middle_name" id="Middle_name" value="{{ isset($students) ? $students->Middle_name : '' }}" class="form-control"/><br/>
            <label>Last Name</label>
            <input type="text" name="Last_name" id="Last_name" value="{{ isset($students) ? $students->Last_name : '' }}" class="form-control"/><br/>
            <label>Age</label>
            <input type="text" name="Age" id="Age" value="{{ isset($students) ? $students->Age : '' }}" class="form-control"/><br/>
            <label>Grade</label>
            <input type="text" name="Grade" id="Grade" value="{{ isset($students) ? $students->Grade : '' }}" class="form-control"/><br/>
            <label>Major</label>
            <input type="text" name="Major" id="Major" value="{{ isset($students) ? $students->Major : '' }}" class="form-control"/><br/>
            <label>Teacher_name</label>
            <input type="text" name="Teacher_name" id="Teacher_name" value="{{ isset($students) ? $students->Teacher_name : '' }}" class="form-control"/><br/>
            
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
</div>
@stop