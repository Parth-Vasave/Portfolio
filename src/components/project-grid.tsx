import Image from "next/image";

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
    name: "Pulse",
    description: "API monitoring with distributed checks, incident detection & alerting",
    tech: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Next.js", "Docker"],
    image: "/images/pulse.png",
    href: "https://github.com/Parth-Vasave/pulse",
  },
  {
    name: "AI SQL Analyst Agent",
    description: "Text-to-SQL agent where every generated query passes AST safety validation",
    tech: ["Python", "FastAPI", "sqlglot", "PostgreSQL", "LLM", "React"],
    image: "/images/sql-analyst.png",
    href: "https://github.com/Parth-Vasave/ai-sql-analyst-agent",
  },
  {
    name: "Kafka Dedup Framework",
    description: "Exactly-once processing for Kafka consumers via atomic Redis claims",
    tech: ["Python", "Kafka", "Redis", "PostgreSQL", "Kubernetes", "Prometheus"],
    image: "/images/kafka-dedup.png",
    href: "https://github.com/Parth-Vasave/Message-Deduplication-Idempotency-Framework",
  },
  {
    name: "NoTrace",
    description: "Minimalist anonymous chat platform with a privacy-first foundation",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind", "shadcn/ui"],
    image: "/images/notrace-v2.png",
    href: "https://github.com/Parth-Vasave/NoTrace",
  },
  {
    name: "BrewUpdate",
    description: "GUI Homebrew manager with permission & security insights",
    tech: ["Python", "pywebview", "JavaScript", "Homebrew", "macOS"],
    image: "/images/brewupdate.png",
    href: "https://github.com/Parth-Vasave/BrewUpdate",
  },
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
      {projects.map((project, i) => {
        const Wrapper = project.href ? "a" : "div";
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
            {...wrapperProps}
            style={{ "--i": i } as React.CSSProperties}
            className="fade-up group flex flex-col"
          >
            {/* hairline ring gives light screenshots an edge against the page */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl ring-1 ring-[var(--border)] bg-[var(--border)]/20">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 848px) 390px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="flex flex-col gap-1.5 pt-4 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                <h3
                  className={`text-base font-semibold text-[var(--text-primary)] leading-snug ${
                    project.href
                      ? "underline decoration-transparent underline-offset-[3px] group-hover:decoration-[var(--text-muted)] transition-colors"
                      : ""
                  }`}
                >
                  {project.name}
                  {project.href && (
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  )}
                </h3>
                {project.confidential && (
                  <span className="text-base text-yellow-700 dark:text-yellow-400">
                    Confidential
                  </span>
                )}
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </p>
              <p className="mt-auto pt-1 text-base text-[var(--text-muted)]">
                {project.tech.join(" · ")}
              </p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
