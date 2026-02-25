"use client"

import TagList from "./tagList"

export default function Experience() {
    return (
        <section id="experience" className="space-y-10">
            <div className="flex items-center gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Experience
                </div>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>
            {/* <h2 className="text-3xl font-semibold">Experience</h2> */}

            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-medium">
                        QA & Customer Success, Redia A/S (Internship), Aarhus N
                    </h3>
                    <p className="text-sm text-zinc-500">January 2026 – February 2026</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Worked systematically with testing, documentation, and quality assurance to ensure stable and reliable product releases</li>
                        <li>Created and maintained test documentation, test cases, and bug reports</li>
                        <li>Continuously supported compliance and quality assurance processes</li>
                        <li>Collected and prepared documentation and data for external IT audits</li>
                        <li>Contributed to the organization’s ISAE 3000 compliance and overall quality management processes</li>
                    </ul>
                    <TagList
                        items={[
                            "Software Testing",
                            "Functional Testing",
                            "Test Case Design",
                            "Jira",
                            "Confluence",
                            "IT Auditing",
                            "Regulatory Compliance",
                        ]}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-medium">
                        Philosophy of Science and Ethics TA, Aarhus University (Part-Time), Aarhus N
                    </h3>
                    <p className="text-sm text-zinc-500">January 2024 – March 2025</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Facilitated lectures and exercise sessions for university students</li>
                        <li>Supervised students on theoretical and methodological issues within philosophy of science and ethics</li>
                        <li>Assessed and provided structured, academic feedback on written assignments and coursework</li>
                        <li>Supported students’ reflection and critical thinking through dialogue and discussion</li>
                        <li>Contributed to the planning and organization of course activities in collaboration with the course coordinator</li>
                    </ul>
                    <TagList
                        items={[
                            "Communication",
                            "Teaching",
                            "Planning",
                            "Problem Solving",
                            "Attention to Detail",
                            "Ethics",
                            "Computer Science",
                        ]}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-medium">
                        Waiter, Hotel Crone & FriskFisken (Seasonal Position), Grenaa
                    </h3>
                    <p className="text-sm text-zinc-500">May 2020 – August 2020</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Served guests and ensured a professional and welcoming customer experience</li>
                        <li>Took orders, served food and beverages, and handled payments</li>
                        <li>Coordinated with the kitchen and bar to ensure efficient service and accurate delivery</li>
                        <li>Managed busy periods with strong organizational skills, prioritization, and high service quality</li>
                        <li>Advised guests on the menu, allergens, and recommendations</li>
                        <li>Prepared tables, set up dining areas, and maintained cleanliness and hygiene in the service area</li>
                    </ul>
                    <TagList
                        items={[
                            "Customer Service Excellence",
                            "Multitasking",
                            "Time Management",
                            "Team Collaboration",
                            "Attention to Detail",
                        ]}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-medium">
                        Receptionist, Kongernes Jelling (Full-time), Jelling
                    </h3>
                    <p className="text-sm text-zinc-500">August 2019 – April 2020</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Welcomed visitors and created a friendly and professional first impression</li>
                        <li>Conducted introductions and guided tours, providing practical information about exhibitions and facilities</li>
                        <li>Delivered daily customer service and handled inquiries from both Danish and international guests</li>
                        <li>Stayed continuously updated on exhibitions, events, and museum offerings to ensure accurate and relevant information</li>
                        <li>Developed strong subject-matter knowledge of exhibitions through background research, enabling independent communication and responses to specialized visitor questions</li>
                    </ul>
                    <TagList
                        items={[
                            "Communication",
                            "Problem Solving",
                            "Information Dissemination",
                            "Customer Relations",
                            "Customer Support",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}