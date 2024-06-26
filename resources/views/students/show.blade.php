@extends('students.layout')
@section('content')
<div class="card">
    <div class="card-header">Student Page</div>
    <div class="card-body">
        <div>
            <p class="card-title">First Name: {{ $student->First_name }}</p>
            <p class="card-title">Middle Name: {{ $student->Middle_name }}</p>
            <p class="card-title">Last Name: {{ $student->Last_name }}</p>
            <p class="card-text">Age: {{ $student->Age }}</p>
            <p class="card-text">Grade: {{ $student->Grade }}</p>
            <p class="card-text">Major: {{ $student->Major }}</p>
            <p class="card-text">Teacher_name: {{ $student->Teacher_name }}</p>

        </div>
    </div>
</div>
@endsection