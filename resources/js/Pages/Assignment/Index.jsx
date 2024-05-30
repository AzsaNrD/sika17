import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import AssignmentCard from "@/Components/Organisms/AssignmentCard";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Index({ assignments }) {
    return (
        <AppLayout title="Tugas">
            <main className="max-w-5xl px-4 mx-auto my-10 sm:my-16 lg:px-0 min-h-svh">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        DAFTAR TUGAS
                    </h2>
                    {assignments.data.length === 0 ? (
                        <p className="mt-4 text-sm text-slate-grey">
                            Belum ada tugas.
                        </p>
                    ) : (
                        <p className="mt-4 text-sm text-slate-grey">
                            Berikut adalah daftar tugas yang perlu diselesaikan. (sebaiknya jangan terlalu santai 💀)
                        </p>
                    )}
                </section>
                <section>
                    <div className="flex flex-col gap-4 mt-4">
                        {assignments.data.map((item, index) => (
                            <AssignmentCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-11">
                        <PaginationLinks
                            links={assignments.links}
                            currentPage={assignments.current_page}
                            lastPage={assignments.last_page}
                        />
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
