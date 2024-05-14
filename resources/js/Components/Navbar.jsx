import { Link, usePage } from "@inertiajs/react";
import { LuLogIn } from "react-icons/lu";

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
    const { url, component } = usePage();

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
                            <Link
                                href="/login"
                                className="flex items-center w-full gap-2 px-6 py-2 font-semibold transition-all duration-200 rounded-full text-lilac-grey bg-blue-violet hover:bg-blue-violet/90"
                            >
                                <LuLogIn className="w-5 h-5" />
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav className="flex justify-end flex-1 -mx-3">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in ea
                            </Link>
                            <Link
                                href={route("register")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav> */}
        </nav>
    );
}
