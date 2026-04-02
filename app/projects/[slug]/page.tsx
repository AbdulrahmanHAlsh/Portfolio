import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  status: string;
  abstract: string;
  role: string;
  roleDetails: string[];
  tech: { label: string; items: string[] }[];
  highlights: { title: string; body: string }[];
  repo: string;
  images: string[];
};

const PROJECTS: Record<string, Project> = {
  "safetrack-kids": {
    title: "SafeTrack Kids",
    tagline: "Smart Wearable Safety for Event-Based Child Monitoring",
    status: "Graduation Project · 2025",
    abstract: `SafeTrack Kids is an IoT-based child safety system designed for large-scale public events. The system combines a smart wearable bracelet with a real-time web portal, enabling parents to monitor their children's location within defined safe zones — all through a simple QR code scan at event entry.

The project follows a B2B2C rental model: event organizers deploy and manage the bracelets, while parents access a personal dashboard to track their child, receive instant out-of-zone alerts, and manage child profiles. All data is automatically deleted at event closure, ensuring full compliance with Saudi Arabia's Personal Data Protection Law (PDPL).

A key architectural decision was pivoting from a custom-built hardware design to the LILYGO T-Watch S3 Plus — a programmable ESP32-S3 device with integrated BLE and WiFi. This reduced cost, development time, and complexity while preserving full programming control over the device's behavior and communication protocols.`,
    role: "Project Manager & Technical Lead",
    roleDetails: [
      "Led a 5-member cross-functional team across the full project lifecycle",
      "Authored all technical documentation: SPMP, SRS, and SDS",
      "Co-designed system architecture, database schema, and data flow",
      "Programmed the ESP32-S3 firmware for bracelet-to-backend communication",
      "Made the pivotal hardware decision to adopt LILYGO T-Watch S3 Plus, reducing cost and complexity while retaining full programmability",
    ],
    tech: [
      { label: "Hardware", items: ["LILYGO T-Watch S3 Plus", "ESP32-S3", "BLE", "GPS (ATGM336H)", "QR Display"] },
      { label: "Frontend", items: ["React", "CSS3"] },
      { label: "Backend", items: ["Firebase", "SQL Database", "REST APIs"] },
      { label: "Security & Compliance", items: ["HTTPS", "PDPL", "NCA Guidelines", "OWASP IoT"] },
    ],
    highlights: [
      {
        title: "Hardware Pivot",
        body: "Replaced a from-scratch hardware build with the LILYGO T-Watch S3 Plus — cutting SAR 200+ in component costs and weeks of prototyping time, without sacrificing any required functionality.",
      },
      {
        title: "Privacy-First Architecture",
        body: "All parent and child data is scoped to a single event session and automatically deleted upon event closure, achieving full PDPL compliance by design.",
      },
      {
        title: "Dual-Dashboard System",
        body: "Built two distinct interfaces: a parent-facing real-time map with safe-zone alerts, and an organizer-facing inventory and status management panel.",
      },
      {
        title: "QR-Driven Onboarding",
        body: "Parents pair their child to a bracelet by scanning a QR code displayed on the device — no app download required, accessible from any modern browser.",
      },
    ],
    repo: "#",
    images: [],
  },
  "gmail-automation": {
    title: "Gmail Automation System",
    tagline: "Intelligent Email Classification & Structured Data Pipeline",
    status: "Personal Project · 2024",
    abstract: `A rule-based email automation system that classifies incoming Gmail messages and converts unstructured email events into structured datasets stored in Google Sheets for tracking and analysis.

The system implements full API integrations with OAuth2 authentication, conditional logic routing based on email content, and is deployed in a production environment. It eliminates manual email processing by automatically categorizing messages and extracting key data points into a queryable format.`,
    role: "Solo Developer",
    roleDetails: [
      "Designed and implemented the full automation pipeline using n8n",
      "Configured Gmail API integration with OAuth2 authentication flow",
      "Built conditional routing logic to classify emails by type and priority",
      "Structured extracted data into Google Sheets for analysis and reporting",
      "Deployed and maintained the system in a production environment",
    ],
    tech: [
      { label: "Automation", items: ["n8n"] },
      { label: "APIs & Auth", items: ["Gmail API", "Google Sheets API", "OAuth2"] },
      { label: "Logic & Scripting", items: ["JavaScript", "Conditional Routing"] },
    ],
    highlights: [
      {
        title: "Zero Manual Processing",
        body: "Incoming emails are automatically classified and routed without any human intervention, reducing processing time from minutes to seconds.",
      },
      {
        title: "Structured Output",
        body: "Unstructured email content is transformed into clean, structured rows in Google Sheets — ready for analysis, filtering, and reporting.",
      },
      {
        title: "Production Deployed",
        body: "The system runs live in a production environment, handling real email workflows reliably with error handling and retry logic.",
      },
    ],
    repo: "#",
    images: [],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
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
        <h1
          className="text-4xl md:text-5xl font-normal text-zinc-900 dark:text-zinc-50 mb-4 leading-tight"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {project.title}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          {project.tagline}
        </p>
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
          <p
            className="text-xl text-zinc-900 dark:text-zinc-100 mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
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
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  if (!project) return {};
  return {
    title: `${project.title} — Abdulrahman Al-Shahrani`,
    description: project.tagline,
  };
}
