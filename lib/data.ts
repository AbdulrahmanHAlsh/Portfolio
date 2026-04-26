export const SKILLS = [
  "Python",
  "HTML",
  "JavaScript",
  "C++",
  "Java",
  "SQL",
  "Database Design",
  "Machine Learning",
  "Data Analysis",
  "n8n",
  "MySQL",
  "Git & GitHub",
];

export type ProjectCard = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  repo: string;
};

export const PROJECTS: ProjectCard[] = [
  {
    title: "SafeTrack Kids",
    slug: "safetrack-kids",
    description:
      "Graduation project: a smart wearable event safety solution enabling real-time child monitoring and safe-zone alerts through integrated location and wireless communication technologies. Supports event organizers through data-driven monitoring and a rental-based service model.",
    tech: ["IoT", "ESP32-S3", "BLE", "React", "Firebase", "SQL"],
    repo: "https://github.com/AbdulrahmanHAlsh/SafeTrack",
  },
  {
    title: "Gmail Automation System",
    slug: "gmail-automation",
    description:
      "Rule-based email automation system that classifies incoming Gmail messages and converts unstructured email events into structured datasets stored in Google Sheets for tracking and analysis. Implements API integrations, OAuth2 authentication, conditional logic routing, and production deployment.",
    tech: ["n8n", "Google APIs", "OAuth2", "JavaScript", "Google Sheets"],
    repo: "#",
  },
];

export type ProjectDetail = {
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

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
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
      { label: "Hardware", items: ["LILYGO T-Watch S3 Plus", "ESP32-S3", "GPS (ATGM336H)", "BLE", "WiFi"] },
      { label: "Frontend", items: ["React", "CSS3"] },
      { label: "Backend", items: ["Firebase", "SQL Database", "REST APIs"] },
      { label: "Security", items: ["HTTPS", "PDPL Compliance", "NCA Guidelines", "OWASP IoT"] },
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
    repo: "https://github.com/AbdulrahmanHAlsh/SafeTrack",
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
      { label: "Logic", items: ["JavaScript", "Conditional Routing"] },
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

export const CERTS = [
  {
    name: "Artificial Intelligence Fundamentals with Capstone Project",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "Introduction to Data Science in Python",
    issuer: "University of Michigan",
    date: "2024",
  },
  {
    name: "Data Collection and Processing with Python",
    issuer: "University of Michigan",
    date: "2024",
  },
  {
    name: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "AI Prerequisite Python Training Program (5 Courses)",
    issuer: "KAUST Academy",
    date: "2024",
  },
];

export const EDUCATION = [
  {
    role: "B.Sc. Computer Information Systems",
    company: "Imam Abdulrahman Bin Faisal University",
    period: "2021 – May 2026",
    location: "Saudi Arabia",
    bullets: [
      "GPA: 4.00 — graduating with distinction.",
      "Specializing in data-driven systems, AI-enabled solutions, and smart technology integration.",
      "Led multidisciplinary graduation project (SafeTrack Kids) integrating IoT and real-time data systems.",
    ],
  },
];

export const ACHIEVEMENTS = [
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
      "Recognized for leading multidisciplinary technical project planning, system design, and implementation coordination.",
    ],
  },
];
