import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";
import TextInput from "@/Components/TextInput";

export default function Create({ auth, courses }) {
    const { data, setData, post, errors, processing } = useForm({
        day: "senin",
        day_numeric: 1,
        room: "",
        start_time: "",
        end_time: "",
        course_id: "",
    });

    const dayMapping = {
        senin: 1,
        selasa: 2,
        rabu: 3,
        kamis: 4,
        jumat: 5,
        sabtu: 6,
    };

    const handleDayChange = (e) => {
        const selectedDay = e.target.value;
        setData((prevData) => ({
            ...prevData,
            day: selectedDay,
            day_numeric: dayMapping[selectedDay],
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("dashboard.schedule.store"));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    Jadwal Kuliah
                </h2>
            }
            title="Pengumuman"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Tambah Jadwal Kuliah Baru
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
                                                MATA KULIAH BELUM ADA / SUDAH TERJADWAL
                                            </option>
                                        )}
                                    </select>
                                    <InputError
                                        message={errors.course_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="room"
                                        value="Ruang"
                                    />
                                    <TextInput
                                        id="room"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        onChange={(e) =>
                                            setData("room", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.room}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="day" value="Hari" />
                                    <select
                                        id="day"
                                        defaultValue={data.day}
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={handleDayChange}
                                        required
                                    >
                                        <option value="senin">SENIN</option>
                                        <option value="selasa">SELASA</option>
                                        <option value="rabu">RABU</option>
                                        <option value="kamis">KAMIS</option>
                                        <option value="jumat">JUMAT</option>
                                        <option value="sabtu">SABTU</option>
                                    </select>
                                    <InputError
                                        message={errors.day}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex gap-10 overflow-auto">
                                    <div>
                                        <InputLabel
                                            htmlFor="start_time"
                                            value="Jam mulai"
                                        />
                                        <input
                                            type="time"
                                            id="start_time"
                                            className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "start_time",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.start_time}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="end_time"
                                            value="Jam berakhir"
                                        />
                                        <input
                                            type="time"
                                            id="end_time"
                                            className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "end_time",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.end_time}
                                            className="mt-2"
                                        />
                                    </div>
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
                        href={route("dashboard.schedule.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
