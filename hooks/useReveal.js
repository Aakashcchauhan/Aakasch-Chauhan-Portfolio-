"use client";

import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to any element.
 * When it scrolls into view, the "revealed" CSS class is added (once).
 */
export default function useReveal({ threshold = 0.05, rootMargin = "0px 0px 50px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately reveal if IntersectionObserver is unsupported
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Fallback safety: guarantee section reveals within 300ms even if observer fails
    const timer = setTimeout(() => {
      if (el) el.classList.add("revealed");
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
