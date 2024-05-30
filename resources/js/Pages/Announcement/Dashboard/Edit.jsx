import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import CKEditorCustom from "@/Components/Molecules/CKEditorCustom";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Edit({ auth, announcement }) {
    const { setData, put, data, errors, processing } = useForm({
        title: announcement.title,
        body: announcement.body,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("dashboard.announcement.update", announcement.id));
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
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Edit Pengumuman
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="title" value="Judul" />
                                    <TextInput
                                        id="title"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        value={data.title}
                                        required
                                        isFocused
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <p className="block mb-3 text-sm font-medium text-gunmetal">
                                        Deskripsi
                                    </p>
                                    <CKEditorCustom
                                        value="body"
                                        setData={setData}
                                        data={data.body}
                                    />
                                    <InputError
                                        message={errors.body}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-end mt-6">
                                    <PrimaryButton disabled={processing}>
                                        UPDATE
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <BackButton className="mx-2 md:mx-0" href={route("dashboard.announcement.index")} label="Kembali" />
                </div>
            </div>
        </Authenticated>
    );
}
