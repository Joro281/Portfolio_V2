"use client";

import * as React from "react";

export default function PageEffects({ children }: { children?: React.ReactNode }) {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
            {/* CRT Scanlines */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]"
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
                }}
            />

            {/* Gradient TV Noise */}
            <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise opacity-30" style={{ mixBlendMode: 'screen' }} />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                }}
            />

            {/* Flickering Light Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker opacity-10"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    mixBlendMode: 'overlay',
                }}
            />

            {children}
        </div>
    );
}
