'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { type StaticImageData } from 'next/image';
import MediaSkeleton from './MediaSkeleton';

interface MediaLoaderProps {
    src?: string;
    image?: StaticImageData | string | null; // Fixed: replaced 'any' with specific type
    alt?: string;
    video?: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
    aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
    fit?: 'cover' | 'contain';
}

export default function MediaLoader({
    src,
    image,
    alt = '',
    video,
    className = '',
    fill = false,
    priority = false,
    aspectRatio = 'auto',
    fit = 'cover'
}: MediaLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure we handle cases where media might already be loaded (e.g., from cache)
    useEffect(() => {
        const checkReady = () => {
            if (video && videoRef.current && videoRef.current.readyState >= 3) {
                setIsLoading(false);
            }
        };
        checkReady();
    }, [video]);

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {isLoading && (
                <MediaSkeleton
                    className="absolute inset-0 z-10"
                    aspectRatio={aspectRatio}
                />
            )}

            {video ? (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsLoading(false)}
                    className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                >
                    <source src={video} type="video/mp4" />
                </video>
            ) : (image || src) ? (
                <Image
                    src={(image || src)!}
                    alt={alt}
                    fill={fill}
                    priority={priority}
                    onLoad={() => setIsLoading(false)}
                    className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    {...(fill ? {} : { width: 800, height: 500 })}
                />
            ) : null}
        </div>
    );
}
