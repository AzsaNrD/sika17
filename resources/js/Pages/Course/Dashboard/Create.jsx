import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Create({ auth, lecturers, semesters }) {
    const { setData, post, errors, processing } = useForm({
        name: "",
        code: "",
        sks: "",
        semester_id: "",
        type: "wajib",
        material_url: "",
        vclass: "",
        rps_url: "",
        lecturer_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("dashboard.course.store"));
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
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Tambah Mata Kuliah Baru
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="nama" value="Nama Matkul" />
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
                                        htmlFor="semester_id"
                                        value="Semester"
                                    />
                                    <select
                                        id="semester_id"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData(
                                                "semester_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {semesters.length !== 0 ? (
                                            <>
                                                <option value="">
                                                    Pilih Semester
                                                </option>
                                                {semesters.map((semester) => (
                                                    <option
                                                        key={semester.id}
                                                        value={semester.id}
                                                    >
                                                        {semester.name}
                                                    </option>
                                                ))}
                                            </>
                                        ) : (
                                            <option value="">
                                                DATA SEMESTER MASIH KOSONG (TAMBAHKAN TERLEBIH DAHULU)
                                            </option>
                                        )}
                                    </select>
                                    <InputError
                                        message={errors.semester_id}
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
                                        htmlFor="vclass"
                                        value="Link VClass (Optional)"
                                    />
                                    <TextInput
                                        id="vclass"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("vclass", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.vclass}
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
                                        TAMBAH
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
