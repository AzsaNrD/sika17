import { dateTime } from "@/Helpers/dateTime";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Schedule({ schedules, lastUpdate }) {
    return (
        <AppLayout title="Jadwal Kuliah">
            <main className="max-w-5xl px-4 mx-auto my-10 sm:my-16 lg:px-0 min-h-svh">
                <section>
                    <h2 className="text-xl font-bold text-gunmetal">
                        JADWAL PERKULIAHAN
                    </h2>
                    {schedules.length !== 0 ? (
                        <p className="mt-4 text-sm text-slate-grey">
                            <span>[ * ] Mata Kuliah Ujian Utama</span>
                            <br />
                            <span>
                                [ ** ] Mata Kuliah Praktikum Penunjang (Mata
                                Kuliah ini{" "}
                                <span className="font-bold">wajib</span> diikuti
                                dengan praktikumnya)
                            </span>
                        </p>
                    ) : (
                        <p className="mt-4 text-slate-grey">
                            Jadwal belum tersedia.
                        </p>
                    )}
                </section>
                <section>
                    {schedules.length !== 0 && (
                        <div className="bg-lilac-grey shadow-universal rounded-[5px] mt-4">
                            <div className="px-6 pt-5 pb-8 overflow-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="border-b border-[#BABABA]">
                                            <th className="px-3 py-3 text-sm font-medium text-left uppercase text-gunmetal">
                                                Hari
                                            </th>
                                            <th className="px-3 py-3 text-sm font-medium text-left uppercase text-gunmetal">
                                                Mata Kuliah
                                            </th>
                                            <th className="px-3 py-3 text-sm font-medium text-left uppercase text-gunmetal">
                                                Waktu
                                            </th>
                                            <th className="px-3 py-3 text-sm font-medium text-left uppercase text-gunmetal">
                                                Ruang
                                            </th>
                                            <th className="px-3 py-3 text-sm font-medium text-left uppercase text-gunmetal">
                                                Dosen
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schedules.map(
                                            (item, index) => (
                                                <tr
                                                    className="border-b border-[#DEDEDE]"
                                                    key={index}
                                                >
                                                    <td className="px-3 py-5 text-sm capitalize truncate text-slate-grey">
                                                        {item.day}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.course.name}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.start_time.substring(0,5)} - {item.end_time.substring(0,5)}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.room}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.course.lecturer ? item.course.lecturer.name : "-"}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <p className="mt-8 text-sm text-slate-grey">
                        Terakhir diupdate pada {dateTime(lastUpdate).date}. Informasi terbaru silakan
                        kunjungi
                        <a
                            href="http://baak.gunadarma.ac.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 hover:underline text-blue-violet"
                        >
                            BAAK
                        </a>
                    </p>
                </section>
            </main>
        </AppLayout>
    );
}
