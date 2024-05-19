import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function PaginationLinks({ links, currentPage, lastPage }) {
    if (!links || links.length <= 3) return null;

    return (
        <div className="flex space-x-2">
            {links.map((item, index) => {
                if (item.label === "&laquo; Previous" && currentPage === 1) {
                    return null;
                }
                if (item.label === "Next &raquo;" && currentPage === lastPage) {
                    return null;
                }

                return (
                    <Link
                        key={index}
                        href={item.url}
                        className={
                            (item.active
                                ? "bg-blue-violet/90 text-lilac-grey"
                                : "text-blue-violet/90 bg-lilac") +
                            " hover:bg-blue-violet/90 shadow-nav hover:text-lilac-grey font-medium flex items-center transition-all duration-300 rounded-[5px] py-2 px-4 text-sm"
                        }
                    >
                        {item.label === "&laquo; Previous" && <FaChevronLeft className="w-3 h-3" />}
                        {item.label === "Next &raquo;" && <FaChevronRight className="w-3 h-3" />}
                        {item.label !== "&laquo; Previous" &&
                            item.label !== "Next &raquo;" &&
                            item.label}
                    </Link>
                );
            })}
        </div>
    );
}
