import { dateTime } from "@/Helpers/dateTime";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import { RxCaretRight } from "react-icons/rx";

export default function Show({ announcement }) {
    console.log(announcement);
    return (
        <AppLayout title="Pengumuman">
            <main className="max-w-5xl px-4 mx-auto my-10 mb-20 min-h-svh md:my-16 lg:px-0">
                <section>
                    <div className="flex items-center gap-1 text-sm select-none text-slate-grey">
                        <Link href={route("home")} className="text-blue-violet hover:underline">Beranda</Link>
                        <RxCaretRight className="text-blue-violet" />
                        <span>Pengumuman</span>
                    </div>
                </section>
                <article className="mt-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gunmetal">
                            {announcement.title}
                        </h2>
                        <p className="mt-2 text-sm text-slate-grey">
                            By{" "}
                            {announcement.user.role === "Super Admin"
                                ? "Admin"
                                : announcement.user.role}{" "}
                            - {dateTime(announcement.created_at).date}
                        </p>
                    </header>
                    <div
                        className="w-11/12 mt-6 prose break-words md:w-9/12 prose-headings:text-zinc-600 prose-blockquote:text-zinc-600 prose-blockquote:border-zinc-300 prose-p:text-zinc-600 prose-tr:border-zinc-400"
                        dangerouslySetInnerHTML={{
                            __html: announcement.body,
                        }}
                    />
                </article>
            </main>
        </AppLayout>
    );
}
