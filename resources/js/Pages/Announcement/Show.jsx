import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import { LuDot } from "react-icons/lu";

export default function Show() {
    return (
        <AppLayout title="Pengumuman">
            <main className="max-w-5xl mx-auto mt-16 mb-20 min-h-svh">
                <section>
                    <div className="flex items-center gap-1 text-sm select-none text-slate-grey">
                        <Link href={route("home")}>Beranda</Link>
                        <LuDot />
                        <span>Pengumuman</span>
                    </div>
                </section>
                <article className="mt-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gunmetal">
                            Pelaksaan Perkuliahan LURING Semester ATA 23/24
                        </h2>
                        <p className="mt-2 text-sm text-slate-grey">
                            By Admin - 16/04/2024
                        </p>
                    </header>
                    <div className="mt-6">
                        <p className="w-10/12 text-neutral-600">
                            [Reposted from BAAK] Sehubungan dengan akan
                            dimulainya Pelaksanaan Perkuliahan pada semester
                            Genap (ATA) 2023/2024 untuk semua mahasiswa program
                            studi jenjang Diploma Tiga (D3) dan Sarjana (S1),
                            maka dengan ini kami beritahukan hal-hal yang
                            berkaitan dengan pelaksanaan perkuliahan tersebut
                            sebagai berikut :1. Perkuliahan dilaksanakan secara
                            LURING (TATAP MUKA) untuk semua mata kuliah dan akan
                            dimulai pada hari Rabu, 13 Maret 2024.2. Mata kuliah
                            Unggulan atau mata kuliah "Team Teaching" akan
                            dilaksanakan melalui UGTV. Informasi jadwal dan
                            frekuensi penayangannya akan diberitahukan kemudian
                            melalui web BAAK.Demikianlah pengumuman ini
                            disampaikan untuk dilaksanakan dengan
                            sebaik-baiknya. Depok, 5 Maret 2024B A A K
                        </p>
                    </div>
                </article>
            </main>
        </AppLayout>
    );
}
