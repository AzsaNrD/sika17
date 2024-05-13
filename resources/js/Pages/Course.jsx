import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Course() {
    return (
        <AppLayout title="Mata Kuliah">
            <main className="max-w-5xl mx-auto mt-16 mb-20 min-h-svh">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        MATA KULIAH
                    </h2>
                    <p className="mt-4 text-sm text-slate-grey">
                        Di bawah ini, Anda dapat memilih semester yang ingin
                        Anda lihat untuk melihat daftar mata kuliah yang
                        tersedia.
                    </p>
                </section>
                <section>
                    <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 lg:grid-cols-4">
                        {[0, 1, 2, 3, 4].map((item, index) => (
                            <Link
                                className="text-blue-violet font-semibold text-center bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-4 px-4 text-sm border border-blue-violet"
                                href={route("course.semester1")}
                            >
                                SEMESTER {index + 1}
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
