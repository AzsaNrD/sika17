import React from "react";
import PaginationLinks from "../Molecules/PaginationLinks";
import AnnouncementList from "./AnnouncementList";

export default function Announcements({ announcements }) {
    console.log(announcements);
    return (
        <div>
            <h2 className="text-xl font-bold text-gunmetal">PENGUMUMAN</h2>
            <p className="mt-4 text-sm text-slate-grey">
                Menampilkan{" "}
                <span className="font-bold text-gunmetal">
                    {announcements.total}
                </span>{" "}
                hasil
            </p>

            <div className="mt-4">
                <AnnouncementList announcements={announcements} />
            </div>
            <div className="flex items-center justify-center gap-3 mt-11">
                <PaginationLinks links={announcements.links} currentPage={announcements.current_page} lastPage={announcements.last_page} />
            </div>
        </div>
    );
}
