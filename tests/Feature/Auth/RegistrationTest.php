<?php

namespace Tests\Feature\Auth;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered(): void
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    // public function test_new_users_can_register(): void
    // {
    //     $response = $this->post('/register', [
    //         'name' => 'Test User',
    //         'email' => 'test@example.com',
    //         'password' => 'password',
    //         'password_confirmation' => 'password',
            
    //     ]);

    //     $this->assertAuthenticated();
    //     $response->assertRedirect(route('dashboard', absolute: false));
    // }


    //here

    public function test_new_users_can_register(): void
    {
        $roles = [
            User::SUPER_ADMIN,
            User::STUDENT,
            User::TEACHER,
            User::FAMILY,
        ];

        foreach ($roles as $role) {
            $user = User::factory()->make([
                'role' => $role,
            ]);

            $response = $this->post('/register', [
                'name' => $user->name,
                'email' => $user->email,
                'password' => 'password',
                'password_confirmation' => 'password',
                'role' => $user->role,
            ]);

            $this->assertAuthenticated();
            $response->assertRedirect(route('dashboard', absolute: false));

            $this->assertDatabaseHas('users', [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ]);
        }   
    }
    
    //here
}