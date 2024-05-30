import React from "react";

export default function DeleteButton({ onDelete }) {
    return (
        <button
            onClick={onDelete}
            className="px-3 py-1 text-xs font-semibold tracking-widest transition-all duration-200 bg-red-500 rounded shadow-sm hover:bg-red-600 hover:shadow-md text-red-50"
        >
            HAPUS
        </button>
    );
}
