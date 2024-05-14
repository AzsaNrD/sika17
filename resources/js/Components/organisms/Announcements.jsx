import { Link } from "@inertiajs/react";
import React from "react";

export default function Announcements() {
    return (
        <div>
            <h2 className="text-xl font-bold text-gunmetal">PENGUMUMAN</h2>
            <p className="mt-4 text-sm text-slate-grey">
                Menampilkan <span className="font-bold text-gunmetal">6</span>{" "}
                hasil
            </p>

            <div className="flex flex-col gap-4 mt-4">
                {[
                    {
                        title: "Jadwal Kursus LepKom",
                        slug: 'hello-world',
                        link: "/tugas",
                        date: "02 Mei 2024",
                        author: "Azsa Nurwahyudi",
                    },
                    {
                        title: "Pembaruan Jadwal: Perubahan jadwal kuliah pada tanggal 15 April 2024.",
                        slug: 'hello-world',
                        link: "/tugas",
                        date: "02 Mei 2024",
                        author: "Azsa Nurwahyudi",
                    },
                    {
                        title: "Pengisian KRS",
                        slug: 'hello-world',
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
                                <h2 className="font-medium text-slate-grey">
                                    {item.title}
                                </h2>
                            </div>
                            <div>
                                <Link
                                    className="text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4  text-sm"
                                    href={route("announcement.show", item.slug)}
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
