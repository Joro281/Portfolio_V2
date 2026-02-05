'use client';

import { LucideIcon } from 'lucide-react';

interface OsIconProps {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
}

export default function OsIcon({ label, icon: Icon, onClick }: OsIconProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-2 group w-24 p-2 rounded-sm hover:bg-white/10 transition-colors focus:outline-none focus:bg-white/10"
        >
            <div className="w-12 h-12 flex items-center justify-center border border-transparent group-hover:border-white/50 transition-colors bg-black/50 backdrop-blur-sm">
                <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-black/50 px-1 py-0.5 group-hover:bg-white group-hover:text-black transition-colors border border-transparent group-hover:border-white">
                {label}
            </span>
        </button>
    );
}
