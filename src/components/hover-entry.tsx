"use client";

import { useState, useCallback } from "react";

export function HoverEntry({
  title,
  href,
  subtitle,
  date,
  badge,
  details,
}: {
  title: string;
  href?: string;
  subtitle?: string;
  date?: string;
  badge?: string;
  details: string;
}) {
  const [open, setOpen] = useState(false);
  const TitleTag = href ? "a" : "span";

  const handleClick = useCallback(() => {
    // Only toggle on tap for touch devices — desktop uses hover
    if (window.matchMedia("(hover: none)").matches) {
      setOpen((prev) => !prev);
    }
  }, []);

  return (
    <div
      className="group rounded-lg px-3 py-3 -mx-3 transition-colors hover:bg-[var(--border)]/30 cursor-default"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={handleClick}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
        <div>
          <div className="flex items-center gap-1.5">
            <TitleTag
              {...(href
                ? { href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`text-base font-medium text-[var(--text-primary)] ${
                href
                  ? "underline decoration-[var(--border)] decoration-1 underline-offset-[3px] hover:decoration-[var(--text-muted)] transition-colors"
                  : ""
              }`}
            >
              {title}
            </TitleTag>
            {badge && (
              <span className="inline-flex items-center rounded-full bg-yellow-500/15 px-2.5 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-400 leading-none">
                {badge}
              </span>
            )}
            {/* Tap hint on mobile */}
            <span className="inline-block sm:hidden text-[10px] text-[var(--text-muted)] ml-1">
              {open ? "▲" : "▼"}
            </span>
          </div>
          {subtitle && (
            <p className="text-sm text-[var(--text-muted)] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {date && (
          <span className="text-sm text-[var(--text-muted)] whitespace-nowrap shrink-0">
            {date}
          </span>
        )}
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? "200px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
          {details}
        </p>
      </div>
    </div>
  );
}
