'use client';

import { X, Minus, Square } from 'lucide-react';
import { ReactNode } from 'react';

interface OsWindowProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    id: string;
    isActive: boolean;
    onFocus: () => void;
}

export default function OsWindow({
    title,
    isOpen,
    onClose,
    children,
    className = '',
    id,
    isActive,
    onFocus
}: OsWindowProps) {
    if (!isOpen) return null;

    return (
        <div
            id={id}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-black border border-white transition-all duration-200 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] ${isActive ? 'z-50 scale-100 opacity-100' : 'z-10 scale-[0.98] opacity-80'} ${className}`}
            onClick={onFocus}
        >
            {/* Title Bar */}
            <div className={`flex items-center justify-between px-3 py-2 border-b border-white ${isActive ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-500'}`}>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
                    <span>{title}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="hover:bg-black/10 p-1 rounded-sm transition-colors">
                        <Minus className="w-3 h-3" />
                    </button>
                    <button className="hover:bg-black/10 p-1 rounded-sm transition-colors">
                        <Square className="w-3 h-3" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="hover:bg-red-500 hover:text-white p-1 rounded-sm transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="bg-black p-6 font-mono text-sm overflow-y-auto max-h-[60vh] text-neutral-300 scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
                {children}
            </div>
        </div>
    );
}
