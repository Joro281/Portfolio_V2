"use client";

import { useState } from "react";
import CustomMap from "./CustomMap";
import { Send } from "lucide-react";
import TextMorph from "../../shared/TextMorph";
import SectionReveal from "../../shared/SectionReveal";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <SectionReveal direction="up" delay={0.1}>
            <div className="w-full max-w-[1600px] mx-auto px-6" id="contact">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                                <TextMorph text="GET IN" delay={0} duration={1500} /> <br />
                                <span className="text-neutral-500">
                                    <TextMorph text="TOUCH /" delay={300} duration={1500} />
                                </span>
                            </h2>
                            <p className="font-mono text-sm text-neutral-400 mt-4 uppercase tracking-widest border-l border-neutral-800 pl-4">
                                <TextMorph text="// System_Communication_Interface.exe" delay={600} duration={2000} />
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em]">{"[ NAME_ID ]"}</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="TYPE YOUR NAME..."
                                        className="bg-transparent border-b border-neutral-800 py-3 font-mono text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em]">{"[ EMAIL_ADDR ]"}</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="YOUR@ADDRESS.COM"
                                        className="bg-transparent border-b border-neutral-800 py-3 font-mono text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em]">{"[ MESSAGE_BUFFER ]"}</label>
                                <textarea
                                    rows={4}
                                    required
                                    placeholder="INITIALIZING MESSAGE CARGO..."
                                    className="bg-transparent border border-neutral-800 p-4 font-mono text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none min-h-[150px]"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    className={`group relative flex items-center justify-center px-10 py-5 border border-white font-mono text-sm uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 ${status === "success" ? "bg-green-500 border-green-500 text-black" : "hover:bg-white hover:text-black"}`}
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        {status === "idle" && <Send className="w-4 h-4 -scale-x-100" />}
                                        {status === "sending" && <span className="animate-spin text-lg">⚙</span>}
                                        {status === "success" && "MESSAGE TRANSMITTED"}
                                        {status === "idle" && "EXECUTE SEND"}
                                        {status === "sending" && "TRANSMITTING..."}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Info & Map */}
                    <div className="lg:col-span-5 flex flex-col gap-12 border-t border-neutral-800 pt-8">
                        {/* Brutalist Map Container */}
                        <div className="relative group">
                            {/* Map Decoration */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-white z-20 pointer-events-none" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-white z-20 pointer-events-none" />
                            <div className="absolute inset-0 border border-neutral-800 group-hover:border-neutral-600 transition-colors pointer-events-none z-10" />

                            <div className="relative h-[600px] w-full bg-neutral-900 overflow-hidden grayscale contrast-125">
                                <CustomMap />
                            </div>

                            {/* Map Info Badge */}
                            <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md border border-white/20 p-6 font-mono select-none">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">{"// LOCATION"}</h3>
                                    <div className="text-xs text-white leading-relaxed uppercase tracking-wider">
                                        CAGAYAN DE ORO CITY, <br />
                                        MISAMIS ORIENTAL, <br />
                                        PHILIPPINES
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionReveal>
    );
}
