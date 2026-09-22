import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectGrid } from "@/components/project-grid";
import { Entry } from "@/components/entry";
import { OpenSourceGrid } from "@/components/open-source-grid";
import { SkillsGrid } from "@/components/skills-grid";

const certifications = [
  { name: "AWS Cloud Support Associate", issuer: "Amazon Web Services" },
  { name: "IBM AI Developer", issuer: "IBM" },
  { name: "Meta Full Stack Developer", issuer: "Meta" },
  {
    name: "Software Engineering Specialization",
    issuer: "The Hong Kong University of Science and Technology",
  },
  {
    name: "Cybersecurity: Essentials of AI",
    issuer: "Macquarie University",
  },
  { name: "Cyber Security Base 2025", issuer: "University of Helsinki" },
  { name: "Python MOOC 25", issuer: "University of Helsinki" },
  { name: "CS50", issuer: "Harvard University" },
  { name: "CS50P", issuer: "Harvard University" },
];

function Section({
  title,
  children,
  fullWidth,
}: {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <section className="mt-16">
      <div className={fullWidth ? "max-w-[800px] mx-auto px-6" : ""}>
        <h2 className="text-base font-medium uppercase tracking-[0.08em] sm:tracking-[0.18em] leading-relaxed mb-5">
          <span className="bg-[#EAB308] text-black px-1 py-0.5 rounded-sm box-decoration-clone">
            {title}
          </span>
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="w-full py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* <── Header ──> */}
          <header>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Parth Vasave
              </h1>
              <ThemeToggle />
            </div>
            <p className="text-base text-[var(--text-secondary)] mt-1">
              Software Developer · Mumbai, India
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="https://github.com/Parth-Vasave"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/parth-vasave"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 -m-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:mailparthvasave@gmail.com"
                className="p-2 -m-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <div className="w-px h-5 bg-[var(--border)]" />
              <a
                href="/resume.pdf"
                target="_blank"
                className="py-2 -my-2 text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </header>

          {/* <── Experience ──> */}
          <Section title="Experience">
            <div className="space-y-4">
              <Entry
                title="Freelance Developer"
                subtitle="Full-Stack Development · Remote"
                date="2025 — Present"
                details="Architecting and deploying full-stack solutions for diverse clients using React, Python, and MongoDB. Successfully shipped 5+ projects with a focus on performance optimization, responsive design, and clean architecture."
              />
              <Entry
                title="Computer Society of India - VCET"
                subtitle="Technical Head"
                date="Aug 2025 — Aug 2026"
                details="Leading the technical department of the Computer Society of India (CSI) student chapter. Orchestrating technical workshops, hackathons, and seminars for 200+ students while fostering a culture of peer-to-peer learning."
              />
              <Entry
                title="Stride Ahead"
                subtitle="Full-Stack Developer Intern"
                date="June 2025"
                details="Built and maintained full-stack features across the platform using modern web technologies. Collaborated with the product team to ship user-facing improvements, contributed to API development, and improved frontend performance and responsiveness."
              />
            </div>
          </Section>

          {/* <── Projects ──> */}
          <Section title="Projects">
            <ProjectGrid />
          </Section>

          {/* <── Education ──> */}
          <Section title="Education">
            <div className="space-y-4">
              <Entry
                title="University of Mumbai"
                subtitle="B.E. Computer Science & Engineering (Data Science)"
                date="2023 — 2026"
                details="Specializing in Data Science with a core focus on Machine Learning, Big Data Analytics, and Statistical Modeling. Gained hands-on experience in building predictive models and scaling data-driven applications. Serving as Technical Head for CSI VCET, coordinating workshops and technical events for 200+ students."
              />
              <Entry
                title="MSBTE, Mumbai"
                subtitle="Diploma in Computer Engineering"
                date="2019 — 2022"
                details="Established a strong foundation in Computer Engineering, covering core programming paradigms, networking, and system design. Developed various academic projects focusing on automation and web technologies, graduating with a deep understanding of software development fundamentals."
              />
            </div>
          </Section>

          {/* <── Open Source Contributions ──> */}
          <Section title="Open Source Contributions">
            <OpenSourceGrid />
          </Section>

          {/* <── Skills ──> */}
          <Section title="Skills">
            <SkillsGrid />
          </Section>

          {/* <── Certifications ──> */}
          <Section title="Certifications">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {certifications.map(({ name, issuer }) => (
                <li key={name}>
                  <p className="text-base font-medium text-[var(--text-primary)]">
                    {name}
                  </p>
                  <p className="text-base text-[var(--text-muted)] mt-0.5">
                    {issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>
    </div>
  );
}
