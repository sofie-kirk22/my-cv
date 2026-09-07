"use client";

import SectionHeader from "./sectionHeader";
import CardLink from "./cardLink";
import CardPreview from "./cardPreview";
import CardBody from "./cardBody";

export default function Projects() {
    return (
        <section id="projects" className="space-y-10">
            <SectionHeader label="Projects" />

            <div className="grid gap-8 md:grid-cols-2">

                {/* DEATH_MAHJONG WEBPAGE */}
                <CardLink href={"https://death-mahjong.vercel.app/"}>
                    <CardPreview
                        type="gallery"
                        images={[
                            "/my-cv/Death_Mahjong_FrontPage.png",
                            "/my-cv/Death_Mahjong_Lobby.png",
                            "/my-cv/Death_Mahjong_GamePage.png",
                            "/my-cv/Death_Mahjong_EndPage.png",
                            "/my-cv/Death_Mahjong_Profile.png",
                            "/my-cv/Death_Mahjong_Statistics.png"
                        ]}
                        alt="Death Mahjong gameplay screenshots"
                    />
                    <CardBody
                        title={"Death Mahjong – Full Stack Implementation"}
                        description={
                            "Online multiplayer drinking game inspired by Solitaire Mahjong. Players join a shared room, take turns drawing available Mahjong tiles, and receive sips based on tile value and how many times they personally have drawn the same tile."
                        }
                        tags={[
                            "C#",
                            "ASP.NET",
                            "TypeScript",
                            "React",
                            "NextJS",
                            "Tailwind",
                            "API Integration",
                            "PostgreSQL",
                            "Neon",
                            "Railway",
                            "Vercel"
                        ]}
                        ctas={[
                            {
                                label: "Visit Webpage",
                                href: "https://death-mahjong.vercel.app/",
                            },
                            {
                                label: "Visit GitHub",
                                href: "https://github.com/sofie-kirk22/death-mahjong/",
                            }
                        ]}
                    />
                </CardLink>

                {/* FIGMA PROTOTYPE */}
                <CardLink href={"https://www.figma.com/proto/rxt5m7OykqTLItxoOuWfyQ/MatchMuse?node-id=0-1&t=jv2a5MyN4Q3FtVhp-1"}>
                    <CardPreview
                        type="iframe"
                        src="https://embed.figma.com/design/rxt5m7OykqTLItxoOuWfyQ/MatchMuse?node-id=0-1&embed-host=share"
                        title="MatchMuse Figma Prototype"
                    />
                    <CardBody
                        title={"MatchMuse – Figma Prototype"}
                        description={"High-fidelity prototype exploring UX and interaction design for AI-generated clothing recommendations."}
                        tags={[
                            "Figma",
                            "Interaction Design",
                            "UX Thinking",
                            "AI Image Generation"
                        ]}
                        ctas={[
                            {
                                label: "View in Figma",
                                href: "https://www.figma.com/proto/rxt5m7OykqTLItxoOuWfyQ/MatchMuse?node-id=0-1&t=jv2a5MyN4Q3FtVhp-1"
                            }
                        ]}
                    />
                </CardLink>

                {/* WEBPAGE */}
                <CardLink href={"https://match-muse-next-c652.vercel.app/"}>
                    <CardPreview
                        type="gallery"
                        images={[
                            "/my-cv/MatchMuse_generated_1.png",
                            "/my-cv/MatchMuse_generated_2.png",
                            "/my-cv/MatchMuse_generated_3.png",
                            "/my-cv/MatchMuse_Frontpage_Next.png",
                        ]}
                        alt="MatchMuse generated outfit gallery"
                    />
                    <CardBody
                        title={"MatchMuse – Full Stack Implementation"}
                        description={
                            "Full-stack application analyzing color, style, and context to generate cohesive outfit suggestions using OpenAI image generation."
                        }
                        tags={[
                            "TypeScript",
                            "React",
                            "NextJS",
                            "Tailwind",
                            "API Integration",
                            "AI",
                            "PostgreSQL",
                        ]}
                        ctas={[
                            {
                                label: "Visit Webpage",
                                href: "https://match-muse-next-c652.vercel.app/",
                            },
                            {
                                label: "Visit GitHub",
                                href: "https://github.com/sofie-kirk22/MatchMuse-next/",
                            }
                        ]}
                    />
                </CardLink>


                {/* GITHUB REPOSITORY */}
                <CardLink href={"https://github.com/sofie-kirk22/DigitalWardrobe/tree/main"}>
                    <CardPreview
                        type="image"
                        src="/my-cv/MatchMuse_Frontpage_demo.png"
                        alt="MatchMuse application preview"
                    />
                    <CardBody
                        title={"MatchMuse – Early Implementation"}
                        description={"Early TypeScript & JavaScript application analyzing color, style, and context to generate cohesive outfit suggestions using AI-powered image generation."}
                        tags={[
                            "TypeScript",
                            "JavaScript",
                            "API Integration",
                            "AI",
                            "HTML",
                            "CSS"
                        ]}
                        ctas={[
                            {
                                label: "View on GitHub",
                                href: "https://github.com/sofie-kirk22/DigitalWardrobe/tree/main"
                            }
                        ]}
                    />
                </CardLink>
            </div>
        </section >
    )
}