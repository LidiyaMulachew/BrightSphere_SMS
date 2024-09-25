<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;  //softdelete

class User extends Authenticatable
{
    use HasFactory, Notifiable,SoftDeletes;  //add softdelete
    public const SUPER_ADMIN=0;
    public const STUDENT=1;
    public const TEACHER=2;
    public const FAMILY=3;


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
        
        // 'teacher_id',
        // 'student_id',
        // 'parent_id',



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

    protected $dates = ['deleted_at']; // deleted_at is included in dates  for softdelete


    //create relationship with material
    public function materials()
    {
        return $this->hasMany(Material::class);
    }


    // create relationships with teachers and students
    public function teachers()
    {
        return $this->belongsToMany(User::class, 'teacher_student', 'student_id', 'teacher_id');
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'teacher_student', 'teacher_id', 'student_id');
    }


    // create relationships with students and parents

    public function parent()
    {
        return $this->belongsToMany(User::class, 'student_parent', 'student_id', 'parent_id');
    }
    public function student()
    {
        return $this->belongsToMany(User::class, 'student_parent', 'parent_id', 'student_id');
    }


    // create relationships with courses (teacher)

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_teacher', 'teacher_id', 'course_id');
    }

    // create relationships with courses (student)

    public function course()
    {
        return $this->belongsToMany(Course::class, 'course_student', 'student_id', 'course_id');
    }


      // Relationship with courses that the student enrolled in
      public function enrolledCourses()
      {
          return $this->belongsToMany(CourseTeacher::class, 'course_student', 'student_id', 'course_teacher_id')->with('course'); // Eager load the related Course;
      }
// Fetch students enrolled for the course with the authenticated teacher 
public function enrolledCoursesWithTeacher()
{
    return $this->belongsToMany(CourseTeacher::class, 'course_student', 'student_id', 'course_teacher_id');
}

          // Define a relationship with CourseTeacher
    public function courseTeachers()
    {
        return $this->hasMany(CourseTeacher::class, 'teacher_id'); // Adjust the foreign key as needed
    }


    //grades
    public function grades()
    {
        return $this->hasMany(Grade::class, 'student_id');
    }

    public function assessmentRecords()
    {
        return $this->hasMany(AssessmentRecord::class, 'student_id');
    }

    public function grade()
    {
        return $this->hasMany(Grade::class, 'student_id');
    }

    public function assessmentRecord()
    {
        return $this->hasMany(AssessmentRecord::class, 'student_id');
    }



 //Multi_Authentication
   public function isSuper_Admin(): bool
   {
     return $this->role === self::SUPER_ADMIN;
     
   }
    public function isStudent(): bool
   {
     return $this->role === self::STUDENT;
   }
    public function isTeacher(): bool
    {
        return $this->role === self::TEACHER;
    }

    public function isParent(): bool
    {
        return $this->role === self::FAMILY;
    }

   //Multi_Authentication

}