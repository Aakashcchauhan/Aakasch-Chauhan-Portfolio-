"use client";

import { stack } from "@/lib/data";
import { Eyebrow, Section, SplitTitle } from "./Section";
import { StackIcon } from "./Icons";
import useReveal from "@/hooks/useReveal";

export default function Stack() {
  const gridRef = useReveal({ threshold: 0.1 });

  return (
    <Section id="skills">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow index="03">Skills &amp; tech stack</Eyebrow>
          <SplitTitle top="Tech I" bottom="Build with." />
        </div>
        <p className="text-lg leading-relaxed text-white/80 measure lg:pb-4">
          A practical full-stack toolkit I use to design, build, connect and
          deploy modern web applications.
        </p>
      </div>

      <div
        ref={gridRef}
        className="reveal-stagger mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stack.map((group) => (
          <article
            key={group.title}
            className="group flex flex-col min-w-0 overflow-hidden rounded-md border border-hairline bg-surface/60 p-6 transition-all duration-300 hover:border-lime/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(204,255,0,0.15)]"
          >
            <StackIcon name={group.icon} className="h-7 w-7 text-lime transition-transform duration-300 group-hover:scale-110" />

            <h3 className="display-sm mt-8 transition-colors duration-300 group-hover:text-lime">{group.title}</h3>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const isBasic = item.includes("(Basic)");
                const cleanName = item.replace(/\s*\(Basic\)/, "");
                return (
                  <li
                    key={item}
                    className="tag group/tag"
                  >
                    <span>{cleanName}</span>
                    {isBasic && (
                      <span className="ml-1.5 font-mono text-[9px] uppercase tracking-wider text-lime/80 border border-lime/30 px-1 py-0.5 rounded-[2px] bg-lime/5">
                        Basic
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <div className="rule" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {group.note}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
