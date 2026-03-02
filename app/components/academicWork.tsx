"use client";

import SectionHeader from "./sectionHeader";
import CardLink from "./cardLink";
import CardPreview from "./cardPreview";
import CardBody from "./cardBody";

export default function AcademicWork() {
    return (
        <section id="academic" className="space-y-10">
            <SectionHeader label={"Academic Work"} />

            <div className="grid gap-8 md:grid-cols-2">

                {/* THESIS */}
                <CardLink href={"/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf"}>
                    <CardPreview
                        type="iframe"
                        src="/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf"
                        title="Thesis"
                    />
                    <CardBody
                        title={"Exploring the Gap: Exploring the Space Between Digital and Analogue Learning Environments for Neurodivergent Students"}
                        description={"Investigated neurodivergent students’ use of hybrid learning tools through qualitative research grounded in Grounded Theory and Cognitive Load Theory."}
                        tags={[
                            "Neurodiversity Research",
                            "Hybrid Learning",
                            "Grounded Theory",
                            "Cognitive Load Theory",
                            "Qualitative Methods",
                            "HCI",
                            "Artifact Ecologies"
                        ]}
                        ctas={[
                            {
                                label: "Download PDF",
                                href: "/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf"
                            }
                        ]}
                    />
                </CardLink>


                {/* INFOVIS PROJECT */}
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:border-zinc-800 dark:hover:border-white">
                    <CardPreview
                        type="iframe"
                        src="/my-cv/InfoVis_Project.pdf"
                        title="InfoVis"
                    />

                    <CardBody
                        title="Steamy Vampires and a Dirty Dataset"
                        description="Built an interactive node-link visualization to explore fantasy sub-genres within a large Goodreads dataset, evaluating design trade-offs and future improvements."
                        tags={[
                            "D3.js",
                            "Network Visualization",
                            "Data Cleaning",
                            "Interactive UX",
                            "Clustering",
                            "JSON Processing",
                            "Information Visualization"
                        ]}
                        ctas={[
                            {
                                label: "View on GitHub",
                                href: "https://github.com/hankaspac/info_vis"
                            },
                            {
                                label: "Download PDF",
                                href: "/my-cv/InfoVis_Project.pdf"
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
