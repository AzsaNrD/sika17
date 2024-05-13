import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { LuDot } from "react-icons/lu";
import { Link } from "@inertiajs/react";
import CourseCard from "@/Components/Organisms/CourseCard";

export default function SemesterCourse({ semester }) {
    return (
        <AppLayout title="Mata Kuliah">
            <main className="max-w-5xl mx-auto mt-16 mb-20 min-h-svh">
                <section>
                    <div className="flex items-center gap-1 text-sm select-none text-slate-grey">
                        <Link href={route("course.index")}>Mata Kuliah</Link>
                        <LuDot />
                        <span>Semester {semester}</span>
                    </div>
                </section>
                <section>
                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-gunmetal">
                            SEMESTER {semester}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
                        {[0, 1, 2, 3].map((item, index) => (
                            <CourseCard
                                key={index}
                                title="Pengantar Akuntansi Keuangan"
                                lecturer="Ichsani Mursidah"
                                materialLink=""
                                rpsLink=""
                                vclassLink=""
                            />
                        ))}
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
