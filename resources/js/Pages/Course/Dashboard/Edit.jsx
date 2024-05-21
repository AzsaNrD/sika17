import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Create({ auth, course, lecturers }) {
    const { setData, data, put, errors, processing } = useForm({
        name: course.name,
        code: course.code || "",
        sks: course.sks,
        semester: course.semester,
        type: course.type,
        material_url: course.material_url || "",
        rps_url: course.rps_url || "",
        lecturer_id: course.lecturer_id,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("dashboard.course.update", course.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Dosen
                </h2>
            }
            title="Pengumuman"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Edit Mata Kuliah Baru
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
                                        htmlFor="code"
                                        value="Kode (Optional)"
                                    />
                                    <TextInput
                                        id="code"
                                        value={data.code || ""}
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("code", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.code}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="sks" value="SKS" />
                                    <TextInput
                                        id="sks"
                                        value={data.sks}
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("sks", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.sks}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="semester"
                                        value="Semester"
                                    />
                                    <TextInput
                                        id="semester"
                                        value={data.semester}
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("semester", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.semester}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="type" value="Tipe" />
                                    <select
                                        id="type"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData("type", e.target.value)
                                        }
                                        required
                                        value={data.type}
                                    >
                                        <option value="wajib">Wajib</option>
                                        <option value="ujian utama">
                                            Ujian Utama
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.type}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="material_url"
                                        value="Link Materi (Optional)"
                                    />
                                    <TextInput
                                        id="material_url"
                                        value={data.material_url || ""}
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData(
                                                "material_url",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.material_url}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="rps_url"
                                        value="Link RPS (Optional)"
                                    />
                                    <TextInput
                                        id="rps_url"
                                        value={data.rps_url}
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("rps_url", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.rps_url}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="lecturer_id"
                                        value="Dosen Pengampu"
                                    />
                                    <select
                                        id="lecturer_id"
                                        value={data.lecturer_id || ""}
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData(
                                                "lecturer_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {lecturers.length !== 0 ? (
                                            <>
                                                <option value="">
                                                    Pilih Dosen
                                                </option>
                                                {lecturers.map((lecturer) => (
                                                    <option
                                                        key={lecturer.id}
                                                        value={lecturer.id}
                                                    >
                                                        {lecturer.name}
                                                    </option>
                                                ))}
                                            </>
                                        ) : (
                                            <option value="">
                                                DATA DOSEN MASIH KOSONG
                                            </option>
                                        )}
                                    </select>
                                    <InputError
                                        message={errors.lecturer_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-end">
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
                        href={route("dashboard.course.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
