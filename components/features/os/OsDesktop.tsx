'use client';

import { useState } from 'react';
import { FileText, List, Cpu } from 'lucide-react';
import OsWindow from './OsWindow';
import OsIcon from './OsIcon';
import OsTaskbar from './OsTaskbar';
import WindowTabs from './WindowTabs';
import AboutAsciiArt from './AboutAsciiArt';

// --- Professional Data ---
const experiences = [
    {
        company: "Krafzen - Construction Tech",
        role: "Full Stack Web Developer (Project-Based)",
        period: "11/2025 – 01/2026",
        location: "Casper, Wyoming, USA"
    },
    {
        company: "Compassionate Home Healthcare",
        role: "Software Engineer",
        period: "08/2025 – 11/2025",
        location: "Pontiac, Michigan, USA"
    },
    {
        company: "Provincial Government of Misamis Oriental",
        role: "Full Stack Developer - Intern",
        period: "02/2025 – 04/2025",
        location: "Cagayan de Oro City, PH"
    }
];

const stackCategories = {
    frontend: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
    backend: ["SUPABASE", "LARAVEL", "PHP", "NODE.JS"],
    database: ["MYSQL", "POSTGRESQL", "SUPABASE DB"],
    tools: ["GIT/GITHUB", "REST API", "VERCEL"]
};

import BootScreen from './BootScreen';

export default function OsDesktop() {
    const [isBooting, setIsBooting] = useState(true);
    const [activeWindow, setActiveWindow] = useState<string | null>('README.txt');
    const [zOrder, setZOrder] = useState<string[]>(['README.txt']);

    const openWindow = (id: string) => {
        if (!zOrder.includes(id)) {
            setZOrder([...zOrder, id]);
        } else {
            // Bring to front
            setZOrder([...zOrder.filter(w => w !== id), id]);
        }
        setActiveWindow(id);
    };

    const closeWindow = (id: string) => {
        setZOrder(zOrder.filter(w => w !== id));
        if (activeWindow === id) {
            setActiveWindow(zOrder[zOrder.length - 2] || null);
        }
    };

    const focusWindow = (id: string) => {
        setZOrder([...zOrder.filter(w => w !== id), id]);
        setActiveWindow(id);
    };

    return (
        <div className="relative w-full h-[600px] lg:h-[700px] border border-white/20 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col font-sans select-none">
            {/* Boot Screen Overlay */}
            {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}

            {/* Background Layer */}
            <div className={`absolute inset-0 z-0 opacity-30 pointer-events-none flex items-center justify-center mix-blend-screen transition-opacity duration-1000 ${isBooting ? 'opacity-0' : 'opacity-30'}`}>
                <AboutAsciiArt />
            </div>

            {/* Desktop Icons Area */}
            <div className="relative z-10 flex-1 p-6 grid grid-cols-1 gap-6 content-start justify-items-start">
                <OsIcon
                    label="README.txt"
                    icon={FileText}
                    onClick={() => openWindow('README.txt')}
                />
                <OsIcon
                    label="CAREER.log"
                    icon={List}
                    onClick={() => openWindow('CAREER.log')}
                />

                <OsIcon
                    label="STACK.exe"
                    icon={Cpu}
                    onClick={() => openWindow('STACK.exe')}
                />
            </div>

            {/* Windows Layer */}
            {/* README.txt Window (About) */}
            <OsWindow
                id="README.txt"
                title="README.txt - About Me"
                isOpen={zOrder.includes('README.txt')}
                isActive={activeWindow === 'README.txt'}
                onClose={() => closeWindow('README.txt')}
                onFocus={() => focusWindow('README.txt')}
                className="top-1/2 left-1/2"
            >
                <WindowTabs
                    tabs={[
                        {
                            id: 'overview',
                            label: 'OVERVIEW',
                            content: (
                                <div>
                                    <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="text-green-500">➜</span>
                                        {"// About_Me"}
                                    </div>
                                    <p className="text-sm lg:text-base font-light leading-relaxed text-neutral-200 pl-4 border-l-2 border-green-500/30">
                                        I&apos;m a Computer Engineering graduate and full-stack web developer with experience designing and building web-based systems for government, healthcare, and construction environments. My work focuses on turning complex workflows into clear, reliable digital systems.
                                    </p>
                                    <div className="mt-8 pt-4 border-t border-white/10 text-xs text-neutral-600">
                                        Last modified: Today 14:02 PM
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'specialization',
                            label: 'SPECIALIZATION',
                            content: (
                                <div>
                                    <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="text-green-500">➜</span>
                                        {"// What_I_Do"}
                                    </div>
                                    <p className="text-sm lg:text-base font-light leading-relaxed text-neutral-300 mb-6">
                                        I specialize in system analysis, web application development, and workflow-driven software design. I work closely with stakeholders to translate requirements into structured, maintainable web systems—especially for regulated or high-accountability settings.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2 text-xs text-neutral-400">
                                            <span className="text-green-500 mt-1">▸</span>
                                            <span>Database design & role-based access control</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-neutral-400">
                                            <span className="text-green-500 mt-1">▸</span>
                                            <span>API integration & responsive UI development</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-neutral-400">
                                            <span className="text-green-500 mt-1">▸</span>
                                            <span>Technical documentation & system auditing</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </OsWindow>



            {/* CAREER.log Window */}
            <OsWindow
                id="CAREER.log"
                title="CAREER.log - Experience & Education"
                isOpen={zOrder.includes('CAREER.log')}
                isActive={activeWindow === 'CAREER.log'}
                onClose={() => closeWindow('CAREER.log')}
                onFocus={() => focusWindow('CAREER.log')}
                className="top-1/2 left-1/2 max-w-lg"
            >
                <WindowTabs
                    tabs={[
                        {
                            id: 'experience',
                            label: 'EXPERIENCE',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// Professional_Experience"}
                                    </div>
                                    <div className="space-y-6 relative pl-6">
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />
                                        {experiences.map((exp, index) => (
                                            <div key={index} className="group relative">
                                                <div className="absolute -left-6 top-1 font-mono text-white text-xs">
                                                    {index === 0 ? '█' : '▓'}
                                                </div>
                                                <div className="border-b border-neutral-800 pb-3 group-hover:border-neutral-700 transition-colors">
                                                    <div className="flex flex-col gap-1 mb-1">
                                                        <span className="text-base font-bold text-white font-mono group-hover:text-green-400 transition-colors">
                                                            {exp.company}
                                                        </span>
                                                        <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                                                            <span className="text-neutral-500 uppercase">[ {exp.period} ]</span>
                                                            <span className="text-neutral-600 italic">@ {exp.location}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-neutral-400 font-mono text-xs">{exp.role}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'education',
                            label: 'EDUCATION',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// Education_&_Background"}
                                    </div>
                                    <div className="text-xs text-neutral-300 font-mono border-l-2 border-white/20 pl-4 py-1">
                                        <div className="font-bold text-white mb-1">BS Computer Engineering</div>
                                        <div className="text-neutral-500">University of Science and Technology of Southern Philippines</div>
                                        <div className="mt-2 text-neutral-400 italic">
                                            &quot;Strong foundation in systems thinking, software development, and applied engineering.&quot;
                                        </div>
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'certifications',
                            label: 'CERTIFICATIONS',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// Certifications_&_Learning"}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2 text-xs text-neutral-300">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <div>
                                                <div className="font-bold">Cisco Networking Academy</div>
                                                <div className="text-neutral-500 text-[10px] space-y-1 mt-1 font-mono uppercase tracking-tighter">
                                                    <div>• Introduction to Cybersecurity</div>
                                                    <div>• Networking Essentials</div>
                                                    <div>• Enterprise Networking, Security, and Automation</div>
                                                    <div>• Switching, Routing and Wireless Essentials</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-neutral-300">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <div>
                                                <div className="font-bold">freeCodeCamp Certification</div>
                                                <div className="text-neutral-500 text-[10px] space-y-1 mt-1 font-mono uppercase tracking-tighter">
                                                    <div>• Responsive Web Design</div>
                                                    <div>• Front End Development Libraries Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </OsWindow>

            {/* STACK.exe Window */}
            <OsWindow
                id="STACK.exe"
                title="STACK.exe - Tech Stack"
                isOpen={zOrder.includes('STACK.exe')}
                isActive={activeWindow === 'STACK.exe'}
                onClose={() => closeWindow('STACK.exe')}
                onFocus={() => focusWindow('STACK.exe')}
                className="top-1/2 left-1/2 w-[90%]"
            >
                <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    {"// Technical_Stack"}
                </div>

                {/* Categorized Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Frontend */}
                    <div className="border border-white/10 bg-neutral-900/30 p-3">
                        <div className="font-mono text-[10px] text-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>▸</span> FRONTEND
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {stackCategories.frontend.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/5 border border-white/20 text-white font-mono text-[10px] hover:bg-white/10 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="border border-white/10 bg-neutral-900/30 p-3">
                        <div className="font-mono text-[10px] text-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>▸</span> BACKEND
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {stackCategories.backend.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/5 border border-white/20 text-white font-mono text-[10px] hover:bg-white/10 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Database */}
                    <div className="border border-white/10 bg-neutral-900/30 p-3">
                        <div className="font-mono text-[10px] text-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>▸</span> DATABASE
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {stackCategories.database.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/5 border border-white/20 text-white font-mono text-[10px] hover:bg-white/10 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="border border-white/10 bg-neutral-900/30 p-3">
                        <div className="font-mono text-[10px] text-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>▸</span> TOOLS
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {stackCategories.tools.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/5 border border-white/20 text-white font-mono text-[10px] hover:bg-white/10 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* System Status */}
                <div className="mt-4 grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                    <div className="text-[10px] text-green-500 font-mono">
                        SYSTEMS: SECURE
                    </div>
                    <div className="text-[10px] text-green-500 font-mono text-right">
                        DB: CONNECTED
                    </div>
                </div>
            </OsWindow>

            {/* Taskbar */}
            <OsTaskbar
                activeWindow={activeWindow}
                openWindows={zOrder.map(id => ({
                    id,
                    title: id === 'README.txt' ? 'README.txt'
                        : id === 'CAREER.log' ? 'CAREER.log'
                            : 'STACK.exe'
                }))}
                onTabClick={(id) => {
                    if (activeWindow !== id) {
                        focusWindow(id);
                    }
                }}
            />
        </div>
    );
}
