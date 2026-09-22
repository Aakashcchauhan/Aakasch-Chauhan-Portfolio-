"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "@/lib/data";
import { Eyebrow, Section, SplitTitle } from "./Section";
import { Download, ExternalLink } from "./Icons";
import useReveal from "@/hooks/useReveal";

function EyeIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const gridRef = useReveal({ threshold: 0.1 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <Section id="certificates" tone="panel">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow index="07">Certificates &amp; Training</Eyebrow>
          <SplitTitle top="Verified" bottom="Learning." />
        </div>
        <span className="label">{certificates.length} Credentials</span>
      </div>

      <div className="rule mt-10" />

      <div
        ref={gridRef}
        className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((cert, i) => (
          <article
            key={cert.title + i}
            className="group flex flex-col min-w-0 overflow-hidden rounded-lg border border-hairline bg-surface/60 transition-all duration-300 hover:border-lime/40 hover:-translate-y-1 hover:shadow-[0_12px_36px_-12px_rgba(204,255,0,0.14)]"
          >
            {cert.imageUrl ? (
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 border-b border-hairline/60 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
                aria-label={`View certificate preview for ${cert.title}`}
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {cert.badge && (
                  <span className="absolute top-3 right-3 tag-mono text-[10px] border border-lime/40 text-lime bg-ink/90 backdrop-blur-sm shadow-md">
                    {cert.badge}
                  </span>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-ink/50 backdrop-blur-[2px]">
                  <span className="tag-mono border border-lime text-lime bg-ink/95 text-[11px] px-3 py-1 flex items-center gap-1.5 shadow-xl">
                    <EyeIcon className="h-3.5 w-3.5" />
                    Quick Preview
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-7 pb-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {cert.badge && (
                    <span className="tag-mono text-[10px] border border-lime/40 text-lime bg-ink/90">
                      {cert.badge}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col flex-1 p-6 sm:p-7">
              {cert.imageUrl && (
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {cert.credentialId && (
                    <span className="font-mono text-[11px] text-white/50 truncate max-w-[170px]" title={cert.credentialId}>
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              )}

              <h3 className="display-md text-[1.15rem] leading-snug transition-colors duration-300 group-hover:text-lime">
                {cert.title}
              </h3>

              <p className="mt-2 text-body text-white/70">
                {cert.issuer}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {cert.issueDate && (
                  <span className="font-mono text-[11px] text-white/50">
                    {cert.issueDate}
                  </span>
                )}
                {cert.duration && (
                  <span className="tag-mono text-[10px] border border-hairline text-white/70">
                    {cert.duration}
                  </span>
                )}
              </div>

              {cert.description && (
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">
                  {cert.description}
                </p>
              )}

              <div className="mt-auto pt-6">
                <div className="rule mb-4" />
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="mb-5">
                  <ul className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <li key={skill} className="tag-mono text-[10px]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                {cert.imageUrl ? (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="link-quiet inline-flex items-center gap-1.5 text-lime hover:underline font-mono text-[12px]"
                  >
                    <EyeIcon className="h-3.5 w-3.5" />
                    Preview
                  </button>
                ) : (
                  <span className="font-mono text-[11px] text-white/40">
                    Verified Program
                  </span>
                )}

                <div className="flex items-center gap-3">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet inline-flex items-center gap-1.5 text-white/70 hover:text-lime font-mono text-[12px]"
                      title="Open Certificate PDF"
                    >
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </a>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet inline-flex items-center gap-1.5 text-white/70 hover:text-lime font-mono text-[12px]"
                      title="Verify on official portal"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-ink/85 backdrop-blur-md transition-opacity duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="relative flex flex-col max-w-4xl w-full max-h-[92vh] rounded-lg border border-hairline bg-surface overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-hairline bg-surface">
              <div>
                <div className="flex items-center gap-2">
                  <span className="tag-mono text-[10px] border border-lime/40 text-lime bg-lime/5">
                    {selectedCert.badge || "Verified Certificate"}
                  </span>
                  {selectedCert.credentialId && (
                    <span className="font-mono text-[11px] text-white/50">
                      ID: {selectedCert.credentialId}
                    </span>
                  )}
                </div>
                <h3 className="display-md text-[1.2rem] sm:text-[1.35rem] text-white mt-2">
                  {selectedCert.title}
                </h3>
                <p className="text-body text-white/70 text-[13px] mt-0.5">
                  {selectedCert.issuer} · Issued {selectedCert.issueDate}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-md text-white/60 hover:text-lime hover:bg-white/5 transition-colors"
                aria-label="Close preview"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-ink/60 flex items-center justify-center min-h-[300px]">
              {selectedCert.imageUrl && (
                <div className="relative w-full max-w-3xl aspect-[1.414/1] rounded border border-hairline/80 overflow-hidden shadow-xl bg-white/5">
                  <Image
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-t border-hairline bg-surface">
              <div className="flex items-center gap-2">
                {selectedCert.skills && (
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {selectedCert.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="tag-mono text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-lime border border-lime/40 bg-lime/10 hover:bg-lime/20 font-mono text-[12px] transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Open PDF
                  </a>
                )}

                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-white/80 border border-hairline hover:border-lime/50 hover:text-lime font-mono text-[12px] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Verify Online
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-md text-white/60 hover:text-white font-mono text-[12px] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
