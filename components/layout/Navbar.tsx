"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import TextMorph from "../shared/TextMorph";

const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`w-full fixed top-0 z-[999] transition-all duration-500 border-b ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-white/10 py-4"
                    : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px] border-transparent py-8"
                    }`}
            >
                <div className="w-full max-w-[1600px] mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="relative group flex items-center gap-2"
                    >
                        <span
                            className={`text-2xl font-black tracking-tighter uppercase leading-none transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ${pathname === "/" ? "scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""
                                }`}
                        >
                            JORO
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative font-mono text-xs uppercase tracking-[0.2em] transition-all duration-200 px-3 py-1 ${isActive
                                        ? "bg-white text-black font-bold"
                                        : "text-neutral-400 hover:bg-white hover:text-black"
                                        }`}
                                >
                                    [ {link.name} ]
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-[110] p-2 text-white"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""
                                    }`}
                            />
                            <span
                                className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu - Moved outside nav to avoid backdrop-blur clipping */}
            <div
                className={`fixed inset-0 z-[1000] bg-black transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                {/* TV Static Background Effects */}
                <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise opacity-30 z-0" style={{ mixBlendMode: 'screen' }} />
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker z-0"
                    style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        mixBlendMode: 'overlay',
                    }}
                />

                {/* Grid Background Decoration */}
                <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                {/* Close Button Inside Dropdown */}
                <div className="absolute top-0 right-0 p-6 md:hidden z-20">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-between">
                            <span className="w-full h-[2px] bg-white transition-all duration-300 rotate-45 translate-y-[9px]" />
                            <span className="w-full h-[2px] bg-white transition-all duration-300 opacity-0" />
                            <span className="w-full h-[2px] bg-white transition-all duration-300 -rotate-45 -translate-y-[9px]" />
                        </div>
                    </button>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-12 px-6">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.5em] mb-4">
                        {"// NAVIGATION_INTERFACE"}
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        {navLinks.map((link, i) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`group relative text-5xl font-black uppercase tracking-tighter transition-all duration-300 px-6 py-2 ${isActive
                                        ? "bg-white text-black"
                                        : "text-neutral-500 hover:bg-white hover:text-black"
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        <TextMorph text={`[ ${link.name.toUpperCase()} ]`} delay={i * 200} duration={1000} />
                                    </span>
                                </Link>
                            );
                        })}
                        {/* Punpun GIF - Now inside flex container */}
                        <div className="mt-4 animate-in fade-in zoom-in duration-1000 delay-500">
                            <Image
                                src="/images/punpun2.gif"
                                alt="punpun"
                                width={200}
                                height={200}
                                unoptimized
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
