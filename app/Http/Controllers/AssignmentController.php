<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Assignment/Index');
    }

    public function adminIndex()
    {
        return Inertia::render('Assignment/Dashboard/Index', [
            'assignments' => Assignment::with('course')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Assignment/Dashboard/Create', [
            'courses' => Course::orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string|max:255|min:5',
            'submission_link' => 'nullable|url:http,https',
            'course_id' => 'required|exists:courses,id',
            'due_date' => 'required|date',
        ]);

        Assignment::create($validated);

        return redirect()->route('dashboard.assignment.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Assignment $assignment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Assignment $assignment)
    {
        return Inertia::render('Assignment/Dashboard/Edit', [
            'assignment' => $assignment->load('course'),
            'courses' => Course::orderBy('name')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Assignment $assignment)
    {
        $validated = $request->validate([
            'description' => 'required|string|max:255|min:5',
            'submission_link' => 'nullable|url:http,https',
            'course_id' => 'required|exists:courses,id',
            'due_date' => 'required|date',
        ]);

        $assignment->update($validated);

        return redirect()->route('dashboard.assignment.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Assignment $assignment)
    {
        $assignment->delete();

        return redirect()->route('dashboard.assignment.index');
    }
}
