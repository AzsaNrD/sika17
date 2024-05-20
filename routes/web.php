<?php

use App\Http\Controllers\AnnouncementsController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\ShortcutController;
use App\Models\Announcements;
use App\Models\Shortcut;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route: Pengumuman
Route::get('/pengumuman/{announcement:slug}', [AnnouncementsController::class, 'show'])->name('announcement.show');

// Route: Dashboard
Route::middleware(['auth', 'role:Admin', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('index');

    // Route: Pengelolaan Pengumuman
    Route::prefix('pengumuman')->name('announcement.')->group(function () {
        Route::get('/', [AnnouncementsController::class, 'adminIndex'])->name('index');
        Route::get('/create', [AnnouncementsController::class, 'create'])->name('create');
        Route::post('/', [AnnouncementsController::class, 'store'])->name('store');
        Route::get('/{announcement:slug}/edit', [AnnouncementsController::class, 'edit'])->name('edit');
        Route::put('/{announcement:slug}', [AnnouncementsController::class, 'update'])->name('update');
        Route::delete('/{announcement:slug}', [AnnouncementsController::class, 'destroy'])->name('destroy');
    });

    // Route: Pengelolaan Menu Pintasan
    Route::prefix('menu-pintasan')->name('shortcut.')->group(function () {
        Route::get('/', [ShortcutController::class, 'index'])->name('index');
        Route::get('/create', [ShortcutController::class, 'create'])->name('create');
        Route::post('/', [ShortcutController::class, 'store'])->name('store');
        Route::get('/{shortcut:id}/edit', [ShortcutController::class, 'edit'])->name('edit');
        Route::put('/{shortcut:id}', [ShortcutController::class, 'update'])->name('update');
        Route::delete('/{shortcut:id}', [ShortcutController::class, 'destroy'])->name('destroy');
    });
});

// Route: Halaman Utama
Route::get('/', function () {
    return Inertia::render('Home', [
        'announcements' => Announcements::with('user')->orderByDesc('created_at')->paginate(3),
        'shortcuts' => Shortcut::orderBy('title')->get(),
    ]);
})->name("home");

// Route: Tugas
Route::get('/tugas', [AssignmentController::class, 'index'])->name('assignment');

// Route: Jadwal Kuliah
Route::get('/jadwal-kuliah', [ScheduleController::class, 'index'])->name('schedule');

// Route: Mata Kuliah
Route::prefix('mata-kuliah')->name('course.')->group(function () {
    Route::get('/', [CourseController::class, 'index'])->name('index');
    Route::get('/{course:semester}', [CourseController::class, 'show'])->name('show');
});

// Route: Profile
Route::middleware('auth')->prefix('profile')->name('profile.')->group(function () {
    Route::get('/', [ProfileController::class, 'edit'])->name('edit');
    Route::patch('/', [ProfileController::class, 'update'])->name('update');
    Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
});


require __DIR__ . '/auth.php';
