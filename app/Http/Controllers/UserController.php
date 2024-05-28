<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Dashboard/Index', [
            'users' => User::orderBy('name')->paginate(10),
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('User/Dashboard/Edit', [
            'user' => $user,
        ]);
    }

    public function resetPassword(User $user)
    {
        $user->password = Hash::make('passwordbaru123');
        $user->save();

        return Redirect::route('dashboard.user.index');
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'role' => 'required|in:User,Admin|not_in:Super Admin',
        ]);

        $user->update($validated);

        return Redirect::route('dashboard.user.index');
    }


    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::route('dashboard.user.index');
    }
}
