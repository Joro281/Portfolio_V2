"use client";

import * as React from "react";
import PageEffects from "./PageEffects";

interface LoadingScreenProps {
    message: string;
    ascii: string;
}

export default function LoadingScreen({ message, ascii }: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 w-full h-full z-[100] flex items-center justify-center font-mono p-6 overflow-hidden">
            <PageEffects />
            <div className="flex flex-col items-center gap-4 relative z-20">
                <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/40">
                    {message}
                </div>
                <pre className="text-[10px] md:text-xs text-neutral-800 whitespace-pre text-center">
                    {ascii}
                </pre>
            </div>
        </div>
    );
}
