import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import BackButton from "@/Components/Atoms/BackButton";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout title={"Login"}>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="bg-[#FDFBFF] transition-all duration-200 shadow-universal p-8 shadow-md mt-7 sm:max-w-xl sm:rounded-[5px] w-full mx-auto"
            >
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-2"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-2"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="text-sm text-slate-grey ms-2">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm underline rounded-md text-slate-grey hover:text-gunmetal"
                        >
                            Lupa password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Login
                    </PrimaryButton>
                </div>
            </form>

            <div>
                <p className="mt-8 text-sm text-center text-slate-grey">
                    Belum punya akun?{" "}
                    <Link
                        href={route("register")}
                        className="text-blue-violet hover:underline"
                    >
                        Daftar di sini
                    </Link>
                </p>
            </div>

            <div className="mx-2 sm:mx-auto sm:max-w-xl">
                <BackButton href={route("home")} label="Kembali ke beranda" />
            </div>
        </GuestLayout>
    );
}
