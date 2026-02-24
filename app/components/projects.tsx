"use client";

export default function Projects(){
    return(
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
    )
}