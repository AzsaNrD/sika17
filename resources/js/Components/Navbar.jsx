import { Link, usePage } from "@inertiajs/react";
import { LuLogIn } from "react-icons/lu";
import { RxPerson, RxDashboard } from "react-icons/rx";
import { IoPower } from "react-icons/io5";
import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";

const urls = [
    {
        title: "Beranda",
        name: "home",
        link: "/",
        component: "Home",
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
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const {
        url,
        component,
        props: { auth },
    } = usePage();

    return (
        <nav className="bg-lilac-grey shadow-nav">
            <div className="max-w-5xl py-3 mx-auto">
                <div className="flex h-16 px-4 lg:px-0">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <Link
                                href="/"
                                className="text-2xl font-bold font-anonymous text-gunmetal"
                            >
                                SIKA17
                            </Link>
                        </div>
                        <div className="items-center hidden gap-10 md:flex text-slate-grey">
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
                        <div className="hidden md:block">
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
                                            className="flex items-center gap-2"
                                        >
                                            <RxPerson />
                                            Profile
                                        </Dropdown.Link>
                                        {(auth.user.role === "Admin" ||
                                            auth.user.role ===
                                                "Super Admin") && (
                                            <Dropdown.Link
                                                href={route("dashboard.index")}
                                                className="flex items-center gap-2"
                                            >
                                                <RxDashboard />
                                                Dashboard
                                            </Dropdown.Link>
                                        )}
                                        <hr className="my-1" />
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="flex items-center gap-2"
                                        >
                                            <IoPower />
                                            Logout
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
                        <div className="flex items-center -me-2 md:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-slate-grey hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-slate-grey"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " md:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        {urls.map((item, index) => (
                            <ResponsiveNavLink
                                key={index}
                                href={route(item.name)}
                                active={
                                    route().current(item.link) ||
                                    component.startsWith(item.component)
                                }
                            >
                                {item.title}
                            </ResponsiveNavLink>
                        ))}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            {auth.user ? (
                                <>
                                    <div className="text-base font-medium text-gray-800">
                                        {auth.user.name}
                                        {auth.user.role === "admin" && (
                                            <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full ms-2">
                                                Admin
                                            </span>
                                        )}
                                        {auth.user.role === "Super Admin" && (
                                            <span className="px-2 py-1 text-xs font-semibold text-white rounded-full bg-violet-500 ms-2">
                                                Super Admin
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        {auth.user.email}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="flex items-center w-full gap-2 px-6 py-2 font-semibold transition-all duration-200 rounded-[5px] text-lilac-grey bg-blue-violet hover:bg-blue-violet/90"
                                >
                                    <LuLogIn className="w-5 h-5" />
                                    Login
                                </Link>
                            )}
                        </div>

                        {auth.user && (
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                {(auth.user.role === "Admin" ||
                                    auth.user.role === "Super Admin") && (
                                    <ResponsiveNavLink
                                        href={route("dashboard.index")}
                                    >
                                        Dashboard
                                    </ResponsiveNavLink>
                                )}
                                <hr className="my-1" />
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Logout
                                </ResponsiveNavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
