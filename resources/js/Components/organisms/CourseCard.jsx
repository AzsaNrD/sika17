import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function CourseCard({
    title,
    lecturer,
    staffsite,
    materialLink,
    rpsLink,
    vclassLink,
}) {
    return (
        <div className="bg-lilac-grey hover:bg-[#FDFBFF] overflow-auto transition-all duration-200 shadow-universal rounded-[5px] p-7 md:py-5 md:px-10">
            <div>
                <h3 className="font-semibold text-gunmetal">{title}</h3>
                {lecturer && (
                    <p className="mt-1 text-sm text-slate-grey">
                        Dosen:{" "}
                        {staffsite ? (
                            <a
                                href={staffsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {lecturer}
                            </a>
                        ) : (
                            <span>{lecturer}</span>
                        )}
                    </p>
                )}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
                {materialLink && (
                    <a
                        href={materialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                    >
                        Materi Kuliah <LuArrowUpRight />
                    </a>
                )}
                {rpsLink && (
                    <a
                        href={rpsLink}
                        target="_blank"
                        rel="noopener noreferer"
                        className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                    >
                        RPS <LuArrowUpRight />
                    </a>
                )}
                {vclassLink && (
                    <a
                        href={vclassLink}
                        target="_blank"
                        rel="noopener noreferer"
                        className="flex items-center justify-center gap-2 text-blue-violet bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                    >
                        Vclass <LuArrowUpRight />
                    </a>
                )}
            </div>
        </div>
    );
}
