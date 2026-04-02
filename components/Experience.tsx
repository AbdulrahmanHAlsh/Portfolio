"use client";

import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";

const EXPERIENCE = [
  {
    role: "B.Sc. Computer Information Systems",
    company: "Imam Abdulrahman Bin Faisal University",
    period: "2021 – May 2026",
    location: "Saudi Arabia",
    bullets: [
      "GPA: 4.00 — graduating with distinction.",
      "Recognized for leading multidisciplinary technical project planning, system design, and implementation coordination.",
      "Led multidisciplinary graduation project (SafeTrack Kids) integrating IoT and real-time data systems.",
    ],
  },
  {
    role: "AI Program Participant",
    company: "KAUST Academy",
    period: "2025",
    location: "Saudi Arabia",
    bullets: [
      "Selected for the KAUST Academy Artificial Intelligence Program based on technical and academic merit.",
      "Completed prerequisite Python Training Program comprising five specialized courses in Python programming and data science foundations.",
    ],
  },
  {
    role: "Consulting Championship Competitor",
    company: "Consulting Championship 2025",
    period: "2025",
    location: "Saudi Arabia",
    bullets: [
      "Competed demonstrating analytical problem-solving, business strategy, and team collaboration skills.", 
    ],
  },
];

export default function Experience() {
  const { t, dir } = useLang();

  return (
    <Section id="experience" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div dir={dir}>
        <SectionLabel>{t.experience.sectionLabel}</SectionLabel>
        <h2
          className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t.experience.heading}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[7px] md:left-[11px] w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                      {exp.period}
                    </p>
                    <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2"
                    >
                      <span className="text-emerald-400 mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
