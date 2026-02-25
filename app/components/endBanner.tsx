"use client";
import Image from "next/image";

export default function BottomCTA() {
    return (
        <section id="endBanner" className="relative mt-24 rounded-2xl bg-gradient-to-r from-black to-zinc-900 px-8 py-16 text-center text-white">
            <h2 className="text-3xl font-semibold">
                Let’s build something meaningful.
            </h2>

            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
                I’m currently open to opportunities in Frontend development, UX design, UI design and interaction design.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <a
                    href="mailto:sofiekirknielsen@outlook.dk"
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                    Get in Touch
                </a>

                <a
                    href="tel:+4521355029"
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                    Call Me
                </a>

                <a
                    href="/Resumé_SofieKirkNielsen.pdf"
                    download
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                    Download CV
                </a>
            </div>
            {/* Bottom Right Social Icons */}
            <div className="absolute bottom-6 left-6 flex gap-4">
                <a
                    href="https://www.linkedin.com/in/sofie-nielsen-b0aa80231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="opacity-70 hover:opacity-100 transition duration-200"
                >
                    <Image
                        src="/my-cv/Linkedin_White.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        priority
                    />
                </a>

                <a
                    href="https://github.com/sofie-kirk22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                    aria-label="GitHub"
                >
                    <Image
                        src="/my-cv/GitHub_White.png"
                        alt="GitHub"
                        width={24}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </section>
    );
}
