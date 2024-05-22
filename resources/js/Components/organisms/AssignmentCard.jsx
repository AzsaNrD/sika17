import React, { useState } from "react";
import { PiCalendarBlank } from "react-icons/pi";
import { dateTime } from "@/Helpers/dateTime";
import Modal from "../Modal";
import SecondaryButton from "../SecondaryButton";

export default function AssignmentCard({
    course,
    description,
    due_date,
    submission_link,
}) {
    const [openModal, setOpenModal] = useState(false);
    const { date, time, isPassed, isNull } = dateTime(due_date);

    return (
        <div className="bg-lilac-grey hover:bg-[#FDFBFF] transition-all gap-5 duration-200 shadow-universal rounded-[5px] flex flex-col md:flex-row justify-between md:items-center md:gap-0 py-7 px-7 md:px-14">
            <div>
                <div className="flex flex-col gap-2 md:items-center md:flex-row">
                    <h3 className="order-2 text-lg font-medium md:mt-2 md:order-1 text-gunmetal">
                        {course.name}
                    </h3>
                    {isPassed && (
                        <p className="text-lilac-grey w-fit order-1 md:order-2 bg-[#CF6464] rounded-full text-xs py-1 px-2">
                            ⚠️ lewat tenggat waktu!
                        </p>
                    )}
                </div>
                <p className="md:w-[420px] lg:w-[550px] xl:w-[640px] mt-2 text-sm break-all text-slate-grey">
                    {description}
                </p>
                {isNull ? (
                    <p className="mt-8 text-sm font-light text-slate-grey">
                        Tugas ini belum memiliki batas waktu penyelesaian yang
                        ditetapkan.
                    </p>
                ) : (
                    <div className="flex gap-4 mt-5 md:mt-8">
                        <div className="flex items-center gap-2 text-slate-grey">
                            <PiCalendarBlank className="text-base" />
                            <p className="text-sm">{date}</p>|
                            <p className="text-sm">{time} WIB</p>
                        </div>
                    </div>
                )}
            </div>
            <hr className="border-zinc-200 md:hidden" />
            {submission_link ? (
                <a
                    className="text-blue-violet cursor-pointer inline-block md:w-fit text-center md:text-left w-full bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                    href={submission_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Kumpulkan Tugas
                </a>
            ) : (
                <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="text-blue-violet cursor-pointer inline-block md:w-fit text-center md:text-left w-full bg-lilac hover:bg-[#E2D1F9] transition-all duration-200 rounded-[5px] py-2 px-4 text-sm"
                >
                    Kumpulkan Tugas
                </button>
            )}

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className="p-6">
                    <p className="mb-5 text-gray-600">
                        Tautan untuk mengumpulkan tugas belum tersedia saat ini.
                        Harap cek kembali nanti atau hubungi ketua kelas untuk
                        informasi lebih lanjut.
                    </p>

                    <div className="flex justify-end">
                        <SecondaryButton onClick={() => setOpenModal(false)}>
                            tutup
                        </SecondaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
