<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Lidiya Mulachew',
            'email' => 'lidiyamul894@gmail.com',
            'password' => Hash::make('bereket63@'),
            'role'=> User::SUPER_ADMIN,

        ]);
        User::create([
            'name' => 'Lidet Getu',
            'email' => 'lidet123@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => User::STUDENT,
        ]);
        User::create([
            'name' => 'Yoseph Alemu',
            'email' => 'yoseph123@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => User::TEACHER,
        ]);

        User::create([
            'name' => 'Getu Tsegaye',
            'email' => 'getu123@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => User::ROLE_PARENT,
        ]);
    }
}
