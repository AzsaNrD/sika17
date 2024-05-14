import { Head, Link } from "@inertiajs/react";
import { BiErrorAlt } from "react-icons/bi";
import React from "react";

export default function ErrorPage({ status }) {
    console.log(status);
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Maaf, kami sedang melakukan pemeliharaan. Silakan coba lagi nanti.",
        500: "Ups, terjadi kesalahan pada server kami.",
        404: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
        403: "Maaf, Anda dilarang mengakses halaman ini.",
    }[status];

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="flex flex-col items-center justify-center p-5 select-none min-h-lvh">
                <div className="text-4xl font-bold font-anonymous text-gunmetal">
                    {title}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="mt-2 font-mulish text-slate-grey">
                        {description}
                    </p>
                    {(status == 404 || status == 403) && (
                        <Link
                            href={route("home")}
                            className="inline-block px-8 py-2 mx-auto mt-4 text-sm text-center transition-all duration-200 rounded-full text-lilac-grey bg-blue-violet hover:bg-blue-violet/90"
                        >
                            Kembali ke Beranda
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
