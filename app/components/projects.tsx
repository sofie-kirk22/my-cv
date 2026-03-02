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


                {/* GITHUB REPOSITORY */}
                <CardLink href={"https://github.com/sofie-kirk22/DigitalWardrobe/tree/main"}>
                    <CardPreview
                        type="image"
                        src="/my-cv/MatchMuse_Frontpage_demo.png"
                        alt="MatchMuse application preview"
                    />
                    <CardBody
                        title={"MatchMuse – Full Stack Implementation"}
                        description={"Full-stack application analyzing color, style, and context to generate cohesive outfit suggestions using AI-powered image generation."}
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