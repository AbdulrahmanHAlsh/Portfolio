"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { useLang } from "@/lib/lang-provider";
import type { ProjectDetail as ProjectDetailType } from "@/lib/data";

export default function ProjectDetail({ project }: { project: ProjectDetailType }) {
  const { t, dir, lang } = useLang();
  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const title = project.title[lang];

  return (
    <main dir={dir} className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
        >
          <BackIcon size={14} />
          {t.projectDetail.back}
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-12 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
          {project.status[lang]}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-normal text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          {project.tagline[lang]}
        </p>
        {project.repo !== "#" && (
          <div className="flex gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all font-mono"
            >
              <Github size={14} />
              {t.projectDetail.github}
            </a>
          </div>
        )}
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            {t.projectDetail.overview}
          </h2>
          <div className="space-y-4">
            {project.abstract[lang].split("\n\n").map((para, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            {t.projectDetail.highlights}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
              >
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2 text-sm">
                  {h.title[lang]}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {h.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
            {t.projectDetail.role}
          </h2>
          <p className="font-display text-xl text-zinc-900 dark:text-zinc-100 mb-5">
            {project.role[lang]}
          </p>
          <ul className="space-y-3">
            {project.roleDetails[lang].map((detail, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span aria-hidden="true" className="text-emerald-500 mt-0.5 shrink-0">{dir === "rtl" ? "←" : "→"}</span>
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            {t.projectDetail.techStack}
          </h2>
          <div className="space-y-4">
            {project.tech.map((group, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 w-32 shrink-0 pt-0.5">
                  {group.label[lang]}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      dir="ltr"
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            {t.projectDetail.screenshots}
          </h2>
          {project.images.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-12 text-center">
              <p className="text-sm text-zinc-400 dark:text-zinc-600 font-mono">
                {t.projectDetail.comingSoon}
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
                >
                  <Image
                    src={src}
                    alt={`${title} — ${t.projectDetail.screenshots} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
        >
          <BackIcon size={14} />
          {t.projectDetail.back}
        </Link>
      </div>
    </main>
  );
}
