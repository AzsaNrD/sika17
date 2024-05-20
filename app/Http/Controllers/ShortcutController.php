<?php

namespace App\Http\Controllers;

use App\Models\Shortcut;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShortcutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Shortcut/Index', [
            'shortcuts' => Shortcut::paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Shortcut/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|min:3',
            'url' => 'required|string|max:255|url:http,https',
        ]);

        Shortcut::create($validated);

        return redirect()->route('dashboard.shortcut.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Shortcut $shortcut)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shortcut $shortcut)
    {
        return Inertia::render('Shortcut/Edit', [
            'shortcut' => $shortcut,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Shortcut $shortcut)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|min:3',
            'url' => 'required|string|max:255|url:http,https',
        ]);

        $shortcut->update($validated);

        return redirect()->route('dashboard.shortcut.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shortcut $shortcut)
    {
        $shortcut->delete();

        return redirect()->route('dashboard.shortcut.index');
    }
}
