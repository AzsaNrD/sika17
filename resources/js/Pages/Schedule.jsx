import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Schedule() {
    return (
        <AppLayout title="Jadwal Kuliah">
            <main className="min-h-svh mt-16 mb-20 max-w-5xl mx-auto">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        JADWAL PERKULIAHAN
                    </h2>
                    <p className="text-sm text-slate-grey mt-4">
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
                        <div className="py-10 px-6">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-[#BABABA]">
                                        <th className="py-3 md:min-w-20 text-left text-lg font-medium text-gunmetal">
                                            Hari
                                        </th>
                                        <th className="py-3 text-left text-lg font-medium text-gunmetal">
                                            Mata Kuliah
                                        </th>
                                        <th className="py-3 text-left text-lg font-medium text-gunmetal">
                                            Waktu
                                        </th>
                                        <th className="py-3 text-left text-lg font-medium text-gunmetal">
                                            Ruang
                                        </th>
                                        <th className="py-3 text-left text-lg font-medium text-gunmetal">
                                            Dosen
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
                                        (item, index) => (
                                            <tr className="border-b border-[#DEDEDE]">
                                                <td className="text-slate-grey text-sm py-5">
                                                    Senin
                                                </td>
                                                <td className="text-slate-grey text-sm py-5">
                                                    Praktikum Sistem Basis Data
                                                    2
                                                </td>
                                                <td className="text-slate-grey text-sm py-5">
                                                    07:30 - 09:30
                                                </td>
                                                <td className="text-slate-grey text-sm py-5">
                                                    H441
                                                </td>
                                                <td className="text-slate-grey text-sm py-5">
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
                            className="underline text-blue-violet ml-1"
                        >
                            BAAK
                        </a>
                    </p>
                </section>
            </main>
        </AppLayout>
    );
}
