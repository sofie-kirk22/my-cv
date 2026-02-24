import HeroBanner from "./components/heroBanner";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import AboutSection from "./components/about";
import BottomCTA from "./components/endBanner";

const aboutParagraphs = [
  {
    id: "degree",
    text: "MSc in Computer Science – specialising in Human-Computer Interaction",
  },
  {
    id: "uni",
    text: "Aarhus University | Focus on inclusive design and neurodivergent accessibility",
  },
  {
    id: "general",
    text: "I’m a recent graduate passionate about the intersection of people and technology. My thesis explored how neurodivergent students navigate hybrid learning environments using paper, digital, and augmented tools. Through qualitative methods and cognitive load theory, I developed design principles centred on clarity, cognitive autonomy, and meaningful interaction. I aim to build systems that adapt to people, not the other way around, and believe inclusive design should be grounded in real user needs.",
  },
  {
    id: "skills",
    text: "Experience with Java, Python, JavaScript, HTML/CSS, and Figma. I’ve taught university courses and combine technical development with human-centred research.",
  },
  {
    id: "background",
    text: "A background in art and literature gives me a creative, interdisciplinary approach to interfaces and digital tools.",
  },
  {
    id: "seeking",
    text: "Seeking opportunities in UX research, interaction design, and inclusive technology.",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-4xl px-6 py-24 space-y-32">
        <HeroBanner />
        {/* HERO */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Hi, my name is Sofie.
          </h2>
          <h2 className="text-3xl font-semibold">
            Say hi to your future Frontend or UX designer
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            MSc in Computer Science | Frontend Developer | UI/UX Designer | Human-Computer Interaction | Digital Accessibility
          </p>
        </section>

        {/* PROJECTS */}
        <Projects />

        {/* ABOUT */}
        <AboutSection paragraphs={aboutParagraphs} />

        {/* EXPERIENCE */}
        <Experience />

        {/* EDUCATION */}
        <Education />

        {/* SKILLS */}
        <Skills />

        {/* CONTACT 
        <Contact /> */}

        <BottomCTA />

      </main>
    </div>
  );
}

