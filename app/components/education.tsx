"use client";

import TimelineItem from "./timelineItem";

export default function Education() {
    return (
        <section id="experience" className="space-y-10">
            <div className="flex items-center gap-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Education
                </div>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="space-y-6">
                <TimelineItem
                    title="MSc in Computer Science, Aarhus University, Aarhus N"
                    period="August 2023 – June 2025"
                    bullets={[
                        "Specialized in Human-Computer Interaction (HCI) and Ubiquitous Computing, focusing on user-centered design and interactive systems",
                        "Designed and evaluated digital and physical interfaces through qualitative and quantitative research methods",
                        "Applied usability testing, prototyping, and iterative design processes to develop intuitive user experiences",
                        "Conducted empirical research integrating user studies, data analysis, and system development",
                        "Strengthened interdisciplinary collaboration skills by working at the intersection of design, technology, and human behavior",
                    ]}
                    tagHeader="Courses:"
                    tags={[
                        "Augmented Reality",
                        "Advanced Augmented Reality Project",
                        "Building the Internet of Things with P2P and Cloud Computing",
                        "Designing Interactive Technologies",
                        "Interactivity and Computer Mediation - Concepts, Theories, Methods, Cases",
                        "Multimodal Interaction",
                        "Information Visualization",
                        "Algorithms in Bioinformatics",
                        "Introductory Algebra",
                        "Project Work in Computer Science",
                    ]}
                    collapsibleTags
                    initialVisibleTags={3}
                />
                <TimelineItem
                    title="BSc in Computer Science, Aarhus University, Aarhus N"
                    period="August 2020 – June 2023"
                    bullets={[
                        "Built a strong foundation in computer science, including algorithms, data structures, and software architecture",
                        "Developed proficiency in programming across multiple languages and paradigms",
                        "Gained experience with object-oriented design, databases, and system development",
                        "Applied mathematical foundations such as discrete mathematics, linear algebra, and logic to computational problems",
                        "Worked with operating systems, computer networks, and distributed systems",
                        "Participated in collaborative software projects using version control and agile methodologies",
                    ]}
                    tagHeader="Courses:"
                    tags={[
                        "Algorithms and Data Structures",
                        "Computability and Logic",
                        "Computer Architecture, Networks and Operating Systems",
                        "Database Systems",
                        "Distributed Systems and Security",
                        "Experimental System Development",
                        "Philosophy of Science and Ethics: Computer Science and IT Product Development",
                        "Human-Computer Interaction",
                        "Implementation and Applications of Databases",
                        "Introduction to Programming",
                        "Optimization",
                        "Compilation",
                        "Programming Languages",
                        "Software Construction and Software Architecture",
                        "Introduction to Mathematics and Optimization",
                        "Introduction to Probability Theory and Statistics",
                        "Numerical Linear Algebra",
                        "Physical Computing",
                    ]}
                    collapsibleTags
                    initialVisibleTags={3}
                />
            </div>
        </section>
    )
}