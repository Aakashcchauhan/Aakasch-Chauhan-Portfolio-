import { profile, footer } from "@/lib/data";
import { Github, Linkedin, Mail, Download } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="shell">
        <div className="rule" />

        {/* Tagline block */}
        <div className="py-10">
          <p className="font-display text-lg font-extrabold uppercase tracking-[0.14em] text-white">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-lime">
            {profile.role}
          </p>
          <p className="mt-4 text-body measure">
            {footer.tagline}
          </p>
        </div>

        <div className="rule" />

        <div className="flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="label">
            {footer.copyright}
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="link-quiet">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href={profile.resumeUrl} className="link-quiet">
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a href="#top" className="link-quiet">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
