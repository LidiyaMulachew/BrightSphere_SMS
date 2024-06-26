@extends('teachers.layout')

@section('content')
<div class="card">
    <div class="card-header">Teacher Page</div>
    <div class="card-body">
        <div>
        <p class="card-title">Full name: {{ $student->Full_name }}</p>
            <p class="card-title">Email: {{ $student->Email }}</p>


        </div>
    </div>
</div>
@endsection