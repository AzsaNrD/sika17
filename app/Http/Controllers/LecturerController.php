<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LecturerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Lecturer/Index', [
            'lecturers' => Lecturer::orderBy('name')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Lecturer/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'staffsite' => 'nullable|max:255|url:http,https'
        ]);

        Lecturer::create($validated);

        return redirect()->route('dashboard.lecturer.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lecturer $lecturer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lecturer $lecturer)
    {
        return Inertia::render('Lecturer/Edit', [
            'lecturer' => $lecturer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lecturer $lecturer)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'staffsite' => 'nullable|max:255|url:http,https'
        ]);

        $lecturer->update($validated);

        return redirect()->route('dashboard.lecturer.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lecturer $lecturer)
    {
        $lecturer->delete();

        return redirect()->route('dashboard.lecturer.index');
    }
}
