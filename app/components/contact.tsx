"use client";

{/* CONTACT */ }
export default function Contact() {
    return (
        <section id="contact" className="space-y-6">
            <h2 className="text-3xl font-semibold">Contact</h2>

            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                    <span className="font-medium">Mail:</span>{" "}
                    <a
                        href="mailto:sofiekirknielsen@outlook.dk"
                        className="hover:text-black dark:hover:text-white transition"
                    >
                        sofiekirknielsen@outlook.dk
                    </a>
                </p>

                <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                        href="tel:+4521355029"
                        className="hover:text-black dark:hover:text-white transition"
                    >
                        +45 21 35 50 29
                    </a>
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/sofie-nielsen-b0aa80231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black dark:hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/sofie-kirk22?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black dark:hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="/Resumé_SofieKirkNielsen.pdf" download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black dark:hover:text-white transition"
                    >
                        Download CV (PDF)
                    </a>
                </div>
            </div>
        </section>
    )
}