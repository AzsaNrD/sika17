import React from "react";
import { Link } from "@inertiajs/react";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { dateTime } from "@/Helpers/dateTime";
import EditButton from "@/Components/Atoms/EditButton";
import DeleteButton from "@/Components/Atoms/DeleteButton";

export default function AnnouncementTable({ announcements, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-[#BABABA]">
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            #
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                            JUDUL
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                            DIPOSTING OLEH
                        </th>
                        <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                            TANGGAL
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
                                {index + 1}.
                            </td>
                            <td className="px-3 py-5 text-sm break-words truncate max-w-96 text-slate-grey">
                                {item.title}
                            </td>
                            <td className="px-3 py-5 text-sm text-slate-grey">
                                {item.user.name}
                            </td>
                            <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                {dateTime(item.created_at).date} {" - "}{" "}
                                {dateTime(item.created_at).time} {" WIB"}
                            </td>
                            <td className="flex items-center justify-center h-full gap-5 py-5 mx-3 text-lg text-slate-grey">
                                <EditButton
                                    route={route(
                                        "dashboard.announcement.edit",
                                        item.id
                                    )}
                                />
                                <DeleteButton
                                    onDelete={() =>
                                        onDelete(item.title, item.id)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
