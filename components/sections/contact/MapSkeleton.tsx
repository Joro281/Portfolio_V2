"use client";

import * as React from "react";

export default function MapSkeleton() {
    return (
        <div className="relative w-full h-full bg-neutral-900 flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 w-full h-[2px] bg-white/20 animate-scan z-10 pointer-events-none" />

            {/* Central UI Element */}
            <div className="relative z-20 flex flex-col items-center gap-6">
                <div className="w-16 h-16 border border-white/20 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 border border-white/40 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white/60" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                        {/* Matrix-style text animation might be too complex here, simple blink is fine */}
                        <span className="animate-blink">INITIALIZING_MAP_MODULE...</span>
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                        SIGNAL_SEARCHING_REGION_7_CDO
                    </div>
                </div>

                {/* Progress bar-like element */}
                <div className="w-48 h-1 bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 w-1/3 animate-loading-slide" />
                </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-neutral-700">COORD_X: 124.598</div>
            <div className="absolute top-4 right-4 font-mono text-[8px] text-neutral-700">COORD_Y: 8.486</div>
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-neutral-700">STATUS: BOOTING</div>
            <div className="absolute bottom-4 right-4 font-mono text-[8px] text-neutral-700">SYS: V2.0.4</div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(1000%); }
                }
                @keyframes loading-slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
                .animate-loading-slide {
                    animation: loading-slide 2s ease-in-out infinite;
                }
                .animate-blink {
                    animation: blink 1.5s step-end infinite;
                }
            `}</style>
        </div>
    );
}
