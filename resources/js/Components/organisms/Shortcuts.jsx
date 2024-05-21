import { Link } from "@inertiajs/react";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function Shortcuts({ shortcuts }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-gunmetal">MENU PINTASAN</h2>
            <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-3 lg:grid-cols-4">
                <Link
                    href={route("home")}
                    className="text-slate-grey px-2 font-medium text-center bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal rounded-[5px] py-4  flex items-center justify-center gap-2"
                >
                    Scribd Viewer
                    <LuArrowUpRight className="hidden sm:inline" />
                </Link>
                {shortcuts.map((item, index) => (
                    <a
                        key={index}
                        className="text-slate-grey px-2 font-medium text-center bg-lilac-grey hover:bg-[#FDFBFF] transition-all duration-200 shadow-universal rounded-[5px] py-4 flex items-center justify-center gap-2"
                        href={item.url}
                        target="_blank"
                    >
                        {item.title}
                        <LuArrowUpRight className="hidden sm:inline" />
                    </a>
                ))}
            </div>
        </div>
    );
}
