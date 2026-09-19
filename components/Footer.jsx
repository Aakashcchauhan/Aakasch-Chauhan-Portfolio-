import { profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="shell">
        <div className="rule" />
        <div className="flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="label">
            © {new Date().getFullYear()} {profile.name} — {profile.role}
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
            <a href="#top" className="link-quiet">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
