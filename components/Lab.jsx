"use client";

import { useEffect, useState } from "react";
import { layers } from "@/lib/data";
import { Eyebrow, Section } from "./Section";

export default function Lab() {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  // Auto-rotates until the visitor picks a layer themselves.
  useEffect(() => {
    if (locked) return;
    const id = setInterval(() => setActive((i) => (i + 1) % layers.length), 4500);
    return () => clearInterval(id);
  }, [locked]);

  // Trigger fade animation on tab change
  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [active]);

  const layer = layers[active];

  return (
    <Section id="lab">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Eyebrow index="04">Build lab</Eyebrow>
          <h2 className="display-lg">
            <span className="block text-white">How I</span>
            <span className="block text-lime">Work.</span>
          </h2>

          <p className="mt-8 text-body measure">
            Pick a layer of the stack. The preview auto-rotates until you take
            control.
          </p>

          <div
            role="tablist"
            aria-label="Stack layers"
            className="mt-10 flex flex-wrap gap-3"
          >
            {layers.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls="lab-panel"
                onClick={() => {
                  setActive(i);
                  setLocked(true);
                }}
                className={`px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-label transition-all duration-200 ${
                  i === active
                    ? "bg-lime text-ink shadow-[0_0_20px_-5px_rgba(204,255,0,0.4)]"
                    : "border border-hairline text-white/60 hover:border-lime/50 hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div
          key={fadeKey}
          id="lab-panel"
          role="tabpanel"
          aria-live="polite"
          className="tab-fade-enter overflow-hidden rounded-lg border border-hairline bg-[#0d0d0d]"
        >
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="label text-[9px]">
              <span className="mr-2 text-lime">●</span>Live preview
            </span>
          </div>

          <div className="p-6 sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <p className="font-mono text-[11px] uppercase tracking-label text-lime">
                Aakash / {layer.name}
              </p>
              <span className="tag-mono">{layer.badge}</span>
            </div>

            <h3 className="display-lg mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)]">
              {layer.headline}
            </h3>

            <p className="mt-5 text-body measure">{layer.blurb}</p>

            <pre className="mt-8 overflow-x-auto border-l-2 border-lime/70 bg-white/[0.03] py-5 font-mono text-[12px] leading-[2]">
              {layer.code.map((line, i) => (
                <div key={i} className="flex gap-5 px-5">
                  <span className="select-none text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-pre text-white/80">{line}</span>
                </div>
              ))}
            </pre>

            <div className="rule mt-8" />

            <div className="mt-5 flex items-center justify-between gap-4">
              <code className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                $ {layer.command}
              </code>
              <span className="h-2.5 w-2.5 animate-blink rounded-full bg-lime" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
