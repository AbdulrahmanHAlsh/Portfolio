"use client";

import { useState } from "react";
import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";

// Sign up at formspree.io, create a form, and replace this with your form ID
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const { t, dir } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const links = [
    {
      label: t.contact.emailLabel,
      href: "mailto:abdulrahman@abdulrahmanalsh.me",
      icon: Mail,
    },
    {
      label: t.contact.linkedinLabel,
      href: "https://www.linkedin.com/in/abdulrahman-alshahrani-hassan/",
      icon: Linkedin,
    },
    {
      label: t.contact.githubLabel,
      href: "https://github.com/AbdulrahmanHAlsh",
      icon: Github,
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div dir={dir} className="text-center">
        <SectionLabel>{t.contact.sectionLabel}</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-4">
          {t.contact.heading}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-12">
          {t.contact.subtitle}
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mb-12 space-y-4 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm font-mono focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm font-mono focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What's on your mind?"
              className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-sm font-mono focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-mono">
              <CheckCircle size={14} />
              Message sent — I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-500 font-mono">
              <AlertCircle size={14} />
              Something went wrong. Try emailing me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 text-white rounded-lg font-mono text-sm transition-all duration-200 shadow-lg shadow-emerald-900/20"
          >
            <Send size={13} />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>

        {/* Social links */}
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
