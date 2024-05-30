import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";
import { dateTime } from "@/Helpers/dateTime";
import ConfirmDeleteModal from "@/Pages/Announcement/Dashboard/Partials/ConfirmDeleteModal";
import AddButton from "@/Components/Molecules/AddButton";
import EditButton from "@/Components/Atoms/EditButton";
import DeleteButton from "@/Components/Atoms/DeleteButton";

export default function Index({ auth, courses }) {
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

        destroy(route("dashboard.course.destroy", data.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Mata Kuliah
                </h2>
            }
            title="Mata Kuliah"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end px-2 mb-4 sm:px-0">
                        <AddButton
                            route={route("dashboard.course.create")}
                            label="TAMBAH MATA KULIAH"
                        />
                    </div>
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            {courses.data.length === 0 ? (
                                <div className="relative flex overflow-x-hidden font-medium select-none">
                                    <span>Belum ada mata kuliah.</span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-[#BABABA]">
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    #
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left text-gunmetal">
                                                    NAMA
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    DOSEN
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    SEMESTER
                                                </th>
                                                <th className="px-3 py-3 text-sm font-bold tracking-wide text-left truncate text-gunmetal">
                                                    TANGGAL DITAMBAH
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.data.map((item, index) => (
                                                <tr
                                                    className="border-b border-[#DEDEDE] hover:bg-zinc-100 transition-all duration-150"
                                                    key={index}
                                                >
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.name}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.lecturer
                                                            ? item.lecturer.name
                                                            : "-"}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {item.semester
                                                            ? item.semester.name
                                                            : "-"}
                                                    </td>
                                                    <td className="px-3 py-5 text-sm truncate text-slate-grey">
                                                        {
                                                            dateTime(
                                                                item.created_at
                                                            ).date
                                                        }{" "}
                                                        {" - "}{" "}
                                                        {
                                                            dateTime(
                                                                item.created_at
                                                            ).time
                                                        }{" "}
                                                        {" WIB"}
                                                    </td>
                                                    <td className="flex items-center justify-center h-full gap-5 py-5 mx-3 text-lg truncate text-slate-grey">
                                                        <EditButton
                                                            route={route(
                                                                "dashboard.course.edit",
                                                                item.id
                                                            )}
                                                        />
                                                        <DeleteButton
                                                            onDelete={() =>
                                                                confirmUserDeletion(
                                                                    item.name,
                                                                    item.id
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        {courses.data.length > 0 && (
                            <div className="flex justify-center pb-6">
                                <PaginationLinks
                                    links={courses.links}
                                    currentPage={courses.current_page}
                                    lastPage={courses.last_page}
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
