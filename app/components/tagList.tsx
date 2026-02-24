"use client";

import { useState } from "react";

type TagListProps = {
  items: string[];
  collapsible?: boolean;
  initialVisible?: number;
  className?: string;
};

export default function TagList({
  items,
  collapsible = false,
  initialVisible = 3,
  className = "",
}: TagListProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems =
    collapsible && !expanded
      ? items.slice(0, initialVisible)
      : items;

  return (
    <div className={`mt-4 ${className}`}>
      <div className="flex flex-wrap gap-2 text-sm">
        {visibleItems.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800"
          >
            {item}
          </span>
        ))}
      </div>

      {collapsible && items.length > initialVisible && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

