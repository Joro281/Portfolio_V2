import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
    title: "CONTACT / JORO",
    description: "Get in touch for collaborations, projects, or just to say hi.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
            {/* CRT Scanlines */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
                    backgroundSize: '100% 4px',
                    opacity: 0.3,
                }}
            />

            {/* Gradient TV Noise */}
            <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise z-10" style={{ mixBlendMode: 'screen' }} />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    opacity: 0.4,
                }}
            />

            {/* Flickering Light Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker z-10"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    mixBlendMode: 'overlay',
                }}
            />

            <div className="relative z-20">
                <ContactSection />
            </div>
        </main>
    );
}
