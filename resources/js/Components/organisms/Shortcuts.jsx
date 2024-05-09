import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function Shortcuts() {
    return (
        <div>
            <h2 className="text-xl font-bold text-gunmetal">MENU PINTASAN</h2>
            <div className="mt-6 flex flex-wrap gap-5">
                {[
                    {
                        name: "BAAK",
                        link: "https://www.gunadarma.ac.id",
                    },
                    {
                        name: "Student Site",
                        link: "https://www.gunadarma.ac.id",
                    },
                    {
                        name: "Virtual Class",
                        link: "https://www.gunadarma.ac.id",
                    },
                    {
                        name: "Praktikum iLab",
                        link: "https://www.gunadarma.ac.id",
                    },
                    {
                        name: "LepKom",
                        link: "https://www.gunadarma.ac.id",
                    },
                    {
                        name: "SAP",
                        link: "https://www.gunadarma.ac.id",
                    },
                ].map((item, index) => (
                    <a
                        key={index}
                        className="min-w-56 text-slate-grey font-medium text-center bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal rounded-[5px] py-4  flex items-center justify-center gap-2"
                        href={item.link}
                        target="_blank"
                    >
                        {item.name}
                        <LuArrowUpRight />
                    </a>
                ))}
            </div>
        </div>
    );
}
