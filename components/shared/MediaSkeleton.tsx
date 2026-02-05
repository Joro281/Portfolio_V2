'use client';

import { motion } from 'framer-motion';

interface MediaSkeletonProps {
    className?: string;
    aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
}

export default function MediaSkeleton({
    className = '',
    aspectRatio = 'auto'
}: MediaSkeletonProps) {
    const aspectRatioClasses = {
        video: 'aspect-video',
        square: 'aspect-square',
        portrait: 'aspect-[3/4]',
        auto: ''
    };

    return (
        <div
            className={`relative overflow-hidden bg-neutral-900 ${aspectRatioClasses[aspectRatio]} ${className}`}
        >
            <motion.div
                className="absolute inset-0 bg-neutral-800"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            {/* Brutalist "Loading" Text or Icon if needed */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-mono text-[10px] text-neutral-700 tracking-[0.2em] uppercase">
                    Loading Media_
                </span>
            </div>
        </div>
    );
}
