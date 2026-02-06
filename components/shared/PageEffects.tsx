"use client";

import * as React from "react";

export default function PageEffects({ children }: { children?: React.ReactNode }) {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">
            {/* CRT Scanlines - Subtle overlay */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]"
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

            {/* Hybrid TV Noise - CSS Grains + SVG Fallback */}
            <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise opacity-30" />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                }}
            />

            {/* Flickering Light Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker opacity-5"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    mixBlendMode: 'overlay',
                }}
            />

            {children}
        </div>
    );
}
