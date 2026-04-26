"use client";

import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { EDUCATION, ACHIEVEMENTS } from "@/lib/data";

type TimelineItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[7px] md:left-[11px] w-px bg-zinc-200 dark:bg-zinc-800" />
      <div className="space-y-10">
        {items.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-10">
            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">{exp.company}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2">
                  <span className="text-emerald-400 mt-1.5 shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, dir } = useLang();

  return (
    <Section id="experience" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div dir={dir} className="space-y-20">
        <div>
          <SectionLabel>{t.experience.sectionLabel}</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-12">
            {t.experience.heading}
          </h2>
          <TimelineList items={EDUCATION} />
        </div>

        <div>
          <h2 className="font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal mb-12">
            {t.experience.achievementsHeading}
          </h2>
          <TimelineList items={ACHIEVEMENTS} />
        </div>
      </div>
    </Section>
  );
}
