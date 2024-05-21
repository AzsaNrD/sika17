<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Course/Index');
    }

    public function adminIndex()
    {
        return Inertia::render('Course/Dashboard/Index', [
            'courses' => Course::with('lecturer')->orderByDesc('semester')->orderBy('name')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Course/Dashboard/Create', [
            'lecturers' => Lecturer::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|min:3',
            'code' => 'nullable|string|max:255|min:3',
            'sks' => 'required|integer|min:1|max:3',
            'semester' => 'required|integer|min:1|max:8',
            'type' => 'required|in:wajib,ujian utama',
            'material_url' => 'nullable|url:http,https',
            'rps_url' => 'nullable|url:http,https',
            'lecturer_id' => 'nullable|exists:lecturers,id',
        ]);

        Course::create($validated);

        return redirect()->route('dashboard.course.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($semester)
    {
        // Course $course 
        return Inertia::render('Course/SemesterCourse', [
            'semester' => $semester,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return Inertia::render('Course/Dashboard/Edit', [
            'course' => $course->load('lecturer'),
            'lecturers' => Lecturer::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|min:3',
            'code' => 'nullable|string|max:255|min:3',
            'sks' => 'required|integer|min:1|max:3',
            'semester' => 'required|integer|min:1|max:8',
            'type' => 'required|in:wajib,ujian utama',
            'material_url' => 'nullable|url:http,https',
            'rps_url' => 'nullable|url:http,https',
            'lecturer_id' => 'nullable|exists:lecturers,id',
        ]);

        $course->update($validated);

        return redirect()->route('dashboard.course.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();

        return redirect()->route('dashboard.course.index');
    }
}
