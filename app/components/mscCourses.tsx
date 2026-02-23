"use client";

import { useState } from "react";

export default function MScCourses() {
  const [expanded, setExpanded] = useState(false);

  const courses = [
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
  ];

  const visibleCourses = expanded ? courses : courses.slice(0, 5);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {visibleCourses.map((course) => (
          <span
            key={course}
            className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800"
          >
            {course}
          </span>
        ))}
      </div>

      {courses.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
