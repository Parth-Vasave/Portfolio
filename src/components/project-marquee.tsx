"use client";

import Image from "next/image";

const projects = [
  {
    name: "BrewUpdate",
    description: "GUI Homebrew manager with permission & security insights",
    tech: "Python · Brew CLI · macOS",
    image: "/images/brewupdate.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "SupplyFlow",
    description: "Inventory management with supply chain algorithms & real-time alerts",
    tech: "Python · React · MongoDB",
    image: "/images/Inventory.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "STEGANO",
    description: "LSB steganography tool for secure message encoding",
    tech: "Python · Tailwind · ShadCN",
    image: "/images/SteganoScreenShot.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "FileForge",
    description: "Advanced file management system",
    tech: "Python · React",
    image: "/images/FileForge.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "NoTrace",
    description: "Minimalist anonymous chat platform with a privacy-first foundation",
    tech: "Next.js · TypeScript · Tailwind · Framer Motion",
    image: "/images/notrace-v2.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "AlgoView",
    description: "Interactive algorithm visualizer",
    tech: "React",
    image: "/images/algoview.png",
    href: "https://github.com/Parth-Vasave",
  },
];

// Duplicate for seamless loop
const items = [...projects, ...projects, ...projects, ...projects];

export function ProjectMarquee() {
  return (
    <div className="relative overflow-hidden py-2 group/marquee">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />

      <div className="animate-marquee group-hover/marquee:[animation-play-state:paused] flex w-max gap-5">
        {items.map((project, i) => (
          <a
            key={i}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[320px] sm:w-[480px] rounded-xl bg-[var(--bg)] p-3 transition-colors group"
          >
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[var(--border)] group-hover:border-[var(--text-muted)] transition-colors">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 px-0.5">
              <h3 className="text-base font-medium text-[var(--text-primary)] group-hover:underline decoration-1 underline-offset-2">
                {project.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                {project.tech}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
