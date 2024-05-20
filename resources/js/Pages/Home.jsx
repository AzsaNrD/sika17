import AppLayout from "@/Layouts/AppLayout";
import Announcements from "@/Components/Organisms/Announcements";
import Shortcuts from "@/Components/Organisms/Shortcuts";
import Feedback from "@/Components/Organisms/Feedback";

export default function Home({ announcements, shortcuts }) {
    return (
        <AppLayout title="Beranda">
            <main className="max-w-5xl px-4 mx-auto my-10 sm:my-16 lg:px-0">
                <section>
                    <Announcements announcements={announcements} />
                </section>
                <section className="mt-16">
                    <Shortcuts shortcuts={shortcuts} />
                </section>
                <section className="my-20">
                    <Feedback />
                </section>
            </main>
        </AppLayout>
    );
}
