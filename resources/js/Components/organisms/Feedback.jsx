import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Feedback() {
    return (
        <div className="bg-gradient-to-r from-blue-violet to-[#A357B7] rounded-[5px] p-16 flex items-center justify-center gap-44">
            <div className="flex flex-col gap-3">
                <h2 className="text-[32px] font-bold text-lilac-grey">
                    Feedback
                </h2>
                <p className="text-lilac-grey">
                    Ingin memberikan masukan atau kritik untuk meningkatkan
                    situs web ini? Kami sangat menghargai setiap pendapat Anda!
                </p>
            </div>
            <a
                className="bg-lilac-grey hover:bg-lilac-grey/95 transition-all duration-200 min-w-60 text-slate-grey rounded-[5px] py-3 shadow-[0_4px_4px_0_rgba(106, 106, 106, 0.25)] text-center flex items-center justify-center gap-4 font-medium"
                href=""
            >
                Beri Masukan Anda <FaAngleRight />
            </a>
        </div>
    );
}
