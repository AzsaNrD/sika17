<?php

use App\Http\Controllers\AnnouncementsController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Models\Announcements;
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
    Route::get('/pengumuman', [AnnouncementsController::class, 'adminIndex'])->name('announcement.index');
    Route::get('/pengumuman/create', [AnnouncementsController::class, 'create'])->name('announcement.create');
    Route::post('/pengumuman', [AnnouncementsController::class, 'store'])->name('announcement.store');
    Route::get('/pengumuman/{announcement:slug}/edit', [AnnouncementsController::class, 'edit'])->name('announcement.edit');
    Route::put('/pengumuman/{announcement:slug}', [AnnouncementsController::class, 'update'])->name('announcement.update');
    Route::delete('/pengumuman/{announcement:slug}', [AnnouncementsController::class, 'destroy'])->name('announcement.destroy');
});

// Route: Halaman Utama
Route::get('/', function () {
    $announcements = Announcements::with('user')->orderByDesc('created_at')->paginate(3);
    // $announcements['links']

    return Inertia::render('Home', [
        'announcements' => $announcements,
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
