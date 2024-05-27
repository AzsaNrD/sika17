import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";
import TextInput from "@/Components/TextInput";

export default function Create({ auth, schedule, courses }) {
    console.log({
        schedule,
        courses,
    });
    const { setData, data, put, errors, processing } = useForm({
        day: schedule.day,
        day_numeric: schedule.day_numeric,
        room: schedule.room,
        start_time: schedule.start_time.substring(0, 5),
        end_time: schedule.end_time.substring(0, 5),
        course_id: schedule.course_id,
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

        put(route("dashboard.schedule.update", schedule.id));
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
                            Edit Jadwal Kuliah
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
                                        disabled
                                        required
                                    >
                                        {courses.map((course) => (
                                            <option
                                                key={course.id}
                                                value={course.id}
                                            >
                                                {course.name}
                                            </option>
                                        ))}
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
                                        value={data.room || ""}
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
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={handleDayChange}
                                        defaultValue={data.day}
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
                                        message={errors.name}
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
                                            value={data.start_time}
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
                                            value={data.end_time}
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
                                        UPDATE
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
