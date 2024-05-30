import { dateTime } from "@/Helpers/dateTime";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import { RxCaretRight } from "react-icons/rx";

export default function Show({ announcement }) {
    useEffect(() => {
        const loadIframely = () => {
            const script = document.createElement('script');
            script.src = "//cdn.iframe.ly/embed.js?api_key=2012a5b3d159ac4a8d0f5e";
            script.charset = 'utf-8';
            script.onload = () => {
                document.querySelectorAll('oembed[url]').forEach(element => {
                    iframely.load(element, element.attributes.url.value);
                });
            };
            document.body.appendChild(script);
        };

        loadIframely();
    }, []);
    return (
        <AppLayout title="Pengumuman">
            <main className="max-w-5xl px-4 mx-auto my-10 mb-20 min-h-svh md:my-16 lg:px-0">
                <section>
                    <div className="flex items-center gap-1 text-sm select-none text-slate-grey">
                        <Link href={route("home")} className="text-blue-violet">
                            Beranda
                        </Link>
                        <RxCaretRight className="text-blue-violet" />
                        <span>Pengumuman</span>
                    </div>
                </section>
                <article className="mt-6">
                    <header>
                        <h2 className="text-2xl font-bold break-words text-gunmetal">
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
                        className="w-11/12 mt-6 overflow-auto prose break-words md:w-9/12 prose-headings:text-zinc-600 prose-blockquote:text-zinc-600 prose-blockquote:border-zinc-300 prose-p:text-zinc-600 prose-tr:border-zinc-400"
                        dangerouslySetInnerHTML={{
                            __html: announcement.body,
                        }}
                    />
                </article>
            </main>
        </AppLayout>
    );
}
