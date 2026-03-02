"use client"

import TimelineItem from "./timelineItem"
import SectionHeader from "./sectionHeader"

export default function Experience() {
    return (
        <section id="experience" className="space-y-10">
            <SectionHeader label={"Experience"} />

            <div className="space-y-6">
                <TimelineItem
                    title="QA & Customer Success, Redia A/S (Internship), Aarhus N"
                    period="January 2026 – February 2026"
                    bullets={[
                        "Worked systematically with testing, documentation, and quality assurance to ensure stable and reliable product releases",
                        "Created and maintained test documentation, test cases, and bug reports",
                        "Continuously supported compliance and quality assurance processes",
                        "Collected and prepared documentation and data for external IT audits",
                        "Contributed to the organization’s ISAE 3000 compliance and overall quality management processes",
                    ]}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Software Testing",
                        "Functional Testing",
                        "Test Case Design",
                        "Jira",
                        "Confluence",
                        "IT Auditing",
                        "Regulatory Compliance",
                    ]}
                />
                <TimelineItem
                    title="Philosophy of Science and Ethics TA, Aarhus University (Part-Time), Aarhus N"
                    period="January 2024 – March 2025"
                    bullets={[
                        "Facilitated lectures and exercise sessions for university students",
                        "Supervised students on theoretical and methodological issues within philosophy of science and ethics",
                        "Assessed and provided structured, academic feedback on written assignments and coursework",
                        "Supported students’ reflection and critical thinking through dialogue and discussion",
                        "Contributed to the planning and organization of course activities in collaboration with the course coordinator",
                    ]}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Communication",
                        "Teaching",
                        "Planning",
                        "Problem Solving",
                        "Attention to Detail",
                        "Ethics",
                        "Computer Science",
                    ]}
                />
                <TimelineItem
                    title="Waiter, Hotel Crone & FriskFisken (Seasonal Position), Grenaa"
                    period="May 2020 – August 2020"
                    bullets={[
                        "Served guests and ensured a professional and welcoming customer experience",
                        "Took orders, served food and beverages, and handled payments",
                        "Coordinated with the kitchen and bar to ensure efficient service and accurate delivery",
                        "Managed busy periods with strong organizational skills, prioritization, and high service quality",
                        "Advised guests on the menu, allergens, and recommendations",
                        "Prepared tables, set up dining areas, and maintained cleanliness and hygiene in the service area",
                    ]}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Customer Service Excellence",
                        "Multitasking",
                        "Time Management",
                        "Team Collaboration",
                        "Attention to Detail",
                    ]}
                />
                <TimelineItem
                    title="Receptionist, Kongernes Jelling (Full-time), Jelling"
                    period="August 2019 – April 2020"
                    bullets={[
                        "Welcomed visitors and created a friendly and professional first impression",
                        "Conducted introductions and guided tours, providing practical information about exhibitions and facilities",
                        "Delivered daily customer service and handled inquiries from both Danish and international guests",
                        "Stayed continuously updated on exhibitions, events, and museum offerings to ensure accurate and relevant information",
                        "Developed strong subject-matter knowledge of exhibitions through background research, enabling independent communication and responses to specialized visitor questions",
                    ]}
                    tagHeader="Skills & Technologies:"
                    tags={[
                        "Communication",
                        "Problem Solving",
                        "Information Dissemination",
                        "Customer Relations",
                        "Customer Support",
                    ]}
                />
            </div>
        </section>
    )
}