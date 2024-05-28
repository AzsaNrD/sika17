import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

export default function ResetPasswordForm({ user }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [titleDelete, setTitleDelete] = useState("");

    const {
        data,
        setData,
        post,
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

        post(route("dashboard.user.reset_password", data.id), {
            onSuccess: () => closeModal(),
        });
    };
    return (
        <div>
            <button
                onClick={() => confirmUserDeletion(user.name, user.id)}
                className="flex items-center gap-3 px-4 py-2 text-xs font-semibold tracking-widest transition-all duration-200 rounded shadow bg-amber-500 hover:bg-amber-600 text-amber-50"
            >
                <HiOutlineRefresh /> RESET PASSWORD
            </button>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <p className="mt-1 text-gray-600">
                        Apakah kamu yakin ingin reset password user{" "}
                        <strong>{titleDelete}</strong>?
                    </p>
                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ms-3" disabled={processing}>
                            RESET
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
