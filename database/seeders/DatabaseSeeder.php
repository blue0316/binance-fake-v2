<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (!User::query()->first()) {
            User::query()->create([
                'name' => 'admin',
                'email' => 'admin',
                'password' => Hash::make('admin')
            ]);
        }
    }
}
