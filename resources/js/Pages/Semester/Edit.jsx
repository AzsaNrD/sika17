import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Edit({ auth, semester }) {
    const { setData, put, data, errors, processing } = useForm({
        name: semester.name,
        is_active: semester.is_active,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("dashboard.semester.update", semester.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Semester
                </h2>
            }
            title="Semester"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Edit Data Semester
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Nama" />
                                    <TextInput
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        value={data.name}
                                        required
                                        isFocused
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="is_active"
                                        value="Semester Sekarang?"
                                    />
                                    <select
                                        name="is_active"
                                        id="is_active"
                                        value={data.is_active}
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData("is_active", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="0">FALSE</option>
                                        <option value="1">TRUE</option>
                                    </select>
                                    <InputError
                                        message={errors.is_active}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-end mt-6">
                                    <PrimaryButton
                                        disabled={processing}
                                        className="mt-6"
                                    >
                                        UPDATE
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <BackButton
                        className="mx-2 md:mx-0"
                        href={route("dashboard.semester.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
