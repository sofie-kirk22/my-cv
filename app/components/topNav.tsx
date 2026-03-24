"use client";

import Icon from "./icons";

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

        {/* Name */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <a href="#heroBanner" className="text-sm font-semibold tracking-wide hover:opacity-70 transition">
            Sofie Kirk Nielsen
          </a>
          <a
            href="https://www.linkedin.com/in/sofie-kirk-nielsen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 hover:opacity-100 transition duration-200"
          >
            <Icon darkSrc="/my-cv/Linkedin_White.png" alt="LinkedIn" lightSrc="/my-cv/Linkedin_Black.png" />
          </a>

          <a
            href="https://github.com/sofie-kirk22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <Icon darkSrc="/my-cv/GitHub_White.png" alt="GitHub" lightSrc="/my-cv/GitHub_Black.png" />
          </a>
        </div>

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