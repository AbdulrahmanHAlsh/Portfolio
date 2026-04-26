import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import { LangProvider } from "@/lib/lang-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulrahman Al-Shahrani | AI & Data-Driven Systems Specialist",
  description: "AI & Data-Driven Systems Specialist specializing in IoT, machine learning, and data-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Noto+Kufi+Arabic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LangProvider>{children}</LangProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
