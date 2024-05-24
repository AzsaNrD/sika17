import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link, usePage } from "@inertiajs/react";
import { RxPerson } from "react-icons/rx";
import { IoPower } from "react-icons/io5";

const urls = [
    {
        title: "Dashboard",
        routeName: "dashboard.index",
        component: "Dashboard",
    },
    {
        title: "Pengumuman",
        routeName: "dashboard.announcement.index",
        component: "Announcement",
    },
    {
        title: "Menu Pintasan",
        routeName: "dashboard.shortcut.index",
        component: "Shortcut",
    },
    {
        title: "Tugas",
        routeName: "dashboard.assignment.index",
        component: "Assignment",
    },
    {
        title: "Dosen",
        routeName: "dashboard.lecturer.index",
        component: "Lecturer",
    },
    {
        title: "Mata Kuliah",
        routeName: "dashboard.course.index",
        component: "Course",
    },
    {
        title: "Semester",
        routeName: "dashboard.semester.index",
        component: "Semester",
    }
];

export default function Authenticated({ user, header, title, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const { component } = usePage();

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="min-h-screen ">
                <nav className="border-b border-gray-200 bg-lilac-grey">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex items-center shrink-0">
                                    <Link
                                        href="/"
                                        className="text-2xl font-bold font-anonymous text-gunmetal"
                                    >
                                        SIKA17
                                    </Link>
                                </div>

                                {(user.role === "Admin" ||
                                    user.role === "Super Admin") && (
                                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                        {urls.map((item, index) => (
                                            <NavLink
                                                key={index}
                                                href={route(item.routeName)}
                                                active={
                                                    route().current(
                                                        item.routeName
                                                    ) ||
                                                    component.startsWith(
                                                        item.component
                                                    )
                                                }
                                            >
                                                {item.title}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 font-medium leading-4 transition duration-150 ease-in-out border border-transparent rounded-md text-slate-grey hover:text-gunmetal focus:outline-none"
                                                >
                                                    <span>{user.name}</span>
                                                    {user.role === "Admin" && (
                                                        <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full ms-2">
                                                            Admin
                                                        </span>
                                                    )}
                                                    {user.role ===
                                                        "Super Admin" && (
                                                        <span className="px-2 py-1 text-xs font-semibold text-white rounded-full bg-violet-500 ms-2">
                                                            Super Admin
                                                        </span>
                                                    )}

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
                                            <hr className="my-2" />
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
                                </div>
                            </div>

                            <div className="flex items-center -me-2 sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
                            " sm:hidden"
                        }
                    >
                        {(user.role === "Admin" ||
                            user.role === "Super Admin") && (
                            <div className="pt-2 pb-3 space-y-1">
                                {urls.map((item, index) => (
                                    <ResponsiveNavLink
                                        key={index}
                                        href={route(item.routeName)}
                                        active={
                                            route().current(item.routeName) ||
                                            component.startsWith(item.component)
                                        }
                                    >
                                        {item.title}
                                    </ResponsiveNavLink>
                                ))}
                            </div>
                        )}

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                    {user.role === "admin" && (
                                        <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full ms-2">
                                            Admin
                                        </span>
                                    )}
                                    {user.role === "Super Admin" && (
                                        <span className="px-2 py-1 text-xs font-semibold text-white rounded-full bg-violet-500 ms-2">
                                            Super Admin
                                        </span>
                                    )}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Logout
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="shadow-universal bg-lilac-grey">
                        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    );
}
