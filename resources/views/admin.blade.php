@extends('layout')
@section('content')
@section('title', 'Admin')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Welcome, Admin!</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h1>Welcome to the School Management System</h1>
                    <p>This is the admin dashboard.</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection