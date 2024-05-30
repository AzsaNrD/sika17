<?php

namespace App\Http\Controllers;

use App\Models\Semester;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Semester/Index', [
            'semesters' => Semester::orderBy('name')->paginate(8),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Semester/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|numeric|min:1|max:8|unique:semesters,name',
            'is_active' => [
                'required',
                'boolean',
                Rule::unique('semesters')->where(function ($query) {
                    return $query->where('is_active', true);
                }),
            ],
        ]);

        Semester::create($validated);

        return redirect()->route('dashboard.semester.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Semester $semester)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Semester $semester)
    {
        return Inertia::render('Semester/Edit', [
            'semester' => $semester,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Semester $semester)
    {
        $validated = $request->validate([
            'name' => 'required|numeric|min:1|max:8',
            'is_active' => [
                'required',
                'boolean',
                Rule::unique('semesters')->where(function ($query) {
                    return $query->where('is_active', true);
                }),
            ],
        ]);

        $semester->update($validated);

        return redirect()->route('dashboard.semester.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Semester $semester)
    {
        $semester->delete();

        return redirect()->route('dashboard.semester.index');
    }
}
