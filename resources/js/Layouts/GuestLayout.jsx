import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";

export default function Guest({ title, children }) {
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
            <div className="flex flex-col items-center justify-center min-h-lvh">
                <div>
                    <h1 className="text-2xl font-bold font-anonymous text-gunmetal">
                        SIKA17 - {title}
                    </h1>
                </div>

                <div className="w-full overflow-hidden">
                    {children}
                </div>
            </div>
        </>
    );
}
