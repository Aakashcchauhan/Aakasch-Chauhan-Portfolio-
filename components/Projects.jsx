"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Eyebrow, Section, SplitTitle } from "./Section";
import { ArrowUpRight, Github, ExternalLink, Package } from "./Icons";
import useReveal from "@/hooks/useReveal";

function ProjectCard({ project, index }) {

  // Build link entries from the flexible links object
  const linkEntries = [];
  if (project.links?.demo) {
    linkEntries.push({
      href: project.links.demo,
      label: "Live demo",
      Icon: ArrowUpRight,
      accent: true,
    });
  }
  if (project.links?.live) {
    linkEntries.push({
      href: project.links.live,
      label: "Live site",
      Icon: ArrowUpRight,
      accent: true,
    });
  }
  if (project.links?.github) {
    linkEntries.push({
      href: project.links.github,
      label: "GitHub",
      Icon: Github,
      accent: false,
    });
  }
  if (project.links?.npm) {
    linkEntries.push({
      href: project.links.npm,
      label: "NPM",
      Icon: Package,
      accent: false,
    });
  }
  if (project.links?.docs) {
    linkEntries.push({
      href: project.links.docs,
      label: "Docs",
      Icon: ExternalLink,
      accent: false,
    });
  }

  return (
    <article
      className="group flex flex-col min-w-0 overflow-hidden rounded-lg border border-hairline bg-surface/50 transition-all duration-300 hover:border-lime/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(204,255,0,0.12)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] text-lime">{project.index}</span>
          <ArrowUpRight className="h-4 w-4 text-white/35 transition-all duration-200 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="display-md mt-3">{project.title}</h3>
        <p className="label mt-3">{project.kind}</p>

        <p className="mt-5 text-body measure">{project.summary}</p>

        <p className="mt-5 border-l-2 border-lime/70 pl-4 text-[15px] leading-relaxed text-white/75">
          Problem → Solution: {project.problem}
        </p>

        {/* Key features — revealed on hover */}
        {project.features && project.features.length > 0 && (
          <div className="mt-0 grid grid-rows-[0fr] transition-[grid-template-rows,margin] duration-500 ease-in-out group-hover:mt-6 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <h4 className="label mb-3 text-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100">Key features</h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="mt-0.5 text-lime shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="tag-mono">
              {t}
            </li>
          ))}
        </ul>

        {/* Links bar */}
        {linkEntries.length > 0 && (
          <div className="mt-7 flex items-center gap-7 pt-1">
            {linkEntries.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.accent
                    ? "link-quiet text-lime hover:text-white"
                    : "link-quiet"
                }
                aria-label={`${link.label} — ${project.title}`}
              >
                {link.label}
                <link.Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const gridRef = useReveal({ threshold: 0.08 });

  return (
    <Section id="projects" tone="panel">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow index="06">Projects</Eyebrow>
          <SplitTitle top="Selected" bottom="Builds." />
        </div>
        <span className="label">{projects.length} / {projects.length}</span>
      </div>

      <div className="rule mt-10" />

      <div
        ref={gridRef}
        className="reveal-stagger mt-12 grid gap-6 lg:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
