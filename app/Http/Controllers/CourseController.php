<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lecturer;
use App\Models\Semester;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Course/Index', [
            'semesters' => Semester::orderBy('name')->get(),
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Course/Dashboard/Index', [
            'courses' => Course::with('lecturer', 'semester')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Course/Dashboard/Create', [
            'lecturers' => Lecturer::all(),
            'semesters' => Semester::orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|min:3|unique:courses,name',
            'code' => 'nullable|string|max:255|min:3',
            'sks' => 'required|integer|min:1|max:3',
            'semester_id' => 'required|exists:semesters,id',
            'type' => 'required|in:wajib,ujian utama',
            'material_url' => 'nullable|url:http,https',
            'rps' => 'nullable|url:http,https',
            'vclass' => 'nullable|url:http,https',
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
        //
    }

    public function showBySemester(Semester $semester)
    {
        return Inertia::render('Course/Show', [
            'courses' => Course::where('semester_id', $semester->id)->with('lecturer', 'semester')->get(),
            'semester' => $semester->name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return Inertia::render('Course/Dashboard/Edit', [
            'course' => $course->load('lecturer', 'semester'),
            'lecturers' => Lecturer::all(),
            'semesters' => Semester::orderBy('name')->get(),
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
            'semester_id' => 'nullable|exists:semesters,id',
            'type' => 'required|in:wajib,ujian utama',
            'material_url' => 'nullable|url:http,https',
            'rps' => 'nullable|url:http,https',
            'vclass' => 'nullable|url:http,https',
            'lecturer_id' => 'nullable|exists:lecturers,id',
        ]);

        // dd($validated);

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
