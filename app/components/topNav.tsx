"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-gradient-to-r from-pink-300 to-rose-100 
      dark:from-black dark:to-zinc-900
      border-b border-zinc-200 dark:border-zinc-800
    ">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link
          href="#"
          className="text-sm font-semibold tracking-wide hover:opacity-70 transition"
        >
          Sofie Kirk Nielsen
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:opacity-60 transition">
            About
          </a>
          <a href="#projects" className="hover:opacity-60 transition">
            Projects
          </a>
          <a href="#skills" className="hover:opacity-60 transition">
            Areas of Expertise
          </a>
          <a href="#endBanner" className="hover:opacity-60 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}