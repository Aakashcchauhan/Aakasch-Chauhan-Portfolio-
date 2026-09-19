const tree = ["portfolio", "src", "components", "pages", "styles", "lib", "public"];

const code = [
  [{ t: "// Build. Learn. Grow.", c: "text-white/35" }],
  [],
  [
    { t: "const ", c: "text-sky-400" },
    { t: "developer", c: "text-lime" },
    { t: " = {", c: "text-white/70" },
  ],
  [
    { t: "  name", c: "text-white/70" },
    { t: ": ", c: "text-white/40" },
    { t: '"Aakash Chauhan"', c: "text-amber-300" },
    { t: ",", c: "text-white/40" },
  ],
  [
    { t: "  role", c: "text-white/70" },
    { t: ": ", c: "text-white/40" },
    { t: '"Full Stack Engineer"', c: "text-amber-300" },
    { t: ",", c: "text-white/40" },
  ],
  [
    { t: "  passion", c: "text-white/70" },
    { t: ": ", c: "text-white/40" },
    { t: '"Building Solutions"', c: "text-amber-300" },
  ],
  [{ t: "};", c: "text-white/70" }],
  [],
  [
    { t: "function ", c: "text-sky-400" },
    { t: "createImpact", c: "text-lime" },
    { t: "() {", c: "text-white/70" },
  ],
  [
    { t: "  return ", c: "text-sky-400" },
    { t: '"Ideas + Code = Reality"', c: "text-amber-300" },
    { t: ";", c: "text-white/40" },
  ],
  [{ t: "}", c: "text-white/70" }],
  [],
  [{ t: "// Always learning...", c: "text-white/35" }],
];

export default function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-[#0d0d0d] shadow-[0_30px_80px_-40px_rgba(204,255,0,0.35)]">
      <div className="flex items-center justify-between border-b border-hairline bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-lime" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="font-mono text-[11px] text-white/45">aakash.dev</span>
        <span className="label text-[9px]">Live</span>
      </div>

      <div className="grid grid-cols-[110px_minmax(0,1fr)] sm:grid-cols-[140px_minmax(0,1fr)]">
        <ul className="hidden border-r border-hairline py-4 sm:block">
          {tree.map((folder) => (
            <li
              key={folder}
              className="px-4 py-1.5 font-mono text-[11px] text-white/45"
            >
              <span className="mr-1.5 text-white/25">›</span>
              {folder}
            </li>
          ))}
        </ul>

        <pre className="col-span-2 overflow-x-auto py-4 font-mono text-[11px] leading-[1.9] sm:col-span-1 sm:text-[12px]">
          {code.map((line, i) => (
            <div key={i} className="flex gap-4 px-4">
              <span className="w-5 shrink-0 select-none text-right text-white/20">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((span, j) => (
                  <span key={j} className={span.c}>
                    {span.t}
                  </span>
                ))}
                {i === code.length - 1 && (
                  <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-lime align-middle" />
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
