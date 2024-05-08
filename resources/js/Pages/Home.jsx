import AppLayout from "@/Layouts/AppLayout";
import Announcements from "@/Components/organisms/Announcements";
import Shortcuts from "@/Components/organisms/Shortcuts";
import Feedback from "@/Components/organisms/Feedback";

export default function Home() {
    return (
        <AppLayout title="Beranda">
            <main className="my-16 max-w-5xl mx-auto">
                <section>
                    <Announcements />
                </section>
                <section className="mt-16">
                    <Shortcuts />
                </section>
                <section className="my-20">
                    <Feedback />
                </section>
            </main>
        </AppLayout>
    );
}
