import Image from "next/image";
import Courses from "./components/bscCourses";
import BScCourses from "./components/bscCourses";
import MScCourses from "./components/mscCourses";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-4xl px-6 py-24 space-y-32">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, my name is Sofie
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            MSc in Computer Science | Frontend Developer | UI/UX Designer | Human-Computer Interaction | Digital Accessibility
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Contact
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            MSc in Computer Science – specialising in Human-Computer Interaction
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Aarhus University | Focus on inclusive design and neurodivergent accessibility
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I’m a recent graduate passionate about the intersection of people and technology. My thesis explored how neurodivergent students navigate hybrid learning environments using paper, digital, and augmented tools. Through qualitative methods and cognitive load theory, I developed design principles centred on clarity, cognitive autonomy, and meaningful interaction.

            I aim to build systems that adapt to people, not the other way around, and believe inclusive design should be grounded in real user needs.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Experience with Java, Python, JavaScript, HTML/CSS, and Figma. I’ve taught university courses and combine technical development with human-centred research.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A background in art and literature gives me a creative, interdisciplinary approach to interfaces and digital tools.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Seeking opportunities in UX research, interaction design, and inclusive technology.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-10">
          <h2 className="text-3xl font-semibold">Experience</h2>

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
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Functional Testing
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Test Cases
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Software Testing
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  JIRA
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Confluence
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  IT Auditing
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Regulatory Compliance
                </span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Communication
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Teaching
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Planning
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Problem Solving
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Attention to Detail
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Ethics
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Computer Science
                </span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Customer Service Excellence
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Multitasking
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Time Management
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Team Collaboration
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Attention to Detail
                </span>
              </div>
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
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Communication
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Problem Solving
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Information Dissemination
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Customer Relations
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Customer Support
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* EDUCATION */}
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
              <MScCourses />
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
              <BScCourses />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-10">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="text-xl font-medium">Project Name</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Short project description. What it does. Why it matters.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  React
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-10">
          <h2 className="text-3xl font-semibold">Skills</h2>

          <div className="grid gap-10 md:grid-cols-2">

            {/* FRONTEND */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* BACKEND */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Java", "C#", "Python", "APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & DATA */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                AI & Data
              </h3>
              <div className="flex flex-wrap gap-3">
                {["AI / RAG", "Data Cleaning", "JSON"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DESIGN & ENGINEERING */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Design & Engineering
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "User-Centered Design",
                  "System Design",
                  "Software Development",
                  "Communication & Presentation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            sofiekirknielsen@outlook.dk
          </p>
          <div className="flex gap-6 text-sm">
            <a href="https://www.linkedin.com/in/sofie-nielsen-b0aa80231/" className="underline hover:text-black dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/sofie-kirk22?tab=repositories" className="underline hover:text-black dark:hover:text-white">
              GitHub
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

