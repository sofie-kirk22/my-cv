"use client";

import TimelineItem from "./timelineItem";
import SectionHeader from "./sectionHeader";

export default function Volunteering() {
    return (
        <section id="volenteering" className="space-y-10">
            <SectionHeader label={"Volunteering"} />

            <div className="space-y-6">
                <TimelineItem
                    title={"Boardmember (PR), TÅGEKAMMERET, Aarhus University"}
                    period={"September 2023 - September 2024"}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Canva",
                        "SoMe",
                        "Visual Communication",
                        "Event Planning",
                        "Event Promotion",
                        "Teamwork",
                    ]}
                />
                <TimelineItem
                    title={"Tutor , Math/Physics Tutor Association, Aarhus University"}
                    period={"March 2021 - March 2024"}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Coordination & Logistics",
                        "Time Management",
                        "Networking",
                        "Academic Culture Mediation",
                        "Peer Mentorship",
                    ]}
                />
                <TimelineItem
                    title={"Boardmember (PR), Fredagscaféen, Aarhus University"}
                    period={"November 2022 - June 2023"}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Canva",
                        "SoMe",
                        "Visual Communication",
                        "Event Planning",
                        "Event Promotion",
                        "Teamwork",
                    ]}
                />
            </div>
        </ section>
    )
}