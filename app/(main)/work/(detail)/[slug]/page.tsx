import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github, Figma, Globe, FolderOpen, Lock, LucideIcon } from 'lucide-react';
import TextMorph from '@/components/shared/TextMorph';
import ScrollProgress from '@/components/layout/ScrollProgress';
import { projects, getProjectBySlug, getNextProject } from '@/data/projectsData';
import SectionReveal from '@/components/shared/SectionReveal';
import MediaLoader from '@/components/shared/MediaLoader';

export default async function ProjectPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { slug } = await params;
    const { page } = await searchParams;
    const currentPage = (page as string) || '1';
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const nextProject = getNextProject(slug);

    return (
        <div className="text-white min-h-screen flex flex-col font-display selection:bg-white selection:text-black overflow-x-hidden relative">
            {/* Scroll Progress - Kept as it's specific to project detail reading */}
            <div className="fixed top-0 left-0 w-full z-[60]">
                <ScrollProgress />
            </div>

            {/* Sub-nav for back button - Repositioned to top-0 */}
            <div className="w-full fixed top-0 left-0 z-40 bg-black/50 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center">
                    <Link
                        href={`/work${currentPage !== '1' ? `?page=${currentPage}` : ''}`}
                        className="font-mono text-[10px] uppercase tracking-widest hover:text-neutral-400 transition-colors flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Work
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <main className="w-full pt-32 pb-20 px-6">
                {/* Header */}
                <header className="max-w-[1600px] mx-auto mb-12 md:mb-16 lg:mb-20">
                    <div className="text-[12vw] md:text-[10vw] lg:text-[7.5rem] leading-[0.8] font-black tracking-tighter uppercase mb-12 break-words">
                        {project.title.split(' ').map((word, i) => (
                            <div key={i} className="flex">
                                <TextMorph
                                    text={word}
                                    className="block"
                                    delay={i * 200}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Metadata Bar */}
                    <div className="w-full border-t border-b border-white/20 py-8 md:py-6 mb-12 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 font-mono text-[10px] md:text-xs uppercase tracking-widest text-neutral-300 w-full xl:w-auto">
                            <span className="w-fit">[ Role: {project.role} ]</span>
                            <span className="w-fit">[ Year: {project.year} ]</span>
                            <span className="w-fit">[ Type: {project.type} ]</span>
                        </div>

                        {/* Resources Links */}
                        {project.resources && (
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                                {Object.entries(project.resources).map(([key, link]) => {
                                    const isAvailable = link && link !== '#';
                                    const labels: Record<string, string> = {
                                        demo: 'Live Demo',
                                        github: 'Github',
                                        figma: 'Figma',
                                        files: 'Files'
                                    };

                                    const Icons: Record<string, LucideIcon> = {
                                        demo: Globe,
                                        github: Github,
                                        figma: Figma,
                                        files: FolderOpen
                                    };

                                    const Icon = Icons[key] || Globe;
                                    const label = labels[key] || key;

                                    if (isAvailable) {
                                        return (
                                            <a
                                                key={key}
                                                href={link as string}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 group"
                                            >
                                                <Icon className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                                                    {label}
                                                </span>
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={key}
                                                className="flex items-center gap-2 opacity-20 cursor-help group/na relative"
                                            >
                                                <Lock className="w-3 h-3 text-neutral-500" />
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 line-through decoration-neutral-700">
                                                    {label}
                                                </span>
                                                <div className="absolute -top-8 left-0 scale-0 group-hover/na:scale-100 transition-all bg-white text-black text-[8px] px-2 py-1 whitespace-nowrap font-mono font-bold z-50">
                                                    {"// NOT AVAILABLE"}
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        )}
                    </div>

                    {/* Hero Image/Video */}
                    <SectionReveal delay={0.2} direction="right">
                        <div className="w-full aspect-[16/10] md:aspect-video bg-neutral-900 border border-white/20 flex items-center justify-center relative overflow-hidden group">
                            <MediaLoader
                                video={project.video}
                                image={project.image}
                                alt={project.title}
                                priority
                                aspectRatio="video"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className={`absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-sm px-2 py-1 border border-white/5 transition-colors duration-500 z-20 ${project.video ? 'text-neutral-500' : 'text-neutral-200 border-white/20'}`}>
                                Fig 0.1 {project.video ? '// MOTION' : '// STATIC'} — Project Overview
                            </div>
                        </div>
                    </SectionReveal>
                </header>

                {/* Content Sections */}
                <div className="max-w-[720px] mx-auto flex flex-col gap-24 md:gap-32">
                    {/* Overview Section */}
                    <SectionReveal>
                        <section>
                            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6 border-l border-white/20 pl-4">
                                {'// 01_Overview'}
                            </div>
                            <p className="text-xl md:text-2xl leading-relaxed font-light text-neutral-200">
                                {project.overview}
                            </p>
                        </section>
                    </SectionReveal>

                    {/* Problem Section */}
                    <SectionReveal direction="left" delay={0.1}>
                        <section>
                            <div className="mb-8">
                                <h2 className="font-mono text-lg text-white mb-2 inline-block">
                                    [ P R O B L E M ]
                                </h2>
                                <div className="w-full h-px bg-white/20"></div>
                            </div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                {project.problem}
                            </p>
                        </section>
                    </SectionReveal>

                    {/* Figure for Problem (if exists) */}
                    {project.figures && project.figures.find(f => f.section === 'problem') && (
                        <SectionReveal delay={0.1} direction="left">
                            {(() => {
                                const figure = project.figures!.find(f => f.section === 'problem')!;
                                return (
                                    <figure className="w-full -mx-4 md:-mx-12 lg:-mx-24 relative my-8">
                                        <div className="border border-white/20 p-1 bg-neutral-900 overflow-hidden">
                                            <div className="aspect-[16/10] bg-neutral-800 w-full flex items-center justify-center relative group">
                                                <MediaLoader
                                                    video={figure.video}
                                                    image={figure.image}
                                                    alt={figure.caption}
                                                    fit={figure.fit}
                                                    aspectRatio="video"
                                                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                                />
                                            </div>
                                        </div>
                                        <figcaption className={`font-mono text-[10px] mt-3 text-right uppercase tracking-widest transition-colors duration-500 ${figure.video ? 'text-neutral-500' : 'text-neutral-300'}`}>
                                            Fig 1.0 {figure.video ? '// MOTION' : '// STATIC'} — {figure.caption}
                                        </figcaption>
                                    </figure>
                                );
                            })()}
                        </SectionReveal>
                    )}

                    {/* Solution Section */}
                    <SectionReveal direction="right" delay={0.1}>
                        <section>
                            <div className="mb-8">
                                <h2 className="font-mono text-lg text-white mb-2 inline-block">
                                    [ S O L U T I O N ]
                                </h2>
                                <div className="w-full h-px bg-white/20"></div>
                            </div>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                                {project.solution}
                            </p>
                            <ul className="font-mono text-sm text-neutral-500 space-y-3 pl-4 border-l border-neutral-800">
                                {project.solutionPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-white">&gt;</span> {point}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </SectionReveal>

                    {/* Figure for Solution (if exists) */}
                    {project.figures && project.figures.find(f => f.section === 'solution') && (
                        <SectionReveal delay={0.2}>
                            {(() => {
                                const figure = project.figures!.find(f => f.section === 'solution')!;
                                return (
                                    <figure className="w-full -mx-4 md:-mx-12 lg:-mx-24 relative my-8">
                                        <div className="border border-white/20 p-1 bg-neutral-900 overflow-hidden">
                                            <div className="aspect-[16/10] bg-neutral-800 w-full flex items-center justify-center relative group">
                                                <MediaLoader
                                                    video={figure.video}
                                                    image={figure.image}
                                                    alt={figure.caption}
                                                    fit={figure.fit}
                                                    aspectRatio="video"
                                                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                                />
                                            </div>
                                        </div>
                                        <figcaption className={`font-mono text-[10px] mt-3 text-right uppercase tracking-widest transition-colors duration-500 ${figure.video ? 'text-neutral-500' : 'text-neutral-300'}`}>
                                            Fig 2.0 {figure.video ? '// MOTION' : '// STATIC'} — {figure.caption}
                                        </figcaption>
                                    </figure>
                                );
                            })()}
                        </SectionReveal>
                    )}

                    {/* Outcome Section */}
                    <SectionReveal direction="down" delay={0.2}>
                        <section>
                            <div className="mb-8">
                                <h2 className="font-mono text-lg text-white mb-2 inline-block">
                                    [ O U T C O M E ]
                                </h2>
                                <div className="w-full h-px bg-white/20"></div>
                            </div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                {project.outcome}
                            </p>
                        </section>
                    </SectionReveal>

                </div>
            </main>

            {/* Next Project Navigation */}
            <nav className="border-t border-white/10 py-32 w-full">
                <div className="max-w-[1600px] mx-auto px-6 text-center">
                    <Link
                        href={`/work/${nextProject.slug}${currentPage !== '1' ? `?page=${currentPage}` : ''}`}
                        className="group inline-flex flex-col items-center gap-6"
                    >
                        <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.2em]">
                            Next Project
                        </span>
                        <span className="text-3xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white group-hover:text-neutral-400 transition-colors flex flex-col items-center gap-4">
                            <span className="font-mono font-light text-neutral-600 group-hover:text-white transition-colors rotate-90 md:rotate-0">
                                →
                            </span>{' '}
                            <span className="text-center">{nextProject.title}</span>
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
