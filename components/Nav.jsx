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
      <div className="shell flex h-[72px] items-center justify-between gap-6">
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
            className="grid h-10 w-10 place-items-center border border-hairline lg:hidden"
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

      {open && (
        <div className="border-t border-hairline bg-ink lg:hidden">
          <nav className="shell flex flex-col py-4" aria-label="Sections">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-2xl font-extrabold uppercase last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              className="btn-solid mt-6 self-start"
              onClick={() => setOpen(false)}
            >
              Download resume
              <Download className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
