'use client';

import { useState } from 'react';
import { FileText, Music, Globe } from 'lucide-react';
import OsWindow from './OsWindow';
import MediaLoader from '../../shared/MediaLoader';
import OsIcon from './OsIcon';
import OsTaskbar from './OsTaskbar';
import WindowTabs from './WindowTabs';
import AboutAsciiArt from './AboutAsciiArt';
import BootScreen from './BootScreen';

export default function OsDesktopPersonal() {
    const [isBooting, setIsBooting] = useState(true);
    const [activeWindow, setActiveWindow] = useState<string | null>('BIO.txt');
    const [zOrder, setZOrder] = useState<string[]>(['BIO.txt']);

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
            <div className="relative z-10 flex-1 p-6 flex flex-row lg:flex-col gap-4 lg:gap-6 content-start justify-items-start overflow-x-auto lg:overflow-visible">
                <OsIcon
                    label="BIO.txt"
                    icon={FileText}
                    onClick={() => openWindow('BIO.txt')}
                />
                <OsIcon
                    label="INTERESTS.log"
                    icon={Globe}
                    onClick={() => openWindow('INTERESTS.log')}
                />
                <OsIcon
                    label="MEDIA.list"
                    icon={Music}
                    onClick={() => openWindow('MEDIA.list')}
                />
            </div>

            {/* Windows Layer */}
            {/* BIO.txt Window */}
            <OsWindow
                id="BIO.txt"
                title="BIO.txt - About Me"
                isOpen={zOrder.includes('BIO.txt')}
                isActive={activeWindow === 'BIO.txt'}
                onClose={() => closeWindow('BIO.txt')}
                onFocus={() => focusWindow('BIO.txt')}
                className="top-1/2 left-1/2"
            >
                <WindowTabs
                    tabs={[
                        {
                            id: 'about',
                            label: 'ABOUT',
                            content: (
                                <div>
                                    <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="text-purple-500">➜</span>
                                        {"// Who_I_Am"}
                                    </div>
                                    <div className="text-sm lg:text-base font-light leading-relaxed text-neutral-300 pl-4 border-l-2 border-red-500/30 italic">
                                        &quot;Beyond the code, I&apos;m just a normal guy. I often feel that no matter how hard I try, I&apos;m still stuck in the same place. I talk big, projecting a version of myself that doesn&apos;t exist yet, while reality keeps me grounded in my own doubts. I&apos;m fighting to fill an empty shell. I am the architect of my own destruction, fully responsible for my actions and the outcome I desire but cannot yet reach. Until I do something I can genuinely be proud of, until I bridge the gap between my words and my actions, I will still hate myself.&quot;
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-white/10 text-xs text-neutral-600">
                                        Last modified: Today 04:02 AM
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'personality',
                            label: 'PERSONALITY',
                            content: (
                                <div>
                                    <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="text-purple-500">➜</span>
                                        {"// Character_Traits"}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Reserved Observer</div>
                                            <div className="text-xs text-neutral-400">Restrained around strangers, I listen more than I speak. But in silence, I analyze everything.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Intuitive Empath</div>
                                            <div className="text-xs text-neutral-400">I read the room instinctively. My priority is ensuring others never feel uncomfortable or out of place.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Grace Under Pressure</div>
                                            <div className="text-xs text-neutral-400">Chaos doesn&apos;t rattle me. When the stakes are high, I stay grounded and focused.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Relentless Drive</div>
                                            <div className="text-xs text-neutral-400 italic">&quot;Until I prove myself, I have no right to confidence or rest.&quot;</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </OsWindow>

            {/* INTERESTS.log Window */}
            <OsWindow
                id="INTERESTS.log"
                title="INTERESTS.log - Hobbies"
                isOpen={zOrder.includes('INTERESTS.log')}
                isActive={activeWindow === 'INTERESTS.log'}
                onClose={() => closeWindow('INTERESTS.log')}
                onFocus={() => focusWindow('INTERESTS.log')}
                className="top-1/2 left-1/2 max-w-lg"
            >
                <WindowTabs
                    tabs={[
                        {
                            id: 'gaming',
                            label: 'GAMING',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// DOTA_2_STATS"}
                                    </div>

                                    {/* GIF and Stats Row */}
                                    <div className="flex gap-4 items-center mb-6">
                                        {/* Rubick GIF - Left Side */}
                                        <div className="flex-shrink-0 w-32 h-32 relative">
                                            <MediaLoader
                                                src="/images/rubick.gif"
                                                alt="Rubick Dota 2"
                                                aspectRatio="square"
                                                className="rounded-sm"
                                            />
                                        </div>

                                        {/* Stats - Right Side */}
                                        <div className="space-y-3 text-xs flex-1">
                                            <div className="flex items-start gap-2 text-neutral-300">
                                                <span className="text-purple-500 mt-1">▸</span>
                                                <div className="flex-1">
                                                    <span className="font-bold text-white">FAVORITE ROLE:</span>
                                                    <span className="ml-2 text-neutral-400">Support</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 text-neutral-300">
                                                <span className="text-purple-500 mt-1">▸</span>
                                                <div className="flex-1">
                                                    <span className="font-bold text-white">MAIN HEROES:</span>
                                                    <span className="ml-2 text-neutral-400">Rubick, Snapfire, Tiny</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 text-neutral-300">
                                                <span className="text-purple-500 mt-1">▸</span>
                                                <div className="flex-1">
                                                    <span className="font-bold text-white">RANK:</span>
                                                    <span className="ml-2 text-neutral-400">Immortal</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 bg-purple-900/10 border border-purple-500/20 text-xs text-purple-300 italic">
                                        &quot;Dota has been my escape from reality since high school, a vice that&apos;s stayed with me. I also enjoy indie games, especially the monster-capturing genre. FPS games, however, aren&apos;t for me since I can&apos;t shoot to save my life.&quot;
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'music',
                            label: 'MUSIC',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// MY_CREATIONS"}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-[10px] text-purple-500 font-mono mb-3">ORIGINAL TRACKS:</div>

                                        {/* Music Track 1 */}
                                        <a
                                            href="https://www.youtube.com/watch?v=ewJ5hpQyAN8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 bg-neutral-900/30 border border-white/10 rounded-sm hover:border-purple-500/50 hover:bg-purple-900/10 transition-all group"
                                        >
                                            <span className="text-purple-400 group-hover:text-purple-300">♪</span>
                                            <div className="flex-1">
                                                <div className="text-xs text-white font-medium group-hover:text-purple-300 transition-colors">Closer to Death</div>
                                                <div className="text-[10px] text-neutral-500">R&B • A bit sexual</div>
                                            </div>
                                            <span className="text-[10px] text-neutral-600 group-hover:text-purple-500">→</span>
                                        </a>

                                        {/* Music Track 2 */}
                                        <a
                                            href="https://www.facebook.com/reel/1219189969432903"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 bg-neutral-900/30 border border-white/10 rounded-sm hover:border-purple-500/50 hover:bg-purple-900/10 transition-all group"
                                        >
                                            <span className="text-purple-400 group-hover:text-purple-300">♪</span>
                                            <div className="flex-1">
                                                <div className="text-xs text-white font-medium group-hover:text-purple-300 transition-colors">Ano ba tayo?</div>
                                                <div className="text-[10px] text-neutral-500">R&B • Uncertainty about a relationship</div>
                                            </div>
                                            <span className="text-[10px] text-neutral-600 group-hover:text-purple-500">→</span>
                                        </a>

                                        {/* Music Track 3 */}
                                        <a
                                            href="https://www.youtube.com/watch?v=4UjrpVWNq6I"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 bg-neutral-900/30 border border-white/10 rounded-sm hover:border-purple-500/50 hover:bg-purple-900/10 transition-all group"
                                        >
                                            <span className="text-purple-400 group-hover:text-purple-300">♪</span>
                                            <div className="flex-1">
                                                <div className="text-xs text-white font-medium group-hover:text-purple-300 transition-colors">My Favourite Mistake</div>
                                                <div className="text-[10px] text-neutral-500">R&B • Craving the memories despite it all</div>
                                            </div>
                                            <span className="text-[10px] text-neutral-600 group-hover:text-purple-500">→</span>
                                        </a>
                                    </div>

                                    <div className="mt-6 p-3 bg-purple-900/10 border border-purple-500/20 text-xs text-purple-300 italic">
                                        &quot;Music has been my way to convey feelings I can&apos;t put into words. If I ever had the luxury to live without the weight of responsibilities, I would do this for a living. I still have a lot of unreleased songs, but the probability of releasing them is near zero XD.&quot;
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'cats',
                            label: 'CATS',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// MY_FURRY_COMPANIONS"}
                                    </div>

                                    {/* Cats Image */}
                                    {/* Cats Image */}
                                    <div className="mb-4 rounded-sm overflow-hidden border border-white/10 aspect-video relative">
                                        <MediaLoader
                                            src="/images/cats.webp"
                                            alt="Milky and Colette"
                                            aspectRatio="video"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <CatItem
                                            name="MILKY"
                                            breed="Persian"
                                            description={(
                                                <>
                                                    <p>A moody Persian with a reputation for feistiness—most people at home steer clear of her, but she has a soft spot for me (sometimes). She tolerates my cuddles and pick-ups, and even though I earn a few scratches in the process, it&apos;s entirely worth it.</p>
                                                    <p className="text-neutral-400 italic">She&apos;s a silent observer, only breaking her vow of silence when hunger strikes or she decides it&apos;s time for affection.</p>
                                                </>
                                            )}
                                        />
                                        <CatItem
                                            name="COLETTE"
                                            breed="Siamese"
                                            description={(
                                                <>
                                                    <p>A sweet-natured Siamese who prefers her personal space—she&apos;s not one for being held, but she makes up for it with impeccable behavior. She&apos;s a vocal companion who loves to chat, making her the household favorite.</p>
                                                    <p className="text-purple-300 italic">Despite their differences, I love them both dearly.</p>
                                                </>
                                            )}
                                        />
                                    </div>

                                    <div className="mt-4 p-3 bg-purple-900/10 border border-purple-500/20 text-xs text-purple-300 italic">
                                        &quot;My cats are the anchors of my sanity. They are special to me, often the sole reason I strive to be better. (P.S. Forgive the photo quality—I&apos;m not exactly a photographer, as you can tell lol.)&quot;
                                    </div>
                                </div>
                            )
                        },
                        {
                            id: 'other',
                            label: 'OTHER',
                            content: (
                                <div>
                                    <div className="mb-4 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                                        {"// More_About_Me"}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Passions</div>
                                            <div className="text-xs text-neutral-400">I love singing while playing the guitar—it&apos;s my rawest form of expression.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Reflections on Time</div>
                                            <div className="text-xs text-neutral-400">I crave the feeling of being productive, yet I doomscroll on TikTok way too much.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">A Masterpiece</div>
                                            <div className="text-xs text-neutral-400">My favorite anime/manga of all time is <span className="text-purple-400 italic">Monster</span> by Naoki Urasawa. It&apos;s a must-read/watch.</div>
                                        </div>
                                        <div className="border-l-2 border-purple-500/30 pl-3">
                                            <div className="font-mono text-xs font-bold text-white mb-1">Quirks & Fears</div>
                                            <ul className="text-xs text-neutral-400 list-disc list-inside space-y-1">
                                                <li>I have a fear of heights (acrophobia).</li>
                                                <li>I wear a polo everywhere—I just like looking formal.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </OsWindow>

            {/* MEDIA.list Window */}
            <OsWindow
                id="MEDIA.list"
                title="MEDIA.list - Now Playing"
                isOpen={zOrder.includes('MEDIA.list')}
                isActive={activeWindow === 'MEDIA.list'}
                onClose={() => closeWindow('MEDIA.list')}
                onFocus={() => focusWindow('MEDIA.list')}
                className="top-1/2 left-1/2 w-[90vw] md:w-[540px]"
            >
                <div className="bg-neutral-900 text-white p-4 h-full flex flex-col font-mono">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 text-[10px] text-neutral-500 uppercase tracking-widest border-b border-white/10 pb-2">
                        <span>{'// MEDIA_PLAYER.exe'}</span>
                        <span className="text-green-500 animate-pulse">● LIVE_SIGNAL</span>
                    </div>

                    {/* Main Artist - Daniel Caesar */}
                    <div className="flex-1 flex flex-col items-center text-center space-y-4 mb-6 overflow-hidden">
                        {/* Square Artist Frame */}
                        <div className="w-full aspect-square md:w-64 md:h-64 bg-neutral-900 border border-purple-500 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0">
                                <MediaLoader
                                    src="/images/daniel.webp"
                                    alt="Daniel Caesar"
                                    aspectRatio="square"
                                    className="opacity-80"
                                />
                            </div>
                            {/* Corner Accents */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white z-10"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white z-10"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white z-10"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white z-10"></div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-white tracking-tight uppercase">Daniel Caesar</h2>
                        </div>

                        {/* Playback Controls - Icons */}
                        <div className="flex items-center gap-6 text-neutral-400 mt-4 text-lg">
                            <button className="hover:text-white transition-colors">⏮</button>
                            <button className="text-purple-400 hover:text-purple-300 transition-colors text-2xl">▶</button>
                            <button className="hover:text-white transition-colors">⏭</button>
                        </div>

                        {/* Song Stats Grid - Wireframe Style with Dropdowns */}
                        <div className="w-full grid grid-cols-1 gap-2 text-left mt-4 px-1">
                            <MusicStatItem
                                category="All_Time_Fav"
                                value="Get You"
                                description="The first Daniel Caesar song I heard back in 2013. I immediately fell in love with his sound, and it's what ultimately inspired me to start making my own music."
                            />
                            <MusicStatItem
                                category="Current_Fav"
                                value="Who Knows"
                                description={`My favorite track from his recent album, "Son of Spergy".`}
                            />
                            <MusicStatItem
                                category="Fav_Album"
                                value="Freudian"
                                description={`The most perfect album in existence (in my humble opinion >.<). Every single track is a 100/10 masterpiece.`}
                            />
                        </div>
                    </div>

                    {/* Other Artists Rotation */}
                    <div className="border-t border-white/10 pt-4">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">Your Rotation</div>
                        <div className="space-y-2">
                            {['Giveon', 'Wave to Earth', 'The Marías'].map((artist, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-default p-2 rounded-sm hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-600 group-hover:text-purple-400 group-hover:bg-purple-900/20 transition-all">♪</div>
                                        <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">{artist}</span>
                                    </div>
                                    <button className="text-neutral-600 opacity-0 group-hover:opacity-100 hover:text-purple-400 transition-all text-xs mr-2">▶</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </OsWindow>

            {/* Taskbar */}
            <OsTaskbar
                activeWindow={activeWindow}
                openWindows={zOrder.map(id => ({
                    id,
                    title: id === 'BIO.txt' ? 'BIO.txt'
                        : id === 'INTERESTS.log' ? 'INTERESTS.log'
                            : 'MEDIA.list'
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

function CatItem({ name, breed, description }: { name: string; breed: string; description: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-neutral-900/30 border border-white/10 rounded-sm overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-3 hover:bg-white/5 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-mono text-xs">^._.^</span>
                    <div className="flex flex-col">
                        <span className="font-mono text-sm font-bold text-white">{name}</span>
                        <span className="text-[10px] text-neutral-500 italic">{breed}</span>
                    </div>
                </div>
                <span className={`text-neutral-500 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="p-3 pt-0 text-xs text-neutral-300 leading-relaxed space-y-2 border-t border-white/5 mx-3 mt-1">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MusicStatItem({ category, value, description }: { category: string; value: string; description: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-transparent border border-white/10 overflow-hidden transition-all duration-300 group hover:border-purple-500/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-2 text-left flex flex-col transition-colors"
            >
                <div className="flex justify-between items-center w-full">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider group-hover:text-purple-400 font-mono transition-colors">
                        {category}
                    </div>
                    <span className={`text-[10px] text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </div>
                <div className="text-xs text-neutral-300 font-mono">
                    {'>>'} {value}
                </div>
            </button>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="px-2 pb-2 text-[10px] text-neutral-500 leading-relaxed font-mono">
                        <div className="pt-1 border-t border-white/5 italic">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

