import { focus } from "@/lib/data";
import { Eyebrow, Section } from "./Section";

export default function Focus() {
  return (
    <Section id="focus">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <Eyebrow index="08">Current focus</Eyebrow>
          <h2 className="display-lg">
            <span className="block text-white">What I&apos;m on</span>
            <span className="block text-lime">Right now.</span>
          </h2>
        </div>

        <p className="inline-flex items-center gap-3 border border-lime/40 px-5 py-3 font-mono text-[11px] uppercase tracking-label text-lime">
          <span className="h-2 w-2 animate-blink rounded-full bg-lime" />
          {focus.status}
        </p>
      </div>

      <p className="mt-10 text-lg leading-relaxed text-white/80 measure">
        {focus.lead}
      </p>

      <div className="mt-14 grid gap-px border-t border-hairline bg-hairline sm:grid-cols-3">
        {focus.items.map((item) => (
          <div key={item.title} className="bg-ink p-8">
            <h3 className="label mb-5 text-lime">{item.title}</h3>
            <p className="text-[17px] leading-[1.6] text-white/85">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
