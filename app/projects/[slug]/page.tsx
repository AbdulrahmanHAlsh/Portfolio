import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { PROJECT_DETAILS } from "@/lib/data";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-12 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
          {project.status}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-normal text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          {project.tagline}
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
              GitHub
            </a>
          </div>
        )}
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            Overview
          </h2>
          <div className="space-y-4">
            {project.abstract.split("\n\n").map((para, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            Key Highlights
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
              >
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2 text-sm">
                  {h.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
            My Role
          </h2>
          <p className="font-display text-xl text-zinc-900 dark:text-zinc-100 mb-5">
            {project.role}
          </p>
          <ul className="space-y-3">
            {project.roleDetails.map((detail, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span className="text-emerald-500 mt-0.5 shrink-0">→</span>
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            Tech Stack
          </h2>
          <div className="space-y-4">
            {project.tech.map((group, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 w-32 shrink-0 pt-0.5">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
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
            Screenshots
          </h2>
          {project.images.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-12 text-center">
              <p className="text-sm text-zinc-400 dark:text-zinc-600 font-mono">
                Screenshots coming soon
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 w-full"
                />
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
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) return {};
  return {
    title: `${project.title} — Abdulrahman Al-Shahrani`,
    description: project.tagline,
  };
}
