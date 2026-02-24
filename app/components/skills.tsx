"use client";

{/* SKILLS */}
export default function Skills(){
    return(
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
    )
}