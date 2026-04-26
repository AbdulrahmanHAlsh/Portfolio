"use client";

import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { SKILLS } from "@/lib/data";

export default function About() {
  const { t, dir } = useLang();

  return (
    <Section id="about" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div dir={dir}>
        <SectionLabel>{t.about.sectionLabel}</SectionLabel>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-5">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal leading-tight">
              {t.about.heading}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.about.p1}</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.about.p2}</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.about.p3}</p>
          </div>

          <div>
            <h3 className="font-mono text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-5">
              {t.about.skills}
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md hover:border-emerald-400 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
