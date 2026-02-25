"use client";

import TagList from "./tagList";
import Icon from "./icons";

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    items: string[];
};

function CircleIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            {children}
        </div>
    );
}

export default function SkillsMap() {
    const categories: SkillCategory[] = [
        {
            title: "Frontend",
            icon: <Icon src="/my-cv/front-end-programming.png" alt="Frontend" />,
            items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"],
        },
        {
            title: "Backend",
            icon: <Icon src="/my-cv/coding.png" alt="Backend" />,
            items: ["Node.js", "Java", "C#", "Python", "API Integration"],
        },
        {
            title: "Design & UX",
            icon: <Icon src="/my-cv/web-design.png" alt="Design" />,
            items: ["Figma", "User-Centered Design", "Prototyping", "Interaction Design", "Web Design"],
        },
        {
            title: "AI & Data",
            icon: <Icon src="/my-cv/generative.png" alt="AI" />,
            items: ["AI / RAG", "Data Cleaning", "JSON"],
        },
    ];

    return (
        <section id="skills" className="space-y-10">
            <div className="flex items-center gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Core Skills <span className="text-zinc-700 dark:text-zinc-400">|</span> Tools
                </div>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* Categories */}
            <div className="grid gap-8 md:grid-cols-2">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
                    >
                        <div className="flex items-center gap-4">
                            <CircleIcon>
                                <span className="text-white">{cat.icon}</span>
                            </CircleIcon>

                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                    {cat.title}
                                </h3>
                            </div>
                        </div>

                        {/* Subskills */}
                        <TagList
                            items={cat.items}
                            className="mt-5"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
