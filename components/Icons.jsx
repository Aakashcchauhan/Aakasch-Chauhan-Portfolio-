const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Download({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Github({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.680-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

export function Linkedin({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.83v1.57h.05c.53-.95 1.83-1.95 3.77-1.95C21.2 9.12 22 11.1 22 14.1V21h-4v-6.1c0-1.46-.03-3.33-2.06-3.33-2.06 0-2.38 1.58-2.38 3.22V21h-4V9.5Z"
      />
    </svg>
  );
}

export function ExternalLink({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

export function Package({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

export function StackIcon({ name, className = "h-6 w-6" }) {
  const paths = {
    terminal: <path d="M4 6h16v12H4zM8 10.5l2 1.5-2 1.5M12.5 14H16" />,
    code: <path d="M9 7 4 12l5 5m6-10 5 5-5 5" />,
    database: (
      <>
        <ellipse cx="12" cy="6.5" rx="7" ry="3" />
        <path d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </>
    ),
    git: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8 9.5c1.2 1.8 1.2 3.4 0 5M16 9.5c-1.2 1.8-1.2 3.4 0 5M9.5 8h5" />
      </>
    ),
    cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18m8-13.5L12 12 4 7.5" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {paths[name] ?? paths.cube}
    </svg>
  );
}
