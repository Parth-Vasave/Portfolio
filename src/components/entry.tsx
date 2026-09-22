"use client";

import { useEffect, useId, useRef, useState } from "react";

const PREVIEW_LINES = 2;

export function Entry({
  title,
  subtitle,
  date,
  details,
}: {
  title: string;
  subtitle?: string;
  date?: string;
  details: string;
}) {
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const id = useId();

  // Only offer "more" when the text is longer than the preview
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      setOverflows(el.scrollHeight > lineHeight * PREVIEW_LINES + 1);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
        <div>
          <h3 className="text-base font-medium text-[var(--text-primary)]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base text-[var(--text-muted)] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {date && (
          <span className="font-mono text-base text-[var(--text-muted)] whitespace-nowrap shrink-0">
            {date}
          </span>
        )}
      </div>

      <p
        ref={ref}
        id={id}
        className={`text-base text-[var(--text-secondary)] mt-2 leading-relaxed ${
          open ? "" : "line-clamp-2"
        }`}
      >
        {details}
      </p>
      {overflows && (
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-1 text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-[3px] transition-colors"
        >
          {open ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
