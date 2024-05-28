import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import BackButton from "@/Components/Atoms/BackButton";
import TextInput from "@/Components/TextInput";
import { HiOutlineRefresh } from "react-icons/hi";
import ResetPasswordForm from "./Partials/ResetPasswordForm";

export default function Create({ auth, user }) {
    const { setData, data, put, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        role: user.role,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("dashboard.user.update", user.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gunmetal font-anonymous">
                    User
                </h2>
            }
            title="Edit User"
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 space-y-6 overflow-hidden shadow-universal bg-lilac-white sm:rounded-[5px]">
                        <div className="pb-3 text-lg font-bold tracking-wide uppercase border-b text-gunmetal">
                            Edit User
                        </div>
                        <div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Nama" />
                                    <TextInput
                                        id="name"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        autoComplete="name"
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="block w-full mt-1 border border-[#ccced1] rounded-sm"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        autoComplete="email"
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="role" value="Role" />
                                    <select
                                        id="role"
                                        className="block w-full mt-1 text-base bg-transparent border border-gray-400 shadow-sm text-gunmetal focus:border-blue-violet focus:ring-blue-violet"
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                        defaultValue={user.role}
                                        required
                                    >
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                    <InputError
                                        message={errors.role}
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
                            <div className="mt-4">
                                <ResetPasswordForm user={user} />
                            </div>
                        </div>
                    </div>
                    <BackButton
                        className="mx-2 md:mx-0"
                        href={route("dashboard.user.index")}
                        label="Kembali"
                    />
                </div>
            </div>
        </Authenticated>
    );
}
