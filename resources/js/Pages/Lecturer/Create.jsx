import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Create({ auth }) {
    const { setData, post, errors, processing } = useForm({
        name: "",
        staffsite: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("dashboard.lecturer.store"));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Dosen
                </h2>
            }
            title="Dosen"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Tambah Dosen Baru
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="nama" value="Nama" />
                                    <TextInput
                                        id="nama"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        isFocused
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="staffsite"
                                        value="Url Staffsite (Optional)"
                                    />
                                    <TextInput
                                        id="staffsite"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("staffsite", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.staffsite}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <PrimaryButton
                                        disabled={processing}
                                        className="mt-6"
                                    >
                                        TAMBAH
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <BackButton
                        className="mx-2 md:mx-0"
                        href={route("dashboard.lecturer.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
