"use client";

import { useState } from "react";

export default function BScCourses() {
  const [expanded, setExpanded] = useState(false);

  const courses = [
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
  ];

  const visibleCourses = expanded ? courses : courses.slice(0, 3);

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

      {courses.length > 3 && (
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
