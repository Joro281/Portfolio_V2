'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                setProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateProgress);
        // Initial call to set state correctly if page starts scrolled
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <>
            <div className="absolute inset-0 pointer-events-none">
                <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-end">
                    <span className="font-mono text-xs text-neutral-500 tabular-nums">
                        [ {Math.round(progress)} % ]
                    </span>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/10">
                <div
                    className="h-full bg-white transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </>
    );
}
