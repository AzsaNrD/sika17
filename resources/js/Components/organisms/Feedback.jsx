import React from "react";
import { RxChevronRight } from "react-icons/rx";

export default function Feedback() {
    return (
        <div className="bg-gradient-to-r overflow-auto from-blue-violet to-[#A357B7] rounded-[5px] p-7 md:p-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 lg:gap-44">
            <div className="flex flex-col gap-3">
                <h2 className="text-[32px] font-bold text-lilac-grey">
                    Feedback
                </h2>
                <p className="text-lilac-grey">
                    Punya pertanyaan, masukan, atau saran untuk meningkatkan
                    situs web ini? Kami sangat menghargai setiap pendapat Anda!
                </p>
            </div>
            <a
                className="bg-lilac-grey text-sm hover:bg-lilac-grey/95 transition-all duration-200 px-6 md:px-0 md:min-w-60 text-slate-grey rounded-[5px] py-2 md:py-3 shadow-[0_4px_4px_0_rgba(106, 106, 106, 0.25)] text-center flex items-center justify-center gap-4 font-medium"
                href="https://14twxqdq5q9.typeform.com/to/Kx7obbKu"
                target="_blank"
                rel="noopener noreferrer"
            >
                Beri Masukan Anda <RxChevronRight className="font-bold" />
            </a>
        </div>
    );
}
