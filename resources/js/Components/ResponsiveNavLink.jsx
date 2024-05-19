import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-blue-violet text-blue-violet bg-violet-50 focus:text-violet-800 focus:bg-violet-100 focus:border-violet-700'
                    : 'border-transparent text-gray-600 hover:text-blue-violet hover:bg-lilac hover:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
