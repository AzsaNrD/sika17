import AssignmentCard from "@/Components/organisms/AssignmentCard";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const dataAssignment = [
    {
        title: "Pengantar Akuntansi Keuangan",
        description:
            "Kerjakan buku paket akuntansi halaman 51. Menggunakan kertas folio",
        submission_link: "https://drive.google.com/drive/folders/10GvVhvwrahAJ-Tgs4rkozk6mlqDLysp9",
        deadline: "",
    },
    {
        title: "Pengantar Akuntansi Keuangan",
        description:
            "Kerjakan buku paket akuntansi halaman 51. Menggunakan kertas folio",
        submission_link: "https://drive.google.com/drive/folders/10GvVhvwrahAJ-Tgs4rkozk6mlqDLysp9",
        deadline: "2024-03-06 15:30:00",
    },
    {
        title: "Pengantar Akuntansi Keuangan",
        description:
            "Kerjakan buku paket akuntansi halaman 51. Menggunakan kertas folio",
        submission_link: "https://drive.google.com/drive/folders/10GvVhvwrahAJ-Tgs4rkozk6mlqDLysp9",
        deadline: "2024-05-06 15:30:00",
    },
    {
        title: "Pengantar Akuntansi Keuangan",
        description:
            "Kerjakan buku paket akuntansi halaman 51. Menggunakan kertas folio",
        submission_link: "https://drive.google.com/drive/folders/10GvVhvwrahAJ-Tgs4rkozk6mlqDLysp9",
        deadline: "2024-08-06 15:30:00",
    },
];

export default function () {
    return (
        <AppLayout title="Tugas">
            <main className="min-h-svh mt-16 mb-20 max-w-5xl mx-auto">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        DAFTAR TUGAS
                    </h2>
                    <p className="text-sm text-slate-grey mt-4">
                        Berikut adalah daftar tugas yang perlu diselesaikan.
                    </p>
                </section>
                <section>
                    <div className="flex flex-col gap-4 mt-4">
                        {dataAssignment.map((item, index) => (
                            <AssignmentCard key={index} {...item} />
                        ))}
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
