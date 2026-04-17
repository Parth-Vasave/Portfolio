"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  tech: string[];
  image: string;
  href?: string;
  confidential?: boolean;
};

const projects: Project[] = [
  {
    name: "RTOS: Real Time Options Straddle AI Agent",
    description: "Autonomous options straddle agent with live post-trade PnL analysis",
    tech: ["Python", "AI Agent", "Options"],
    image: "/images/rtos.png",
    confidential: true,
  },
  {
    name: "NoTrace",
    description: "Minimalist anonymous chat platform with a privacy-first foundation",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/notrace-v2.png",
    href: "https://github.com/Parth-Vasave/NoTrace",
  },
  {
    name: "BrewUpdate",
    description: "GUI Homebrew manager with permission & security insights",
    tech: ["Python", "Brew CLI", "macOS"],
    image: "/images/brewupdate.png",
    href: "https://github.com/Parth-Vasave/BrewUpdate",
  },
  {
    name: "SupplyFlow",
    description: "Inventory management with supply chain algorithms & real-time alerts",
    tech: ["Python", "React", "MongoDB"],
    image: "/images/Inventory.png",
    href: "https://github.com/Parth-Vasave/InventoryManagementSystem",
  },
  {
    name: "AlgoView",
    description: "Interactive algorithm visualizer",
    tech: ["React"],
    image: "/images/algoview.png",
    href: "https://github.com/Parth-Vasave/AlgoView",
  },
  {
    name: "STEGANO",
    description: "LSB steganography tool for secure message encoding",
    tech: ["Python", "Tailwind", "ShadCN"],
    image: "/images/SteganoScreenShot.png",
    href: "https://github.com/Parth-Vasave/Stegano",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export function ProjectGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {projects.map((project) => {
        const Wrapper = project.href ? motion.a : motion.div;
        const wrapperProps = project.href
          ? {
              href: project.href,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {};
        return (
          <Wrapper
            key={project.name}
            variants={item}
            {...wrapperProps}
            className="group flex flex-col rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--text-muted)] transition-colors"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-[var(--border)]/20">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-3.5 flex-1">
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                  {project.name}
                </h3>
                {project.confidential ? (
                  <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded bg-yellow-500/15 leading-none mt-0.5">
                    Confidential
                  </span>
                ) : (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-muted)] px-1.5 py-0.5 rounded bg-[var(--border)]/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </motion.div>
  );
}
