import Image from 'next/image';

export default function Footer() {
    const links = [
        { href: 'https://github.com/jorodotexe', text: '[ GitHub ]' },
        { href: 'https://www.facebook.com/clark.lim.7739', text: '[ Facebook ]' },
        { href: 'https://www.linkedin.com/in/clark-joross-lim-b45217374/', text: '[ LinkedIn ]' },
        { href: 'https://www.instagram.com/jorodotexe/', text: '[ Instagram ]' },
        { href: 'https://drive.google.com/drive/folders/1t0P5m40LscY2cz2eau6XF_Q4wKU8dT70', text: '[ CV ]' },
        { href: 'https://mail.google.com/mail/u/0/?fs=1&to=clarkjorosslim@gmail.com&tf=cm', text: '[ Email ]' },
    ];

    return (
        <footer
            className="w-full py-12 bg-white text-black border-t border-black relative"
            id="contact"
        >
            {/* Diagonal Fade Bottom Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
                }}
            />
            <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                {/* Left Side - GIF */}
                <div className="flex-shrink-0">
                    <Image
                        src="/images/punpun.gif"
                        alt="Punpun Animation"
                        width={256}
                        height={256}
                        className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                        style={{ filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))' }}
                        unoptimized
                    />
                </div>

                {/* Right Side - SVG Text and Links */}
                <div className="flex flex-col items-center text-center flex-1">
                    <svg
                        className="w-full max-w-4xl mb-6 cursor-default group"
                        viewBox="0 0 600 160"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x="50%"
                            y="55"
                            textAnchor="middle"
                            className="text-[72px] font-black uppercase tracking-tighter fill-white stroke-black stroke-[1.5px] group-hover:fill-black group-hover:stroke-0 transition-all duration-300"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            LET&apos;S WORK
                        </text>
                        <text
                            x="50%"
                            y="130"
                            textAnchor="middle"
                            className="text-[72px] font-black uppercase tracking-tighter fill-white stroke-black stroke-[1.5px] group-hover:fill-black group-hover:stroke-0 transition-all duration-300"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            TOGETHER
                        </text>
                    </svg>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                className="font-mono text-sm uppercase tracking-widest px-1 hover:bg-black hover:text-white transition-all duration-200"
                                href={link.href}
                                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
