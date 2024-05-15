import { Link } from "@inertiajs/react";
import { FaAngleLeft } from "react-icons/fa6";

const BackButton = ({ href, label }) => {
    return (
        <Link
            href={href}
            className="flex items-center justify-center gap-2 px-5 py-2 mt-12 text-sm transition-all duration-200 rounded-full max-w-fit text-lilac-grey bg-blue-violet hover:bg-blue-violet/90"
        >
            <FaAngleLeft />
            {label}
        </Link>
    );
};

export default BackButton;
