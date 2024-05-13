import Footer from "@/Components/Organisms/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function AppLayout({ title, children }) {
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
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
