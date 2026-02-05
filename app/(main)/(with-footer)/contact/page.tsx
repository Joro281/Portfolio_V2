import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
    title: "CONTACT / JORO",
    description: "Get in touch for collaborations, projects, or just to say hi.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            <div className="relative z-20">
                <ContactSection />
            </div>
        </main>
    );
}
