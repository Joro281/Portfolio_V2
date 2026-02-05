'use client';

import { useState, ReactNode } from 'react';

interface Tab {
    id: string;
    label: string;
    content: ReactNode;
}

interface WindowTabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

export default function WindowTabs({ tabs, defaultTab }: WindowTabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    return (
        <div className="flex flex-col h-full">
            {/* Tab Headers */}
            <div className="flex border-b border-white/20 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all
                            ${activeTab === tab.id
                                ? 'bg-white text-black border-t-2 border-x border-white'
                                : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5 border-t-2 border-transparent'}
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-auto">
                {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}
