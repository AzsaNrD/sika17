import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { RxPencil2, RxTrash } from "react-icons/rx";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import ConfirmDeleteModal from "@/Pages/Announcement/Dashboard/Partials/ConfirmDeleteModal";
import AddButton from "@/Components/Molecules/AddButton";
import EditButton from "@/Components/Atoms/EditButton";
import DeleteButton from "@/Components/Atoms/DeleteButton";

export default function Index({ auth, schedules }) {
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

        destroy(route("dashboard.schedule.destroy", data.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Jadwal Kuliah
                </h2>
            }
            title="Jadwal Kuliah"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end px-2 mb-4 sm:px-0">
                        <AddButton
                            route={route("dashboard.schedule.create")}
                            label="TAMBAH JADWAL KULIAH"
                        />
                    </div>
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            {schedules.data.length === 0 ? (
                                <div className="relative flex overflow-x-hidden font-medium select-none">
                                    <span>Belum ada jadwal kuliah.</span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-[#BABABA]">
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    #
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    HARI
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    MATA KULIAH
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    DOSEN
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    WAKTU
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schedules.data.map(
                                                (item, index) => (
                                                    <tr
                                                        className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                                                        key={index}
                                                    >
                                                        <td className="px-3 py-5 text-sm capitalize truncate text-slate-grey">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm capitalize truncate text-slate-grey">
                                                            {item.day}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {item.course.name}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {item.course
                                                                .lecturer
                                                                ? item.course
                                                                    .lecturer
                                                                    .name
                                                                : "-"}
                                                        </td>
                                                        <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                            {item.start_time.substring(
                                                                0,
                                                                5
                                                            )}{" "}
                                                            {" - "}{" "}
                                                            {item.end_time.substring(
                                                                0,
                                                                5
                                                            )}
                                                        </td>
                                                        <td className="flex items-center justify-center h-full gap-5 py-5 mx-3 text-lg truncate text-slate-grey">
                                                            <EditButton
                                                                route={route(
                                                                    "dashboard.schedule.edit",
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
                        {schedules.data.length > 0 && (
                            <div className="flex justify-center pb-6">
                                <PaginationLinks
                                    links={schedules.links}
                                    currentPage={schedules.current_page}
                                    lastPage={schedules.last_page}
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
