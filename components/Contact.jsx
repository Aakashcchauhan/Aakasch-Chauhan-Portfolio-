"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight, Github, Linkedin, Mail } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback mailto trigger
      const subject = encodeURIComponent(`Project enquiry — ${formData.name}`);
      const body = encodeURIComponent(
        `${formData.message}\n\n— ${formData.name}${
          formData.company ? `, ${formData.company}` : ""
        }\n${formData.email}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }
  }

  return (
    <section id="contact" className="grain relative overflow-hidden bg-lime text-ink">
      <div className="relative z-10 shell grid gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:py-36">
        {/* Left Column: Contact Intro & Links */}
        <div>
          <p className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-ink/60">
            <span>08</span>
            <span className="text-ink/30">/</span>
            <span>Contact</span>
          </p>

          <h2 className="display-xl text-ink">
            Let&apos;s build
            <br />
            something useful
            <span className="ml-1 inline-block h-[0.13em] w-[0.13em] translate-y-[-0.05em] rounded-full bg-white align-middle" />
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-ink/80 measure">
            I&apos;m open to full-stack and software engineering opportunities, interesting products, and technical collaborations.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-label transition-all duration-200 hover:gap-3 hover:border-ink/50"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-label transition-all duration-200 hover:gap-3 hover:border-ink/50"
            >
              LinkedIn
              <Linkedin className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-label transition-all duration-200 hover:gap-3 hover:border-ink/50"
            >
              GitHub
              <Github className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-label text-ink/60">
            Start a conversation
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-ink/85 measure">
            Tell me what you&apos;re working on and I&apos;ll reply as soon as possible.
          </p>

          {status === "success" ? (
            <div className="mt-10 border-2 border-ink p-8 bg-white/10 backdrop-blur-sm transition-all duration-300 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-lime text-base font-bold">
                  ✓
                </span>
                <h4 className="font-mono text-sm uppercase tracking-wider font-bold text-ink">
                  Message Sent!
                </h4>
              </div>
              <p className="mt-4 text-base text-ink/85 leading-relaxed">
                Thank you for reaching out! Your message has been submitted. I&apos;ll review it and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-[11px] font-bold uppercase tracking-label text-ink transition-all hover:opacity-75"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              {/* Row 1: Name & Email */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border-b-2 border-ink/30 pb-3 text-ink placeholder:text-ink/55 transition-all duration-300 focus:border-ink focus:outline-none focus:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.3)] bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full border-b-2 border-ink/30 pb-3 text-ink placeholder:text-ink/55 transition-all duration-300 focus:border-ink focus:outline-none focus:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.3)] bg-transparent"
                  />
                </div>
              </div>

              {/* Row 2: Company */}
              <div>
                <label htmlFor="company" className="sr-only">
                  Company (optional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="w-full border-b-2 border-ink/30 pb-3 text-ink placeholder:text-ink/55 transition-all duration-300 focus:border-ink focus:outline-none focus:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.3)] bg-transparent"
                />
              </div>

              {/* Row 3: What should we build? */}
              <div>
                <div className="flex items-center justify-between pb-1">
                  <label htmlFor="message" className="sr-only">
                    What should we build?
                  </label>
                  {formData.message.length > 0 && (
                    <span className="font-mono text-[10px] text-ink/60 uppercase tracking-widest ml-auto">
                      {formData.message.length} chars
                    </span>
                  )}
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What should we build?"
                  className="w-full border-b-2 border-ink/30 pb-3 text-ink placeholder:text-ink/55 transition-all duration-300 focus:border-ink focus:outline-none focus:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.3)] bg-transparent resize-none"
                />
              </div>

              {/* Error Message Alert */}
              {status === "error" && errorMessage && (
                <div className="border border-red-800 bg-red-500/10 p-4 font-mono text-xs text-red-950">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-label text-lime transition-all duration-200 hover:opacity-85 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)] disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      Sending
                      <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-lime border-t-transparent" />
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
