import { Link } from "@inertiajs/react";
import React from "react";

export default function EditButton({ route }) {
    return (
        <Link
            href={route}
            className="px-3 py-1 text-xs font-semibold tracking-widest transition-all duration-200 rounded shadow-sm hover:shadow-md bg-cyan-500 hover:bg-cyan-600 text-cyan-50"
        >
            EDIT
        </Link>
    );
}
