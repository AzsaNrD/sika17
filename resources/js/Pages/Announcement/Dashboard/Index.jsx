import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { RxPlusCircled } from "react-icons/rx";
import AnnouncementTable from "./Partials/AnnouncementTable";
import ConfirmDeleteModal from "./Partials/ConfirmDeleteModal";
import PaginationLinks from "@/Components/Molecules/PaginationLinks";

export default function Index({ auth, announcements }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [titleDelete, setTitleDelete] = useState("");

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
    } = useForm({
        slug: "",
    });

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        setTitleDelete("");
        reset();
    };

    const confirmUserDeletion = (title, slug) => {
        setConfirmingUserDeletion(true);
        setTitleDelete(title);
        setData("slug", slug);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("dashboard.announcement.destroy", data.slug), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Pengumuman
                </h2>
            }
            title="Pengumuman"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end px-2 mb-4 sm:px-0">
                        <Link
                            href={route("dashboard.announcement.create")}
                            className="flex items-center tracking-wide gap-2 shadow-md hover:shadow-lg text-sm text-lilac-grey border-blue-violet bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 rounded-[5px] py-2 px-4"
                        >
                            <RxPlusCircled />
                            Tambah Pengumuman
                        </Link>
                    </div>
                    <div className="overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="p-6 text-slate-grey">
                            {announcements.total === 0 ? (
                                <div className="relative flex overflow-x-hidden select-none">
                                    <span>🚧Belum ada pengumuman🚧</span>
                                </div>
                            ) : (
                                <AnnouncementTable
                                    announcements={announcements}
                                    onDelete={confirmUserDeletion}
                                />
                            )}
                        </div>
                        <div className="flex justify-center pb-6">
                        <PaginationLinks
                            links={announcements.links}
                            currentPage={announcements.current_page}
                            lastPage={announcements.last_page}
                        />
                        </div>
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
