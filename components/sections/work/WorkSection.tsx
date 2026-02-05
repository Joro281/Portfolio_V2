'use client';

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import TextMorph from "@/components/shared/TextMorph";
import MediaLoader from "@/components/shared/MediaLoader";
import { projects, ProjectData } from "@/data/projectsData";

export default function WorkSection() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredProjectId, setHoveredProjectId] = React.useState<string | null>(null);

    const currentPage = Number(searchParams.get('page')) || 1;
    const ITEMS_PER_PAGE = 4;

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const displayedProjects = projects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <main className="flex-grow pt-24 md:pt-32 w-full max-w-screen-2xl mx-auto px-8">
            {/* Header */}
            <header className="relative mb-12 md:mb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-4 gap-4">
                    <h1 className="text-[15vw] md:text-[13vw] lg:text-[12vw] font-black leading-[0.85] uppercase condensed-header">
                        <TextMorph text="SELECTED" />
                        <br />
                        <TextMorph text="WORKS" delay={200} />
                    </h1>
                    <div className="font-mono text-[10px] mb-4 text-right self-end md:self-auto">
                        <pre className="hidden md:block mb-2 leading-none">
                            {`  /\\_/\\  
 ( o.o ) 
  > ^ <  `}
                        </pre>
                        [ TOTAL: {projects.length.toString().padStart(3, '0')} ]
                    </div>
                </div>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 animate-pulse">
                    {"// HOVER_TITLE_TO_PREVIEW_WORK"}
                </div>
            </header>

            {/* Project List */}
            <section className="flex flex-col mb-24 relative">
                {displayedProjects.map((project, index) => (
                    <div
                        key={project.id}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        className="project-row group/row relative border-b border-white py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-0"
                    >
                        {/* ID Number */}
                        <div className="w-full md:w-20 font-mono text-xs opacity-50 md:vertical-text py-2">
                            <TextMorph text={project.id} delay={index * 100} />
                        </div>

                        {/* Project Title */}
                        <div className="flex-grow relative order-1 md:order-none">
                            <Link href={`/work/${project.slug}?page=${currentPage}`} className="w-fit block">
                                <TextMorph
                                    as="h2"
                                    text={project.title}
                                    className="w-fit text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight hover:italic transition-all cursor-pointer"
                                    delay={index * 100 + 50}
                                />
                            </Link>
                        </div>

                        {/* Meta Info */}
                        <div className="text-left md:text-right flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-2 order-2 md:order-none">
                            <div className="font-mono text-[10px] md:text-xs opacity-50 uppercase tracking-widest bg-white/5 md:bg-transparent px-2 py-1 md:px-0 md:py-0 pointer-events-none">
                                <TextMorph text={`${project.year} / ${project.category}`} delay={index * 100 + 100} />
                            </div>
                            <Link
                                href={`/work/${project.slug}?page=${currentPage}`}
                                className="font-mono text-xs flex items-center gap-2 hover:bg-white hover:text-black transition-all px-2 py-1"
                            >
                                <TextMorph text="VIEW" delay={index * 100 + 150} />
                                <span className="text-lg">→</span>
                            </Link>
                        </div>

                        {/* Hover Preview - Perfectly Centered in Row */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max h-max opacity-0 invisible group-hover/row:opacity-100 group-hover/row:visible transition-all duration-300 pointer-events-none z-40 hidden md:block">
                            <ProjectPreview project={project} isVisible={hoveredProjectId === project.id} />
                        </div>
                    </div>
                ))}
            </section>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mb-32 font-mono text-xs">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`uppercase tracking-widest px-1 transition-all duration-200 ${currentPage === page
                            ? 'bg-white text-black'
                            : 'text-white hover:bg-white hover:text-black'
                            }`}
                    >
                        [ {page} ]
                    </button>
                ))}
            </div>
        </main>
    );
}

function ProjectPreview({ project, isVisible }: { project: ProjectData, isVisible: boolean }) {
    const [hasStartedLoading, setHasStartedLoading] = React.useState(false);

    // Persist loading state once it has been seen once
    if (isVisible && !hasStartedLoading) {
        setHasStartedLoading(true);
    }

    return (
        <div className="relative p-2 bg-zinc-900 border border-white/20 shadow-2xl overflow-hidden min-w-[300px]">
            {hasStartedLoading ? (
                <>
                    <MediaLoader
                        video={project.video}
                        image={project.image}
                        alt={project.title}
                        aspectRatio={project.video ? 'video' : 'auto'}
                        className="h-56 md:h-64 w-auto max-w-[40vw]"
                    />
                    <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-widest bg-black/60 px-2 py-1 border border-white/10 z-20">
                        {project.video ? 'Motion Preview' : 'Static Preview'}
                    </div>
                </>
            ) : (
                <div className="h-56 md:h-64 w-full flex items-center justify-center bg-zinc-800/50 font-mono text-[8px] uppercase tracking-widest opacity-20">
                    PREPARING_PREVIEW...
                </div>
            )}
        </div>
    );
}

