'use client';

import { useState, useEffect, useMemo } from 'react';

const RANDOM_CHARS = ['#', '@', '%', '+', '-', '=', '*', '.', ':', ' ', '/', '\\', '|', '_', 'A', 'B', 'C', 'X', 'Y', 'Z'];

interface TextMorphProps {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
    as?: 'span' | 'h1' | 'h2' | 'p' | 'div';
    enableGlitch?: boolean;
    style?: React.CSSProperties;
}

export default function TextMorph({
    text,
    delay = 0,
    duration = 2000,
    className = '',
    as: Component = 'span',
    enableGlitch = true,
    style = {}
}: TextMorphProps) {
    const finalChars = useMemo(() => text.split(''), [text]);

    const [displayedText, setDisplayedText] = useState(text);

    useEffect(() => {
        const initialRandom = text.split('').map((char) => {
            if (char === ' ' || char === '\n') return char;
            return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
        });

        // Avoid synchronous setState by pushing to next tick
        const timeoutId = setTimeout(() => {
            setDisplayedText(initialRandom.join(''));
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [text]);

    const [hasStarted, setHasStarted] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        // Wait for delay before starting
        const delayTimeout = setTimeout(() => {
            setHasStarted(true);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [delay]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        let animationFrame: number;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentChars = finalChars.map((finalChar) => {
                if (finalChar === ' ' || finalChar === '\n') return finalChar;

                const shouldReveal = Math.random() < easeProgress;

                if (shouldReveal) {
                    return finalChar;
                } else {
                    return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
                }
            });

            setDisplayedText(currentChars.join(''));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setDisplayedText(text);
                setIsAnimationComplete(true);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [hasStarted, duration, finalChars, text]);

    // Random glitch effect after animation completes
    useEffect(() => {
        if (!isAnimationComplete || !enableGlitch) return;

        const scheduleGlitch = () => {
            // Random interval between 5-15 seconds
            const nextGlitchDelay = 5000 + Math.random() * 10000;

            return setTimeout(() => {
                setIsGlitching(true);

                // Glitch duration between 100-300ms
                const glitchDuration = 100 + Math.random() * 200;

                // Scramble text during glitch
                const glitchInterval = setInterval(() => {
                    const scrambled = finalChars.map((char) => {
                        if (char === ' ' || char === '\n') return char;
                        // 30% chance to scramble each character
                        if (Math.random() < 0.3) {
                            return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
                        }
                        return char;
                    }).join('');
                    setDisplayedText(scrambled);
                }, 50);

                setTimeout(() => {
                    clearInterval(glitchInterval);
                    setDisplayedText(text);
                    setIsGlitching(false);
                    // Schedule next glitch
                    const nextTimeout = scheduleGlitch();
                    return () => clearTimeout(nextTimeout);
                }, glitchDuration);
            }, nextGlitchDelay);
        };

        const timeoutId = scheduleGlitch();
        return () => clearTimeout(timeoutId);
    }, [isAnimationComplete, enableGlitch, finalChars, text]);

    return (
        <Component
            className={`${className} ${isGlitching ? 'glitch-effect' : ''}`}
            style={{
                display: 'inline-block',
                ...style
            }}
            suppressHydrationWarning
        >
            {displayedText}
        </Component>
    );
}
