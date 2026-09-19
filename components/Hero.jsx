"use client";

import { heroStats, marqueeItems, profile } from "@/lib/data";
import { ArrowUpRight, Download, Github, Linkedin } from "./Icons";
import CodeWindow from "./CodeWindow";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-hairline bg-ink pt-[72px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[140px]"
      />

      {/* Vertical rail, left edge */}
      <span className="vertical-rl label absolute left-4 top-1/2 hidden -translate-y-1/2 tracking-[0.4em] xl:block">
        Turning ideas into reality
      </span>

      <div className="relative z-10 shell grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="hero-stagger min-w-0 lg:col-span-7">
          <p className="label mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>Portfolio</span>
            <span className="text-white/20">/</span>
            <span>2026</span>
            <span className="text-white/20">:</span>
            <span>Build</span>
            <span className="text-lime">·</span>
            <span>Learn</span>
            <span className="text-lime">·</span>
            <span>Grow</span>
          </p>

          <h1 className="display-xl">
            <span className="block text-white">Aakash</span>
            <span className="block text-lime">
              Chauhan
              <span className="ml-1 inline-block h-[0.14em] w-[0.14em] translate-y-[-0.08em] rounded-full bg-white align-middle" />
            </span>
          </h1>

          <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.28em] text-white/85 sm:text-sm">
            <TypingText text={profile.role} speed={55} />
          </p>

          <p className="mt-8 border-l-2 border-lime pl-5 text-body measure">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-solid">
              View projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={profile.resumeUrl} className="btn-ghost">
              Download resume
              <Download className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn-ghost gap-2"
            >
              <Github className="h-4 w-4 text-lime" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn-ghost gap-2"
            >
              <Linkedin className="h-4 w-4 text-lime" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px border-y border-hairline bg-hairline">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`bg-ink px-4 py-6 text-center sm:px-5 ${
                  idx === 2 ? "col-span-2" : ""
                }`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold text-lime">
                    {stat.value}
                  </span>
                  <span className="label mt-2 block">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-w-0 lg:col-span-5 animate-fadeUp" style={{ animationDelay: "0.5s" }}>
          <CodeWindow />

          <ul className="mt-6 hidden gap-px bg-hairline text-right lg:grid lg:w-44 lg:justify-self-end">
            {["Ideas", "Code", "Build", "Deploy", "Repeat"].map((step) => (
              <li key={step} className="label bg-ink px-4 py-2 text-white/55">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex animate-fadeIn" style={{ animationDelay: "1.2s" }}>
        <span className="label text-[9px]">Scroll to explore</span>
        <span className="block h-8 w-[1px] animate-pulse bg-lime/60" />
      </div>

      {/* Scrolling status strip */}
      <div className="relative z-10 flex overflow-hidden border-t border-lime/40 bg-lime py-3.5">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 font-mono text-[11px] font-bold uppercase tracking-label text-ink"
              >
                <span aria-hidden="true">✳</span>
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
