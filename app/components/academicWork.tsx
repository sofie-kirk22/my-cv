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
                        cta={"Download PDF"}
                    />
                </CardLink>
            </div>
        </section>
    )
}