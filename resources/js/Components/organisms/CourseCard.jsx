import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function CourseCard({
    title,
    lecturer,
    materialLink,
    rpsLink,
    vclassLink,
}) {
    return (
        <div className="bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal rounded-[5px] py-5 px-10">
            <div>
                <h3 className="font-semibold text-gunmetal">{title}</h3>
                <p className="mt-1 text-sm text-slate-grey">
                    Dosen: {lecturer}
                </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
                <a
                    href={materialLink}
                    className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                >
                    Materi Kuliah <LuArrowUpRight />
                </a>
                <a
                    href={rpsLink}
                    className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                >
                    RPS <LuArrowUpRight />
                </a>
                <a
                    href={vclassLink}
                    className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                >
                    Vclass <LuArrowUpRight />
                </a>
            </div>
        </div>
    );
}
