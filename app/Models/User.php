<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    public const SUPER_ADMIN=0;
    public const STUDENT=1;
    public const TEACHER=2;
    public const ROLE_PARENT=3;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'role' => 'integer',
        ];
    }

    
 // here
 public function isTeacher(): bool
    {
        return $this->role === self::TEACHER;
    }

    public function isStudent(): bool
    {
        return $this->role === self::STUDENT;
    }

    public function isParent(): bool
    {
        return $this->role === self::ROLE_PARENT;
    }

    public function getRole(): string
    {
        switch ($this->role) {
            case self::SUPER_ADMIN:
                return 'Super Admin';
            case self::STUDENT:
                return 'Student';
            case self::TEACHER:
                return 'Teacher';
            case self::ROLE_PARENT:
                return 'Parent';
            default:
                return 'Unknown';
        }
    }

    public function hasRole(int $role): bool
    {
        return $this->role === $role;
    }

    // upto here
   

}
