import { Link } from "@inertiajs/react";
import React from "react";

export default function Announcements() {
    return (
        <div>
            <h2 className="text-xl font-bold text-gunmetal">PENGUMUMAN</h2>
            <p className="text-sm text-slate-grey mt-4">
                Menampilkan <span className="text-gunmetal font-bold">6</span>{" "}
                hasil
            </p>

            <div className="mt-4 flex flex-col gap-4">
                {[
                    {
                        title: "Jadwal Kursus LepKom",
                        link: "/tugas",
                        date: "02 Mei 2024",
                        author: "Azsa Nurwahyudi",
                    },
                    {
                        title: "Pembaruan Jadwal: Perubahan jadwal kuliah pada tanggal 15 April 2024.",
                        link: "/tugas",
                        date: "02 Mei 2024",
                        author: "Azsa Nurwahyudi",
                    },
                    {
                        title: "Pengisian KRS",
                        link: "/tugas",
                        date: "02 Mei 2024",
                        author: "Azsa Nurwahyudi",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal p-7 rounded-[5px]"
                    >
                        <div className="flex items-center justify-between px-7">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-silver">
                                    {item.date} by {item.author}
                                </p>
                                <p className="text-slate-grey font-medium">
                                    {item.title}
                                </p>
                            </div>
                            <div>
                                <Link
                                    className="text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 py-2 px-4 rounded-[5px] text-sm"
                                    href={item.link}
                                >
                                    Lihat Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
