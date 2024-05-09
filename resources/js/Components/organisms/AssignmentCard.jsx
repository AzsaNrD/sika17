import React from "react";
import { PiCalendarBlank, PiClockCountdown } from "react-icons/pi";
import { dateTime } from "@/Helpers/dateTime";

export default function AssignmentCard({
    title,
    description,
    deadline,
    submission_link,
}) {
    const { date, time, isPassed, isNull } = dateTime(deadline);

    return (
        <div className="bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal rounded-[5px] flex justify-between items-center py-7 px-14">
            <div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="font-medium text-xl text-gunmetal">
                            {title}
                        </h3>
                        {isPassed && (
                            <p className="text-lilac-grey bg-[#CF6464] rounded-full text-xs py-1 px-2">
                                Lewat tenggal waktu!
                            </p>
                        )}
                    </div>
                    <p className="mt-2 text-slate-grey text-sm">
                        {description}
                    </p>
                </div>
                {isNull ? (
                    <p className="text-sm font-light text-slate-grey mt-8">
                        Tugas ini belum memiliki batas waktu penyelesaian yang
                        ditetapkan.
                    </p>
                ) : (
                    <div className="mt-8 flex gap-4">
                        <div className="text-slate-grey flex gap-2 items-center">
                            <PiCalendarBlank className="text-base" />
                            <p className="text-sm">{date}</p>
                        </div>
                        <div className="text-slate-grey flex gap-2 items-center">
                            <PiClockCountdown className="text-base" />
                            <p className="text-sm">{time}</p>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <a
                    className="text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4  text-sm"
                    href={submission_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Kumpulkan Tugas
                </a>
            </div>
        </div>
    );
}
