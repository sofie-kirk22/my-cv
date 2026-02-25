"use client";

import TagList from "./tagList";
import Image from "next/image";

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    items: string[];
};

{/* type LoaderProps = {
  src: string;
};

const imageLoader = ({ src }: LoaderProps) => {
  return `https://sofie-kirk22.github.io/my-cv${src}`
} */}

function CircleIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            {children}
        </div>
    );
}

function IconBackend() {
    return (
        <Image
            src="/coding.png"
            alt="Backend"
            width={24}
            height={24}
            priority
            unoptimized
        />
    );
}

function IconFrontend() {
    return (
        <Image
            src="/front-end-programming.png"
            alt="Frontend"
            width={24}
            height={24}
            priority
        />
    );
}


function IconDesign() {
    return (
        <Image
            src="/web-design.png"
            alt="Design"
            width={24}
            height={24}
            priority
        />
    );
}

function IconAI() {
    return (
        <Image
            src="/generative.png"
            alt="AI"
            width={24}
            height={24}
            priority
        />
    );
}

export default function SkillsMap() {
    const categories: SkillCategory[] = [
        {
            title: "Frontend",
            icon: <IconFrontend />,
            items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"],
        },
        {
            title: "Backend",
            icon: <IconBackend />,
            items: ["Node.js", "Java", "C#", "Python", "API Integration"],
        },
        {
            title: "Design & UX",
            icon: <IconDesign />,
            items: ["Figma", "User-Centered Design", "Prototyping", "Interaction Design", "Web Design"],
        },
        {
            title: "AI & Data",
            icon: <IconAI />,
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
