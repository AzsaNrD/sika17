import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import { dateTime } from "@/Helpers/dateTime";
import ConfirmDeleteModal from "@/Pages/Announcement/Dashboard/Partials/ConfirmDeleteModal";
import AddButton from "@/Components/Molecules/AddButton";
import EditButton from "@/Components/Atoms/EditButton";
import DeleteButton from "@/Components/Atoms/DeleteButton";

export default function Index({ auth, assignments }) {
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

        destroy(route("dashboard.assignment.destroy", data.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Tugas
                </h2>
            }
            title="Tugas"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end px-2 mb-4 sm:px-0">
                        <AddButton
                            route={route("dashboard.assignment.create")}
                            label="TAMBAH TUGAS"
                        />
                    </div>
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            {assignments.data.length === 0 ? (
                                <div className="relative flex overflow-x-hidden font-medium select-none">
                                    <span>Belum ada tugas.</span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-[#BABABA]">
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left wpx-3 text-gunmetal">
                                                    #
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    MATA KULIAH
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    PENGUMPULAN TUGAS
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    DEADLINE
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    TANGGAL DITAMBAH
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assignments.data.map(
                                                (item, index) => (
                                                    <tr
                                                        className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                                                        key={index}
                                                    >
                                                        <td className="px-3 py-5 text-sm text-slate-grey">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {item.course.name}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey max-w-80">
                                                            {item.submission_link ||
                                                                "-"}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {item.due_date !==
                                                            null ? (
                                                                <>
                                                                    {
                                                                        dateTime(
                                                                            item.due_date
                                                                        ).date
                                                                    }{" "}
                                                                    {" - "}{" "}
                                                                    {
                                                                        dateTime(
                                                                            item.due_date
                                                                        ).time
                                                                    }{" "}
                                                                    {" WIB"}
                                                                </>
                                                            ) : (
                                                                "-"
                                                            )}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {
                                                                dateTime(
                                                                    item.created_at
                                                                ).date
                                                            }{" "}
                                                            {" | "}{" "}
                                                            {
                                                                dateTime(
                                                                    item.created_at
                                                                ).time
                                                            }{" "}
                                                            {" WIB"}
                                                        </td>
                                                        <td className="flex items-center justify-center h-full gap-5 py-5 mx-3 text-lg text-slate-grey">
                                                            <EditButton
                                                                route={route(
                                                                    "dashboard.assignment.edit",
                                                                    item.id
                                                                )}
                                                            />
                                                            <DeleteButton
                                                                onDelete={() =>
                                                                    confirmUserDeletion(
                                                                        item
                                                                            .course
                                                                            .name,
                                                                        item.id
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        {assignments.total > 0 && (
                            <div className="flex justify-center pb-6">
                                <PaginationLinks
                                    links={assignments.links}
                                    currentPage={assignments.current_page}
                                    lastPage={assignments.last_page}
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
