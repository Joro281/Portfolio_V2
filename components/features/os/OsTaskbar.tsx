'use client';

import { useState, useEffect } from 'react';

interface OsTaskbarProps {
    openWindows?: { id: string; title: string }[];
    activeWindow?: string | null;
    onTabClick?: (id: string) => void;
}

export default function OsTaskbar({ openWindows = [], activeWindow, onTabClick }: OsTaskbarProps) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-white/20 bg-black/90 backdrop-blur-md flex items-center justify-between px-4 z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 mr-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 hidden sm:inline-block">
                        SYSTEM_ONLINE
                    </span>
                </div>

                {/* Taskbar Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto max-w-[60vw] scrollbar-hide">
                    {openWindows.map((win) => (
                        <button
                            key={win.id}
                            onClick={() => onTabClick?.(win.id)}
                            className={`
                                h-8 px-3 flex items-center gap-2 border-x border-t border-white/20 
                                font-mono text-[10px] uppercase tracking-wider transition-colors min-w-[100px] max-w-[150px]
                                ${win.id === activeWindow
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white/50 hover:bg-white/10 hover:text-white'}
                            `}
                        >
                            <span className="truncate w-full text-left">{win.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-6 pl-4 border-l border-white/20">
                <span className="font-mono text-[10px] text-white/50 uppercase hidden sm:inline-block">
                    MEM: 64TB OK
                </span>
                <span className="font-mono text-xs text-white">
                    {time}
                </span>
            </div>
        </div>
    );
}
