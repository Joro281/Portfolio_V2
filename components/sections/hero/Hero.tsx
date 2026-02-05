"use client";

import { Github, Facebook, Linkedin, Instagram, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroAsciiArt from './HeroAsciiArt';
import TextMorph from '../../shared/TextMorph';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.21, 0.47, 0.32, 0.98] as any,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.21, 0.47, 0.32, 0.98] as any,
      },
    },
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative pt-32 md:pt-40 lg:pt-0 bg-black overflow-hidden">
      {/* TV Static/Scanline Effect */}

      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          backgroundSize: '100% 4px',
          opacity: 0.3,
        }}
      />

      {/* Gradient TV Noise */}
      <div className="absolute inset-0 w-full h-full pointer-events-none gradient-tv-noise z-10" style={{ mixBlendMode: 'screen' }} />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          opacity: 0.4,
        }}
      />

      {/* Flickering Light Effect */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none animate-tv-flicker"
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          mixBlendMode: 'overlay',
        }}
      />

      <motion.div
        className="w-full max-w-[1600px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Vertical Social Links (Desktop only) */}
        <motion.div
          className="hidden lg:flex flex-col items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 gap-6 z-20"
          variants={socialVariants}
        >
          {[
            { Icon: Github, href: "https://github.com/jorodotexe", label: "GitHub" },
            { Icon: Facebook, href: "https://www.facebook.com/clark.lim.7739", label: "Facebook" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/clark-joross-lim-b45217374/", label: "LinkedIn" },
            { Icon: Instagram, href: "https://www.instagram.com/jorodotexe/", label: "Instagram" },
            { Icon: FileText, href: "https://drive.google.com/drive/folders/1t0P5m40LscY2cz2eau6XF_Q4wKU8dT70", label: "CV" },
            { Icon: Mail, href: "https://mail.google.com/mail/u/0/?fs=1&to=clarkjorosslim@gmail.com&tf=cm", label: "Email" }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label={social.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + (i * 0.1) }}
            >
              <social.Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left: Title & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-20 relative z-10">
            <motion.h1
              className="text-[14vw] lg:text-[10rem] leading-[0.8] font-black tracking-[-0.06em] uppercase pixelated-text"
              variants={itemVariants}
            >
              <span className="block">
                <TextMorph text="JORO /" delay={0} duration={1500} />
              </span>
              <span className="block pl-2 lg:pl-12 text-neutral-400 text-[11vw] lg:text-[7.5rem]">
                <TextMorph text="FRONTEND" delay={300} duration={1500} />
              </span>
            </motion.h1>

            <motion.div
              className="max-w-md mt-6 lg:pl-2"
              variants={itemVariants}
            >
              <p className="text-sm md:text-base font-mono leading-relaxed text-neutral-400 uppercase tracking-wide border-l border-neutral-700 pl-4">
                <TextMorph
                  text="Creating thoughtful digital experiences through a lens of minimalism and precision. "
                  delay={600}
                  duration={2000}
                  as="span"
                />
                <span className="text-white">
                  <TextMorph
                    text="I build systems, not just pages."
                    delay={1200}
                    duration={1800}
                    as="span"
                  />
                </span>
              </p>

              <motion.div
                className="flex flex-wrap items-center gap-6 mt-8 pl-4"
                variants={itemVariants}
              >
                <Link
                  className="text-sm font-bold uppercase tracking-wider border-b-2 border-white pb-1 hover:border-neutral-500 transition-colors"
                  href="/work"
                >
                  VIEW WORKS
                </Link>
                <span className="text-neutral-600">/</span>
                <Link
                  className="text-sm font-bold uppercase tracking-wider border-b-2 border-transparent pb-1 hover:border-white text-neutral-400 hover:text-white transition-colors"
                  href="/contact"
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: ASCII Art */}
          <motion.div
            className="lg:col-span-5 w-full h-full flex flex-col justify-end items-end relative min-h-[50vh] lg:min-h-screen pb-12 lg:pb-0 overflow-hidden"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent lg:hidden z-0"></div>
            <div className="relative z-0 w-full text-right opacity-80 select-none">
              <HeroAsciiArt />
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
