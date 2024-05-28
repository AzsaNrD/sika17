import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import { dateTime } from "@/Helpers/dateTime";
import ConfirmDeleteModal from "@/Pages/Announcement/Dashboard/Partials/ConfirmDeleteModal";

export default function Index({ auth, users }) {
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
        setTitleDelete(title);
        setData("id", id);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("dashboard.user.destroy", data.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    User
                </h2>
            }
            title="User"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="border-b border-[#BABABA]">
                                            <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                #
                                            </th>
                                            <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                NAMA
                                            </th>
                                            <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                EMAIL
                                            </th>
                                            <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                ROLE
                                            </th>
                                            <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                BERGABUNG PADA
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((item, index) => (
                                            <tr
                                                className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                                                key={index}
                                            >
                                                <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                    {index+1}
                                                </td>
                                                <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                    {item.name}
                                                </td>
                                                <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                    {item.email}
                                                </td>
                                                <td className="px-3 py-5 text-sm uppercase truncate text-slate-grey">
                                                    {item.role}
                                                </td>
                                                <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                    {
                                                        dateTime(
                                                            item.created_at
                                                        ).date
                                                    }{" "}
                                                    -{" "}
                                                    {
                                                        dateTime(
                                                            item.created_at
                                                        ).time
                                                    }
                                                </td>
                                                <td className="flex flex-row gap-3 px-3 py-5 text-sm truncate text-slate-grey">
                                                    {auth.user.id ===
                                                    item.id ? (
                                                        <span className="px-3 py-1 text-xs font-semibold tracking-widest rounded bg-emerald-500 text-emerald-50">
                                                            ⭐ INI ADALAH AKUN ANDA
                                                        </span>
                                                    ) : (
                                                        <>
                                                            <Link
                                                                href={route(
                                                                    "dashboard.user.edit",
                                                                    item.id
                                                                )}
                                                                className="px-3 py-1 text-xs font-semibold tracking-widest transition-all duration-200 rounded shadow-sm hover:shadow-md bg-cyan-500 hover:bg-cyan-600 text-cyan-50"
                                                            >
                                                                EDIT
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    confirmUserDeletion(
                                                                        item.name,
                                                                        item.id
                                                                    )
                                                                }
                                                                className="px-3 py-1 text-xs font-semibold tracking-widest bg-red-500 rounded shadow-sm hover:bg-red-600 hover:shadow-md text-red-50"
                                                            >
                                                                HAPUS
                                                            </button>
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {users.total > 0 && (
                            <div className="flex justify-center pb-6">
                                <PaginationLinks
                                    links={users.links}
                                    currentPage={users.current_page}
                                    lastPage={users.last_page}
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
