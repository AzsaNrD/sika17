import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import CourseCard from "@/Components/Organisms/CourseCard";
import { RxCaretRight } from "react-icons/rx";

export default function Show({ courses, semester }) {
    console.log(courses);
    return (
        <AppLayout title="Mata Kuliah">
            <main className="max-w-5xl px-4 mx-auto my-10 sm:my-16 lg:px-0 min-h-svh">
                <section>
                    <div className="flex items-center gap-1 text-sm select-none text-slate-grey">
                        <Link href={route("course.index")} className="text-blue-violet">Mata Kuliah</Link>
                        <RxCaretRight className="text-blue-violet" />
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
                        {courses.length === 0 ? (
                            <div className="flex overflow-x-hidden text-sm text-slate-grey">
                                <span>Belum ada mata kuliah.</span>
                            </div>
                        ) : (
                            courses.map((item, index) => (
                                <CourseCard
                                    key={index}
                                    title={item.name}
                                    lecturer={item.lecturer?.name || ""}
                                    staffsite={item.lecturer?.staffsite || ""}
                                    materialLink={item.material_url || ""}
                                    rpsLink={item.rps || ""}
                                    vclassLink={item.vclass || ""}
                                />
                            ))
                        )}
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
