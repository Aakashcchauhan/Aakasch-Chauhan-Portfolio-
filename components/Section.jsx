"use client";

import useReveal from "@/hooks/useReveal";

export function Section({ id, children, className = "", tone = "dark" }) {
  const tones = {
    dark: "bg-ink text-white",
    panel: "bg-panel text-white",
    lime: "bg-lime text-ink",
  };

  const ref = useReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal grain relative overflow-hidden ${tones[tone]} ${className}`}
    >
      <div className="relative z-10 shell py-24 sm:py-28 lg:py-36">{children}</div>
    </section>
  );
}

export function Eyebrow({ index, children, tone = "dark" }) {
  return (
    <p
      className={`label mb-7 flex items-center gap-3 ${
        tone === "lime" ? "text-ink/60" : ""
      }`}
    >
      <span className={tone === "lime" ? "text-ink/45" : "text-white/35"}>
        {index}
      </span>
      <span className={tone === "lime" ? "text-ink/25" : "text-white/20"}>/</span>
      <span>{children}</span>
    </p>
  );
}

/**
 * Two-line display lockup: first line in white, second in the accent.
 * Mirrors the "TECH I / BUILD WITH." treatment across the site.
 */
export function SplitTitle({ top, bottom, size = "lg", tone = "dark" }) {
  const accent = tone === "lime" ? "text-ink" : "text-lime";
  const primary = tone === "lime" ? "text-ink" : "text-white";

  return (
    <h2 className={size === "xl" ? "display-xl" : "display-lg"}>
      <span className={`block ${primary}`}>{top}</span>
      <span className={`block ${accent}`}>{bottom}</span>
    </h2>
  );
}
