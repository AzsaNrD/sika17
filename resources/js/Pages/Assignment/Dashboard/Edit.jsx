import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";

export default function Create({ auth, courses, assignment }) {
    const { setData, data, put, errors, processing } = useForm({
        description: assignment.description,
        submission_link: assignment.submission_link,
        course_id: assignment.course_id,
        due_date: assignment.due_date,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("dashboard.assignment.update", assignment.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Tugas
                </h2>
            }
            title="Tugas"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Edit Tugas
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel
                                        htmlFor="course_id"
                                        value="Mata Kuliah"
                                    />
                                    <select
                                        id="course_id"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 rounded-sm shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData("course_id", e.target.value)
                                        }
                                        value={data.course_id}
                                        required
                                    >
                                        {courses.length !== 0 ? (
                                            <>
                                                <option value="">
                                                    Pilih Mata Kuliah
                                                </option>
                                                {courses.map((course) => (
                                                    <option
                                                        key={course.id}
                                                        value={course.id}
                                                    >
                                                        {course.name}
                                                    </option>
                                                ))}
                                            </>
                                        ) : (
                                            <option value="">
                                                MATA KULIAH BELUM ADA (TAMBAHKAN
                                                TERLEBIH DAHULU)
                                            </option>
                                        )}
                                    </select>
                                    <InputError
                                        message={errors.lecturer_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="submission_link"
                                        value="Link Pengumpulan Tugas (Opsional)"
                                    />
                                    <TextInput
                                        id="submission_link"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData(
                                                "submission_link",
                                                e.target.value
                                            )
                                        }
                                        value={data.submission_link || ""}
                                    />
                                    <InputError
                                        message={errors.submission_link}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Deskripsi"
                                    />
                                    <textarea
                                        id="description"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 rounded-sm shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        defaultValue={data.description}
                                        required
                                    ></textarea>
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="deadline"
                                        value="Deadline"
                                    />
                                    <input
                                        id="deadline"
                                        type="datetime-local"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 rounded-sm shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData("due_date", e.target.value)
                                        }
                                        value={data.due_date}
                                        required
                                    />
                                    <InputError
                                        message={errors.deadline}
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
                        href={route("dashboard.assignment.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
