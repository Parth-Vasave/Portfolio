"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "BrewUpdate",
    description: "GUI Homebrew manager with permission & security insights",
    tech: ["Python", "Brew CLI", "macOS"],
    image: "/images/brewupdate.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "SupplyFlow",
    description: "Inventory management with supply chain algorithms & real-time alerts",
    tech: ["Python", "React", "MongoDB"],
    image: "/images/Inventory.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "STEGANO",
    description: "LSB steganography tool for secure message encoding",
    tech: ["Python", "Tailwind", "ShadCN"],
    image: "/images/SteganoScreenShot.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "FileForge",
    description: "Advanced file management system",
    tech: ["Python", "React"],
    image: "/images/FileForge.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "NoTrace",
    description: "Minimalist anonymous chat platform with a privacy-first foundation",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/notrace-v2.png",
    href: "https://github.com/Parth-Vasave",
  },
  {
    name: "AlgoView",
    description: "Interactive algorithm visualizer",
    tech: ["React"],
    image: "/images/algoview.png",
    href: "https://github.com/Parth-Vasave",
  },
];

const PER_PAGE = 2;
const total = Math.ceil(projects.length / PER_PAGE);

export function ProjectCarousel() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  function go(next: number) {
    setDir(next > page ? 1 : -1);
    setPage(next);
  }

  const slice = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -40, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {slice.map((project, i) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-[var(--bg)] border border-[var(--border)] overflow-hidden hover:border-[var(--text-muted)] transition-colors"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-muted)] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] px-1.5 py-0.5 rounded bg-[var(--border)]/40 border border-[var(--border)]/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === page
                  ? "w-5 bg-[var(--text-primary)]"
                  : "w-1.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Previous"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => go(page + 1)}
            disabled={page === total - 1}
            aria-label="Next"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
