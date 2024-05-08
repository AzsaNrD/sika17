import { Link } from "@inertiajs/react";
import { LuLogIn } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className="bg-lilac-grey shadow-nav">
            <div className="max-w-5xl mx-auto py-3">
                <div className="flex h-16">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <Link
                                href="/"
                                className="font-anonymous font-bold text-2xl text-gunmetal"
                            >
                                SIKA17
                            </Link>
                        </div>
                        <div className="flex items-center gap-10 text-slate-grey">
                            <Link
                                href="/"
                                className={
                                    route().current("home")
                                        ? "text-blue-violet"
                                        : "hover:text-blue-violet transition-all duration-200"
                                }
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/tugas"
                                className={
                                    route().current("assignment")
                                        ? "text-blue-violet"
                                        : "hover:text-blue-violet transition-all duration-200"
                                }
                            >
                                Tugas
                            </Link>
                            <Link
                                href="/jadwal-kuliah"
                                className={
                                    route().current("schedule")
                                        ? "text-blue-violet"
                                        : "hover:text-blue-violet transition-all duration-200"
                                }
                            >
                                Jadwal Kuliah
                            </Link>
                            <Link
                                href="/mata-kuliah"
                                className={
                                    route().current("course")
                                        ? "text-blue-violet"
                                        : "hover:text-blue-violet transition-all duration-200"
                                }
                            >
                                Mata Kuliah
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/login"
                                className="font-semibold text-lilac-grey bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 py-2 px-6 rounded-full w-full flex items-center gap-2"
                            >
                                <LuLogIn className="w-5 h-5" />
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav className="-mx-3 flex flex-1 justify-end">
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
