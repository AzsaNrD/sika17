<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Schedule;
use App\Models\Semester;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $activeSemester = Semester::where('is_active', true)->first();
        $lastUpdate = Schedule::max('updated_at');

        if (!$activeSemester) {
            return Inertia::render('Schedule/Index', [
                'schedules' => [],
                'lastUpdate' => $lastUpdate,
            ]);
        }

        $semesterId = $activeSemester->id;
        $schedules = Schedule::whereHas('course', function ($query) use ($semesterId) {
            $query->where('semester_id', $semesterId);
        })->with('course.lecturer', 'course.semester')
            ->orderBy('day_numeric')
            ->orderBy('start_time')
            ->get();

        return Inertia::render('Schedule/Index', [
            'schedules' => $schedules,
            'lastUpdate' => $lastUpdate,
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Schedule/Dashboard/Index', [
            'schedules' => Schedule::with('course.lecturer', 'course.semester')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Schedule/Dashboard/Create', [
            'courses' => Course::leftJoin('schedules', 'courses.id', '=', 'schedules.course_id')
                ->whereNull('schedules.course_id')
                ->select('courses.*')
                ->orderBy('courses.name')
                ->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'day' => 'required|in:senin,selasa,rabu,kamis,jumat,sabtu',
            'day_numeric' => 'required|integer|between:1,6',
            'start_time' => 'required|date_format:H:i',
            'room' => 'required|string|max:10|min:3',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'course_id' => 'required|exists:courses,id',
        ]);

        Schedule::create($validated);

        return redirect()->route('dashboard.schedule.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedule)
    {
        return Inertia::render('Schedule/Dashboard/Edit', [
            'schedule' => $schedule,
            'courses' => Course::where('id', $schedule->course_id)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedule)
    {
        $validated = $request->validate([
            'day' => 'required|in:senin,selasa,rabu,kamis,jumat,sabtu',
            'day_numeric' => 'required|integer|between:1,6',
            'start_time' => 'required|date_format:H:i',
            'room' => 'required|string|max:10|min:3',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'course_id' => 'required|exists:courses,id',
        ]);


        $schedule->update($validated);

        return redirect()->route('dashboard.schedule.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        $schedule->delete();

        return redirect()->route('dashboard.schedule.index');
    }
}
