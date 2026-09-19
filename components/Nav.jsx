"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { Download, Github, Linkedin } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-hairline bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell relative z-[60] flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center bg-lime font-display text-[13px] font-extrabold text-ink">
            {profile.initials}
          </span>
          <span className="font-display text-base font-extrabold uppercase tracking-[0.18em]">
            Aakash<span className="text-lime">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label transition-colors duration-200 hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden p-2 text-white/70 transition-colors duration-200 hover:text-lime sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden p-2 text-white/70 transition-colors duration-200 hover:text-lime sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 border border-lime px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-label text-lime transition-colors duration-200 hover:bg-lime hover:text-ink sm:inline-flex"
          >
            Resume
            <Download className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] grid h-10 w-10 place-items-center border border-hairline lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-white transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-white transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ─── Mobile menu (< md): fullscreen, bottom-to-top ─── */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black md:hidden animate-slideUp">
          {/* Spacer for header */}
          <div className="h-[72px] shrink-0" />

          <nav
            className="shell flex flex-1 flex-col justify-center gap-2 py-8"
            aria-label="Mobile navigation"
          >
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-5 font-display text-3xl font-extrabold uppercase animate-menuItemUp"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mr-4 font-mono text-xs text-lime/60">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-menuItemUp"
              style={{ animationDelay: `${nav.length * 60 + 80}ms` }}
            >
              <a
                href={profile.resumeUrl}
                className="btn-solid"
                onClick={() => setOpen(false)}
              >
                Download resume
                <Download className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost gap-2"
                onClick={() => setOpen(false)}
              >
                <Github className="h-4 w-4 text-lime" />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost gap-2"
                onClick={() => setOpen(false)}
              >
                <Linkedin className="h-4 w-4 text-lime" />
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* ─── Tablet menu (md – lg): slide from right ─── */}
      {open && (
        <div className="fixed inset-0 z-50 hidden md:flex lg:hidden animate-slideInRight">
          {/* Dimmed backdrop */}
          <div
            className="flex-1 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="flex w-[380px] flex-col border-l border-hairline bg-black">
            {/* Spacer for header */}
            <div className="h-[72px] shrink-0" />

            <nav
              className="flex flex-1 flex-col justify-center gap-2 px-10 py-8"
              aria-label="Tablet navigation"
            >
              {nav.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-4 font-display text-2xl font-extrabold uppercase animate-menuItemRight"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="mr-3 font-mono text-xs text-lime/60">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              ))}

              <div
                className="mt-8 flex flex-col gap-3 animate-menuItemRight"
                style={{ animationDelay: `${nav.length * 60 + 80}ms` }}
              >
                <a
                  href={profile.resumeUrl}
                  className="btn-solid self-start"
                  onClick={() => setOpen(false)}
                >
                  Download resume
                  <Download className="h-3.5 w-3.5" />
                </a>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <Github className="h-4 w-4 text-lime" />
                    GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <Linkedin className="h-4 w-4 text-lime" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
