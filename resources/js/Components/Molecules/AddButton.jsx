import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function AddButton({ route, label }) {
    return (
        <Link
            href={route}
            className="flex items-center justify-center font-semibold tracking-wide gap-2 shadow-md hover:shadow-lg text-xs text-lilac-grey border-blue-violet bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 rounded-[5px] py-2 px-4"
        >
            <FaPlus />
            {label}
        </Link>
    );
}
