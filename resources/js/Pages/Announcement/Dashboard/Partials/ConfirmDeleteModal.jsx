import React from "react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";

export default function ConfirmDeleteModal({
    show,
    onClose,
    onDelete,
    titleDelete,
    processing,
}) {
    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={onDelete} className="p-6">
                <p className="mt-1 text-gray-600 break-words">
                    Apakah kamu yakin ingin menghapus{" "}
                    <strong>{titleDelete}</strong>?
                </p>
                <div className="flex justify-end mt-6">
                    <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                    <DangerButton className="ms-3" disabled={processing}>
                        HAPUS
                    </DangerButton>
                </div>
            </form>
        </Modal>
    );
}
