"use client";

import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { t, dir } = useLang();

  const links = [
    {
      label: t.contact.emailLabel,
      href: "mailto:abdulrahman@abdulrahmanalsh.me",
      icon: Mail,
    },
    {
      label: t.contact.linkedinLabel,
      href: "https://www.linkedin.com/in/abdulrahman-alshahrani-hassan/", // TODO: replace with your LinkedIn URL
      icon: Linkedin,
    },
    {
      label: t.contact.githubLabel,
      href: "https://github.com/ShineAlready", // TODO: replace with your GitHub URL
      icon: Github,
    },
  ];

  return (
    <Section id="contact" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div dir={dir} className="text-center">
        <SectionLabel>{t.contact.sectionLabel}</SectionLabel>
        <h2
          className="text-4xl md:text-6xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t.contact.heading}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-12">
          {t.contact.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-lg font-mono text-sm text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md hover:shadow-emerald-900/10 active:scale-95 transition-all duration-200"
            >
              <Icon size={15} className="group-hover:scale-110 transition-transform" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
