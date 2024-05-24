import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { RxPencil2, RxTrash } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import ConfirmDeleteModal from "../Announcement/Dashboard/Partials/ConfirmDeleteModal";

export default function Index({ auth, semesters }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [titleDelete, setTitleDelete] = useState("");

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
    } = useForm({
        id: "",
    });

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        setTitleDelete("");
        reset();
    };

    const confirmUserDeletion = (title, id) => {
        setConfirmingUserDeletion(true);
        setTitleDelete(`Semester ${title}`);
        setData("id", id);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("dashboard.semester.destroy", data.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Semester
                </h2>
            }
            title="Pengumuman"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end px-2 mb-4 sm:px-0">
                        <Link
                            href={route("dashboard.semester.create")}
                            className="flex items-center tracking-wide gap-2 font-semibold shadow-md hover:shadow-lg text-xs text-lilac-grey border-blue-violet bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 rounded-[5px] py-2 px-4"
                        >
                            <FaPlus />
                            TAMBAH DATA SEMESTER
                        </Link>
                    </div>
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            {semesters.data.length === 0 ? (
                                <div className="relative flex overflow-x-hidden select-none">
                                    <span>Belum ada data semester.</span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-[#BABABA]">
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    SEMESTER
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    AKTIF?
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {semesters.data.map(
                                                (item, index) => (
                                                    <tr
                                                        className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                                                        key={index}
                                                    >
                                                        <td className="px-3 py-5 text-sm text-slate-grey">
                                                            Semester {item.name}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm text-slate-grey">
                                                            {item.is_active ? (
                                                                <span className="text-green-500">
                                                                    TRUE
                                                                </span>
                                                            ) : (
                                                                <span className="text-red-500">
                                                                    FALSE
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="flex items-center justify-center h-full py-5 text-lg gap-7 text-slate-grey">
                                                            <Link
                                                                href={route(
                                                                    "dashboard.semester.edit",
                                                                    item.id
                                                                )}
                                                            >
                                                                <RxPencil2 />
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    confirmUserDeletion(
                                                                        item.name,
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <RxTrash />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        {semesters.data.length > 0 && (
                            <div className="flex justify-center pb-6">
                                <PaginationLinks
                                    links={semesters.links}
                                    currentPage={semesters.current_page}
                                    lastPage={semesters.last_page}
                                />
                            </div>
                        )}
                    </div>
                    <ConfirmDeleteModal
                        show={confirmingUserDeletion}
                        onClose={closeModal}
                        onDelete={deleteUser}
                        titleDelete={titleDelete}
                        processing={processing}
                    />
                </div>
            </div>
        </Authenticated>
    );
}
