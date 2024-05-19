<?php

namespace App\Http\Controllers;

use App\Models\Announcements;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AnnouncementsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function adminIndex()
    {
        return Inertia::render("Announcement/Dashboard/Index", [
            'announcements' => Announcements::with('user')->orderByDesc('created_at')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render("Announcement/Dashboard/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|min:4',
            'body' => 'required|string|min:10',
        ]);

        $validated['user_id'] = Auth::id();
        $validated['slug'] = Str::slug($validated['title']);

        Announcements::create($validated);

        return redirect()->route('dashboard.announcement.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcements $announcement)
    {
        return Inertia::render("Announcement/Show", [
            'announcement' => $announcement->load('user')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Announcements $announcement)
    {
        return Inertia::render("Announcement/Dashboard/Edit", [
            'announcement' => $announcement
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Announcements $announcement)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|min:4',
            'body' => 'required|string|min:10',
        ]);

        $announcement->update($validated);

        return redirect()->route('dashboard.announcement.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcements $announcement)
    {
        $announcement->delete();

        return redirect()->route('dashboard.announcement.index');
    }
}
