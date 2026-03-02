"use client";
import Icon from "./icons";

export default function BottomCTA() {
    return (
        <section
            id="endBanner"
            className="
                relative mt-24 rounded-2xl
                bg-gradient-to-r from-pink-300 to-rose-100
                text-black
                dark:from-black dark:to-zinc-900
                dark:text-white
                px-8 py-16
                text-center
                "
        >
            <h2 className="text-3xl font-semibold">
                Let’s build something meaningful.
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-black/70 dark:text-zinc-300">
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
                    className="
                        rounded-full border px-6 py-3 text-sm font-medium transition
                        border-black/30 hover:bg-black/5
                        dark:border-white/30 dark:hover:bg-white/10
                        "
                >
                    Call Me
                </a>

                <a
                    href="/Resumé_SofieKirkNielsen.pdf"
                    download
                    className="
                        rounded-full border px-6 py-3 text-sm font-medium transition
                        border-black/30 hover:bg-black/5
                        dark:border-white/30 dark:hover:bg-white/10
                        "
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
                    <Icon darkSrc="/my-cv/Linkedin_White.png" alt="LinkedIn" lightSrc="/my-cv/Linkedin_Black.png" />
                </a>

                <a
                    href="https://github.com/sofie-kirk22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                    aria-label="GitHub"
                >
                    <Icon darkSrc="/my-cv/GitHub_White.png" alt="GitHub" lightSrc="/my-cv/GitHub_Black.png" />
                </a>
            </div>
        </section>
    );
}
