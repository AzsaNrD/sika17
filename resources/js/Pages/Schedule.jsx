import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Schedule() {
    return (
        <AppLayout title="Jadwal Kuliah">
            <main className="max-w-5xl mx-auto mt-16 mb-20 min-h-svh">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        JADWAL PERKULIAHAN
                    </h2>
                    <p className="mt-4 text-sm text-slate-grey">
                        <span>[ * ] Mata Kuliah Ujian Utama</span>
                        <br />
                        <span>
                            [ ** ] Mata Kuliah Praktikum Penunjang (Mata Kuliah
                            ini <span className="font-bold">wajib</span> diikuti
                            dengan praktikumnya)
                        </span>
                    </p>
                </section>
                <section>
                    <div className="bg-lilac-grey shadow-universal rounded-[5px] mt-4">
                        <div className="px-6 py-10">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-[#BABABA]">
                                        <th className="py-3 text-lg font-medium text-left md:min-w-20 text-gunmetal">
                                            Hari
                                        </th>
                                        <th className="py-3 text-lg font-medium text-left text-gunmetal">
                                            Mata Kuliah
                                        </th>
                                        <th className="py-3 text-lg font-medium text-left text-gunmetal">
                                            Waktu
                                        </th>
                                        <th className="py-3 text-lg font-medium text-left text-gunmetal">
                                            Ruang
                                        </th>
                                        <th className="py-3 text-lg font-medium text-left text-gunmetal">
                                            Dosen
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
                                        (item, index) => (
                                            <tr className="border-b border-[#DEDEDE]" key={index}>
                                                <td className="py-5 text-sm text-slate-grey">
                                                    Senin
                                                </td>
                                                <td className="py-5 text-sm text-slate-grey">
                                                    Praktikum Sistem Basis Data
                                                    2
                                                </td>
                                                <td className="py-5 text-sm text-slate-grey">
                                                    07:30 - 09:30
                                                </td>
                                                <td className="py-5 text-sm text-slate-grey">
                                                    H441
                                                </td>
                                                <td className="py-5 text-sm text-slate-grey">
                                                    Tim Praktikum
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="mt-8 text-slate-grey">
                        Terakhir diupdate 16-04-2024. Informasi terbaru silakan
                        kunjungi
                        <a
                            href="http://baak.gunadarma.ac.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 underline text-blue-violet"
                        >
                            BAAK
                        </a>
                    </p>
                </section>
            </main>
        </AppLayout>
    );
}
