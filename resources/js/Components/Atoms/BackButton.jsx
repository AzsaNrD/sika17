import { Link } from "@inertiajs/react";

const BackButton = ({ href, label, className }) => {
    return (
        <Link
            href={href}
            className={"flex items-center justify-center tracking-wider uppercase gap-2 px-5 py-2 mt-12 text-xs transition-all duration-200 rounded-[5px] max-w-fit text-lilac-grey bg-blue-violet hover:bg-blue-violet/90 " + className}
        >
            {label}
        </Link>
    );
};

export default BackButton;
