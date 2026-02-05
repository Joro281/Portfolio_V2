'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Ultra-snappy transition for the cursor movement to eliminate lag
    const springConfig = { damping: 50, stiffness: 1500, restDelta: 0.001 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <div className="relative group">
                {/* 
                   Using 3 layers for RGB split / Chromatic Aberration 
                   Red layer, Cyan layer, and main White layer
                */}

                {/* Red Glitch Layer */}
                <motion.div
                    className="absolute top-0 left-0 text-[#ff0000] mix-blend-lighten opacity-80"
                    animate={{
                        x: isHovering ? [0, -4, 2, -1, 0] : [0, -1, 1, 0],
                        y: isHovering ? [0, 2, -2, 1, 0] : [0, 1, -1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.2,
                        ease: "linear"
                    }}
                >
                    <ArrowIcon />
                </motion.div>

                {/* Cyan Glitch Layer */}
                <motion.div
                    className="absolute top-0 left-0 text-[#00ffff] mix-blend-lighten opacity-80"
                    animate={{
                        x: isHovering ? [0, 4, -2, 3, 0] : [0, 1.5, -1.5, 0],
                        y: isHovering ? [0, -3, 2, -2, 0] : [0, -1, 1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.18,
                        ease: "linear"
                    }}
                >
                    <ArrowIcon />
                </motion.div>

                {/* Main White Layer */}
                <motion.div
                    className="relative text-white"
                    animate={{
                        skewX: isHovering ? [0, 15, -15, 0] : 0,
                        opacity: isHovering ? [1, 0.4, 0.9, 1] : [1, 0.8, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.1,
                        ease: "linear"
                    }}
                >
                    <ArrowIcon />
                </motion.div>
            </div>
        </motion.div>
    );
}

// Simple pixel-ish arrow cursor SVG
function ArrowIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(-10deg)' }}
        >
            <path d="M0 0V16L4.5 12.5L8 19L11 17L7.5 10.5L13 10.5L0 0Z" />
        </svg>
    );
}
