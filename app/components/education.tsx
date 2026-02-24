"use client";

import TagList from "./tagList";

export default function Education() {
    return (
        <section id="experience" className="space-y-10">
            <h2 className="text-3xl font-semibold">Education</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-medium">
                        MSc in Computer Science, Aarhus University, Aarhus N
                    </h3>
                    <p className="text-sm text-zinc-500">August 2023 – June 2025</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Specialized in Human-Computer Interaction (HCI) and Ubiquitous Computing, focusing on user-centered design and interactive systems</li>
                        <li>Designed and evaluated digital and physical interfaces through qualitative and quantitative research methods</li>
                        <li>Applied usability testing, prototyping, and iterative design processes to develop intuitive user experiences</li>
                        <li>Conducted empirical research integrating user studies, data analysis, and system development</li>
                        <li>Strengthened interdisciplinary collaboration skills by working at the intersection of design, technology, and human behavior</li>
                    </ul>
                    
                    <div className="pt-6">
                        <h3 className="text-l font medium">
                            Courses:
                        </h3>
                        <TagList
                            items={[
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
                            collapsible
                            initialVisible={3}
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium">
                        BSc in Computer Science, Aarhus University, Aarhus N
                    </h3>
                    <p className="text-sm text-zinc-500">August 2020 – June 2023</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                        <li>Built a strong foundation in computer science, including algorithms, data structures, and software architecture</li>
                        <li>Developed proficiency in programming across multiple languages and paradigms</li>
                        <li>Gained experience with object-oriented design, databases, and system development</li>
                        <li>Applied mathematical foundations such as discrete mathematics, linear algebra, and logic to computational problems</li>
                        <li>Worked with operating systems, computer networks, and distributed systems</li>
                        <li>Participated in collaborative software projects using version control and agile methodologies</li>
                    </ul>
                    <TagList
                        items={[
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
                        collapsible
                        initialVisible={3}
                    />
                </div>
            </div>
        </section>
    )
}