"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [role='tab'], input, textarea, [data-cursor-hover]")) {
        setHovering(true);
      }
    };

    const onOut = (e) => {
      if (e.target.closest("a, button, [role='tab'], input, textarea, [data-cursor-hover]")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference transition-transform duration-200 ease-out"
        style={{
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          background: hovering
            ? "radial-gradient(circle, rgba(204,255,0,0.25) 0%, transparent 70%)"
            : "transparent",
          border: hovering ? "1.5px solid rgba(204,255,0,0.5)" : "none",
        }}
      />
      {/* Core dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] rounded-full transition-all duration-150 ease-out"
        style={{
          width: hovering ? 6 : 10,
          height: hovering ? 6 : 10,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#CCFF00",
          boxShadow: hovering
            ? "0 0 16px 4px rgba(204,255,0,0.5)"
            : "0 0 6px 1px rgba(204,255,0,0.3)",
        }}
      />
    </>
  );
}
