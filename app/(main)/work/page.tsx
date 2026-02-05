import WorkSection from "@/components/sections/work/WorkSection";

export default function WorkPage() {
    return (
        <div className="min-h-screen w-full bg-black relative overflow-hidden">
            {/* CRT Scanlines */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
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
            <div className="fixed inset-0 w-full h-full pointer-events-none gradient-tv-noise z-10" style={{ mixBlendMode: 'screen' }} />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    opacity: 0.4,
                }}
            />

            {/* Flickering Light Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    mixBlendMode: 'overlay',
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <WorkSection />
            </div>
        </div>
    );
}
