import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function CoursePage({ semesters }) {
    console.log(semesters);
    return (
        <AppLayout title="Mata Kuliah">
            <main className="max-w-5xl px-4 mx-auto my-10 sm:my-16 lg:px-0 min-h-svh">
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
                    <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {semesters.map((item, index) => (
                            <Link
                                key={index}
                                className="text-blue-violet font-semibold text-center bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-4 px-4 text-sm border border-blue-violet"
                                href={route("course.show", {
                                    name: item.name,
                                })}
                            >
                                SEMESTER {item.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
