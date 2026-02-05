'use client';

import { useState, useEffect } from 'react';

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        const bootSequence = [
            "BIOS DATE 01/05/26 14:22:51 VER 1.0.4",
            "CPU: NEURO-CORE V9 @ 400THz",
            " ",
            "Memory Test: 64TB OK",
            "Detecting Primary Master ... SKIPPING",
            "Detecting Primary Slave ... FOUND",
            " ",
            "Booting from Network Drive...",
            "Loading KERNEL.SYS ... OK",
            "Loading USER_PROFILE ... OK",
            " ",
            "SYSTEM READY."
        ];

        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex >= bootSequence.length) {
                clearInterval(interval);
                setTimeout(onComplete, 800); // Small pause after completion
                return;
            }

            setLines(prev => [...prev, bootSequence[currentIndex]]);
            currentIndex++;
        }, 150); // Speed of lines appearing

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="absolute inset-0 bg-black z-[100] p-8 sm:p-12 font-mono text-xs sm:text-sm text-white/80 leading-relaxed font-bold">
            <div className="flex flex-col gap-1 items-start">
                <div className="mb-8 p-1 border border-white inline-block">
                    BRUTAL_IOS v3.1
                </div>

                {lines.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                        {line}
                    </div>
                ))}

                <div className="mt-2 animate-pulse">_</div>
            </div>

            <div className="absolute bottom-8 left-8 sm:left-12 right-8 text-[10px] text-neutral-600 uppercase">
                Press DEL to enter SETUP
            </div>
        </div>
    );
}
