import { Link, usePage } from "@inertiajs/react";
import { LuLogIn } from "react-icons/lu";
import Dropdown from "@/Components/Dropdown";

const urls = [
    {
        title: "Beranda",
        name: "home",
        link: "/",
        component: "Announcement",
    },
    {
        title: "Tugas",
        name: "assignment",
        link: "/tugas",
        component: "Assignment",
    },
    {
        title: "Jadwal Kuliah",
        name: "schedule",
        link: "/jadwal-kuliah",
        component: "Schedule",
    },
    {
        title: "Mata Kuliah",
        name: "course.index",
        link: "/mata-kuliah",
        component: "Course",
    },
];

export default function Navbar() {
    const {
        url,
        component,
        props: { auth },
    } = usePage();

    return (
        <nav className="bg-lilac-grey shadow-nav">
            <div className="max-w-5xl py-3 mx-auto">
                <div className="flex h-16">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <Link
                                href="/"
                                className="text-2xl font-bold font-anonymous text-gunmetal"
                            >
                                SIKA17
                            </Link>
                        </div>
                        <div className="flex items-center gap-10 text-slate-grey">
                            {urls.map((item, index) => (
                                <Link
                                    key={index}
                                    href={route(item.name)}
                                    className={
                                        url === item.link ||
                                        component.startsWith(item.component)
                                            ? "text-blue-violet"
                                            : "hover:text-blue-violet transition-all duration-200"
                                    }
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div>
                            {auth.user ? (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 font-medium leading-4 transition duration-150 ease-in-out border border-transparent rounded-md text-slate-grey hover:text-gunmetal focus:outline-none"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        {(auth.user.role === "admin" || auth.user.role === "superadmin") && (
                                            <Dropdown.Link
                                                href={route("dashboard")}
                                            >
                                                Dashboard
                                            </Dropdown.Link>
                                        )}
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center w-full gap-2 px-6 py-2 font-semibold transition-all duration-200 rounded-full text-lilac-grey bg-blue-violet hover:bg-blue-violet/90"
                                >
                                    <LuLogIn className="w-5 h-5" />
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
