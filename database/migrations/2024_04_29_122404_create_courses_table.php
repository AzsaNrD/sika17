<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->tinyInteger('sks');
            $table->tinyInteger('semester');
            $table->enum('type', ['wajib', 'ujian utama'])->default('wajib');
            $table->string('vclass')->nullable();
            $table->string('material_url')->nullable();
            $table->string('rps')->nullable();
            $table->foreignId('lecturer_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
