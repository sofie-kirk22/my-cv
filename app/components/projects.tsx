"use client";

import TagList from "./tagList";

export default function Projects() {
    return (
        <section id="projects" className="space-y-10">
            <div className="flex items-center gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Projects
                </div>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">

                {/* FIGMA PROTOTYPE */}
                <a
                    href="https://www.figma.com/proto/rxt5m7OykqTLItxoOuWfyQ/MatchMuse?node-id=0-1&t=jv2a5MyN4Q3FtVhp-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-zinc-200 transition hover:border-black dark:border-zinc-800 dark:hover:border-white"
                >
                    {/* Preview */}
                    <div className="overflow-hidden">
                        <iframe
                            src="https://embed.figma.com/design/rxt5m7OykqTLItxoOuWfyQ/MatchMuse?node-id=0-1&embed-host=share"
                            className="w-full h-[220px]"
                            allowFullScreen
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-lg font-medium">
                            MatchMuse – Figma Prototype
                        </h3>

                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            High-fidelity prototype exploring UX and interaction design for AI-generated clothing recommendations.
                        </p>

                        <TagList
                            items={[
                                "Figma",
                                "Interaction Design",
                                "UX Thinking",
                                "AI Image Generation",
                            ]}
                        />

                        <span className="mt-4 inline-block text-sm font-medium underline transition group-hover:translate-x-1">
                            View in Figma →
                        </span>
                    </div>
                </a>


                {/* GITHUB REPOSITORY */}
                <a
                    href="https://github.com/sofie-kirk22/DigitalWardrobe/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-zinc-200 transition hover:border-black dark:border-zinc-800 dark:hover:border-white"
                >
                    {/* Preview */}
                    <div className="overflow-hidden">
                        <img
                            src="/MatchMuse_Frontpage_demo.png"
                            alt="MatchMuse application preview"
                            className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-lg font-medium">
                            MatchMuse – Full Stack Implementation
                        </h3>

                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Full-stack application analyzing color, style, and context to generate cohesive outfit suggestions using AI-powered image generation.
                        </p>

                        <TagList
                            items={[
                                "TypeScript",
                                "JavaScript",
                                "API Integration",
                                "AI",
                                "HTML",
                                "CSS",
                            ]}
                        />

                        <span className="mt-4 inline-block text-sm font-medium underline transition group-hover:translate-x-1">
                            View on GitHub →
                        </span>
                    </div>
                </a>

            </div>
        </section >
    )
}