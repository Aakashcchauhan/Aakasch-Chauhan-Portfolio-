"use client";

import { education, training } from "@/lib/data";
import { Eyebrow, Section } from "./Section";
import useReveal from "@/hooks/useReveal";

export default function Experience() {
  const listRef = useReveal({ threshold: 0.08 });

  return (
    <Section id="experience" tone="panel">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-5">
          <Eyebrow index="06">Education &amp; Training</Eyebrow>
          <h2 className="display-lg">
            <span className="block text-white">Keep</span>
            <span className="block text-lime">Growing.</span>
          </h2>
        </div>

        <div ref={listRef} className="reveal-stagger min-w-0 space-y-12 lg:col-span-7">
          {/* EDUCATION SUBSECTION */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-lime mb-6">
              EDUCATION
            </h3>
            <ol className="border-t border-hairline">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="group border-b border-hairline py-7 transition-all duration-300 hover:pl-4 hover:border-l-2 hover:border-l-lime"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h4 className="display-md text-[1.2rem] sm:text-[1.3rem] transition-colors duration-200 group-hover:text-lime">
                      {item.degree}
                    </h4>
                    <span className="label text-lime">{item.period}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-body text-white/80">{item.institution}</p>
                    {item.grade && (
                      <span className="tag-mono text-[11px] border border-lime/30 text-lime/90 bg-lime/5">
                        {item.grade}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* TRAINING SUBSECTION */}
          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-lime mb-6">
              TRAINING
            </h3>
            <ol className="border-t border-hairline">
              {training.map((item) => (
                <li
                  key={item.title}
                  className="group border-b border-hairline py-7 transition-all duration-300 hover:pl-4 hover:border-l-2 hover:border-l-lime"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h4 className="display-md text-[1.2rem] sm:text-[1.3rem] transition-colors duration-200 group-hover:text-lime">
                      {item.title}
                    </h4>
                    <span className="label text-lime">{item.period}</span>
                  </div>
                  <p className="mt-2 text-body text-white/70">{item.institution}</p>
                  {item.description && (
                    <p className="mt-4 text-[14px] leading-relaxed text-white/75 measure">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
