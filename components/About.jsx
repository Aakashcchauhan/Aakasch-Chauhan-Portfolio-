import { about } from "@/lib/data";
import { Eyebrow, Section, SplitTitle } from "./Section";

export default function About() {
  return (
    <Section id="about" tone="panel">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <Eyebrow index="02">About me</Eyebrow>
          <SplitTitle top="Build with" bottom="Purpose." />
        </div>

        <div>
          <p className="text-xl leading-[1.55] text-white sm:text-[24px]">
            {about.lead}
          </p>

          <div className="rule my-10" />

          <div className="space-y-10">
            <div>
              <h3 className="label mb-6 text-lime">What I build</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {about.builds.map((item) => (
                  <div key={item.title} className="rounded-md border border-hairline bg-surface/40 p-5">
                    <h4 className="font-mono text-[14px] font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-[13px] leading-relaxed text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="label mb-3 text-lime">Career goal</h3>
              <p className="text-body measure text-white/85 leading-relaxed">{about.goal}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
