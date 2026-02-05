'use client';

import { useState } from "react";
import TextMorph from "@/components/shared/TextMorph";
import OsDesktop from "@/components/features/os/OsDesktop";
import OsDesktopPersonal from "@/components/features/os/OsDesktopPersonal";

export default function AboutPage() {
    const [view, setView] = useState<'professional' | 'personal'>('professional');

    return (
        <main className="flex-grow w-full relative min-h-screen pt-32 md:pt-40 px-6 pb-24 overflow-hidden">
            {/* TV Static/Scanline Effect */}

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
            <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise z-0" style={{ mixBlendMode: 'screen' }} />

            {/* Vignette Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    opacity: 0.4,
                }}
            />

            {/* Flickering Light Effect */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker z-0"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    mixBlendMode: 'overlay',
                }}
            />

            {/* Sidebar Switch */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] pl-6 hidden lg:flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-16 bg-white/20"></div>
                    <div className="flex flex-col gap-10 py-8 relative">
                        <button
                            onClick={() => setView('professional')}
                            className={`relative flex items-center group transition-opacity ${view === 'professional' ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
                        >
                            <span className={`absolute -left-5 font-mono text-xs text-white transition-opacity ${view === 'professional' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>&gt;</span>
                            <span className="vertical-text font-mono text-[11px] uppercase font-bold text-white tracking-widest">PRO</span>
                        </button>
                        <button
                            onClick={() => setView('personal')}
                            className={`relative flex items-center group transition-opacity ${view === 'personal' ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
                        >
                            <span className={`absolute -left-5 font-mono text-xs text-white transition-opacity ${view === 'personal' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>&gt;</span>
                            <span className="vertical-text font-mono text-[11px] uppercase font-bold text-white tracking-widest">PERS</span>
                        </button>
                    </div>
                    <div className="w-px h-16 bg-white/20"></div>
                </div>
            </div>

            <div className="w-full max-w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <div className="relative mb-16 lg:mb-32 w-full flex flex-col items-center">
                    <div className="flex flex-col gap-2 mb-8 items-center text-center">
                        <h1 className="text-[14vw] lg:text-[11rem] leading-[0.8] font-black tracking-[-0.06em] uppercase pixelated-text flex flex-col items-center">
                            <span className="block">
                                <TextMorph text="ABOUT /" delay={0} duration={1500} />
                            </span>
                            <span className="block text-[10vw] lg:text-[8rem]">
                                <TextMorph
                                    key={view}
                                    text={view === 'professional' ? 'PROFESSIONAL' : 'PERSONAL'}
                                    delay={300}
                                    duration={1500}
                                    style={{
                                        WebkitTextStroke: '0.3px white',
                                        color: 'transparent'
                                    }}
                                />
                            </span>
                        </h1>
                    </div>

                    <div className="flex flex-col items-center gap-6 mt-4">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 animate-pulse text-center">
                            {`// SELECT_PERS_FOR_PERSONAL_INFO`}
                        </div>
                    </div>

                    {/* Mobile Switcher (Visible only on mobile) */}
                    <div className="flex lg:hidden items-center justify-center gap-4 mt-12 mb-4">
                        <button
                            onClick={() => setView('professional')}
                            className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors ${view === 'professional' ? 'text-white border-b border-white' : 'text-neutral-600 hover:text-white'}`}
                        >
                            Professional
                        </button>
                        <span className="text-neutral-700">/</span>
                        <button
                            onClick={() => setView('personal')}
                            className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors ${view === 'personal' ? 'text-white border-b border-white' : 'text-neutral-600 hover:text-white'}`}
                        >
                            Personal
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-full mx-auto relative z-20">
                {/* Content Area */}
                <div className="transition-opacity duration-500 ease-in-out px-4">
                    {view === 'professional' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex justify-center">
                            <div className="w-full max-w-[1800px]">
                                <OsDesktop />
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex justify-center">
                            <div className="w-full max-w-[1800px]">
                                <OsDesktopPersonal />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
