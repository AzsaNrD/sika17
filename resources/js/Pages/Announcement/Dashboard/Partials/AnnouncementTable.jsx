import React from "react";
import { Link } from "@inertiajs/react";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { dateTime } from "@/Helpers/dateTime";

export default function AnnouncementTable({ announcements, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-[#BABABA]">
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            JUDUL
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            DIPOSTING OLEH
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            TANGGAL
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            EDIT
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {announcements.data.map((item, index) => (
                        <tr
                            className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                            key={index}
                        >
                            <td className="px-3 py-5 text-sm text-slate-grey">
                                {item.title}
                            </td>
                            <td className="px-3 py-5 text-sm text-slate-grey">
                                {item.user.name}
                            </td>
                            <td className="px-3 py-5 text-sm text-slate-grey">
                                {dateTime(item.created_at).date} {" | "}{" "}
                                {dateTime(item.created_at).time} {" WIB"}
                            </td>
                            <td className="flex items-center justify-center h-full py-5 text-lg gap-7 text-slate-grey">
                                <Link
                                    href={route(
                                        "dashboard.announcement.edit",
                                        item.slug
                                    )}
                                >
                                    <RxPencil2 />
                                </Link>
                                <button
                                    onClick={() =>
                                        onDelete(item.title, item.slug)
                                    }
                                >
                                    <RxTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
