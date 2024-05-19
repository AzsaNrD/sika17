import React from "react";
import { Link } from "@inertiajs/react";
import { dateTime } from "@/Helpers/dateTime";

const AnnouncementList = ({ announcements }) => {
    return (
        <div className="flex flex-col gap-4 ">
            {announcements.data.map((item, index) => (
                <div
                    key={index}
                    className="bg-lilac-grey overflow-hidden hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal p-7 rounded-[5px]"
                >
                    <div className="flex flex-col justify-between gap-2 px-0 md:gap-0 md:items-center md:flex-row md:px-7">
                        <div className="flex flex-col w-9/12 gap-2">
                            <p className="text-xs text-silver">
                                {dateTime(item.created_at).date} by{" "}
                                {item.user.role === "Super Admin"
                                    ? "Admin"
                                    : item.user.role}
                            </p>
                            <h2 className="font-medium uppercase text-slate-grey">
                                {item.title}
                            </h2>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                className="text-blue-violet max-w-fit inline-block bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4  text-sm"
                                href={route("announcement.show", item.slug)}
                            >
                                Lihat Detail
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnnouncementList;
