import AppLayout from "@/Layouts/AppLayout";
import Announcements from "@/Components/Organisms/Announcements";
import Shortcuts from "@/Components/Organisms/Shortcuts";
import Feedback from "@/Components/Organisms/Feedback";

export default function Home() {
    return (
        <AppLayout title="Beranda">
            <main className="max-w-5xl mx-auto my-16">
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
