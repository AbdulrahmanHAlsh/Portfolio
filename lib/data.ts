import type { Lang } from "./translations";

type L<T = string> = Record<Lang, T>;

// Inside Arabic text, a multi-word Latin name that wraps across lines reads out of order
const nb = (s: string) => s.replaceAll(" ", " ");
const SAFETRACK = nb("SafeTrack Kids");
const TWATCH = nb("LILYGO T-Watch S3 Plus");
const SHEETS = nb("Google Sheets");
const GMAIL_API = nb("Gmail API");

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
  title: L;
  slug: string;
  description: L;
  tech: string[];
  repo: string;
};

export const PROJECTS: ProjectCard[] = [
  {
    title: { en: "SafeTrack Kids", ar: "SafeTrack Kids" },
    slug: "safetrack-kids",
    description: {
      en: "Graduation project: a smart wearable event safety solution enabling real-time child monitoring and safe-zone alerts through integrated location and wireless communication technologies. Supports event organizers through data-driven monitoring and a rental-based service model.",
      ar: "مشروع التخرج: حل ذكي قابل للارتداء لسلامة الأطفال في الفعاليات، يتيح مراقبة الأطفال لحظياً وتنبيهات المناطق الآمنة عبر تقنيات متكاملة لتحديد الموقع والاتصال اللاسلكي. ويدعم منظمي الفعاليات بمراقبة قائمة على البيانات ونموذج خدمة قائم على التأجير.",
    },
    tech: ["IoT", "ESP32-S3", "BLE", "React", "Firebase", "SQL"],
    repo: "https://github.com/AbdulrahmanHAlsh/SafeTrack",
  },
  {
    title: { en: "Gmail Automation System", ar: "نظام أتمتة Gmail" },
    slug: "gmail-automation",
    description: {
      en: "Rule-based email automation system that classifies incoming Gmail messages and converts unstructured email events into structured datasets stored in Google Sheets for tracking and analysis. Implements API integrations, OAuth2 authentication, conditional logic routing, and production deployment.",
      ar: `نظام أتمتة للبريد الإلكتروني قائم على القواعد، يصنّف رسائل Gmail الواردة ويحوّل أحداث البريد غير المهيكلة إلى بيانات مهيكلة تُحفظ في ${SHEETS} للتتبع والتحليل. ويتضمن تكامل واجهات برمجة التطبيقات، والمصادقة عبر OAuth2، والتوجيه بالمنطق الشرطي، والنشر في بيئة الإنتاج.`,
    },
    tech: ["n8n", "Google APIs", "OAuth2", "JavaScript", "Google Sheets"],
    repo: "#",
  },
];

export type ProjectDetail = {
  title: L;
  tagline: L;
  status: L;
  abstract: L;
  role: L;
  roleDetails: L<string[]>;
  tech: { label: L; items: string[] }[];
  highlights: { title: L; body: L }[];
  repo: string;
  images: string[];
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "safetrack-kids": {
    title: { en: "SafeTrack Kids", ar: "SafeTrack Kids" },
    tagline: {
      en: "Smart Wearable Safety for Event-Based Child Monitoring",
      ar: "سلامة ذكية قابلة للارتداء لمراقبة الأطفال في الفعاليات",
    },
    status: { en: "Graduation Project · 2025", ar: "مشروع تخرج · 2025" },
    abstract: {
      en: `SafeTrack Kids is an IoT-based child safety system designed for large-scale public events. The system combines a smart wearable bracelet with a real-time web portal, enabling parents to monitor their children's location within defined safe zones — all through a simple QR code scan at event entry.

The project follows a B2B2C rental model: event organizers deploy and manage the bracelets, while parents access a personal dashboard to track their child, receive instant out-of-zone alerts, and manage child profiles. All data is automatically deleted at event closure, ensuring full compliance with Saudi Arabia's Personal Data Protection Law (PDPL).

A key architectural decision was pivoting from a custom-built hardware design to the LILYGO T-Watch S3 Plus — a programmable ESP32-S3 device with integrated BLE and WiFi. This reduced cost, development time, and complexity while preserving full programming control over the device's behavior and communication protocols.`,
      ar: `${SAFETRACK} نظام لسلامة الأطفال قائم على إنترنت الأشياء، مصمم للفعاليات العامة واسعة النطاق. يجمع النظام بين سوار ذكي قابل للارتداء وبوابة ويب تعمل لحظياً، ليتمكن أولياء الأمور من متابعة مواقع أطفالهم ضمن مناطق آمنة محددة — وكل ذلك بمسح رمز QR بسيط عند دخول الفعالية.

يعتمد المشروع نموذج تأجير B2B2C: يتولى منظمو الفعاليات توزيع الأساور وإدارتها، بينما يدخل أولياء الأمور إلى لوحة تحكم شخصية لتتبع أطفالهم، واستقبال تنبيهات فورية عند الخروج من المنطقة الآمنة، وإدارة ملفات الأطفال. وتُحذف جميع البيانات تلقائياً عند انتهاء الفعالية، بما يضمن الامتثال الكامل لنظام حماية البيانات الشخصية في المملكة العربية السعودية.

من أبرز القرارات المعمارية التحول من تصميم عتاد مخصص إلى ساعة ${TWATCH}، وهي جهاز ESP32-S3 قابل للبرمجة مزوّد بتقنيتي BLE وWiFi مدمجتين. وقد خفّض ذلك التكلفة ووقت التطوير والتعقيد، مع الحفاظ على التحكم البرمجي الكامل في سلوك الجهاز وبروتوكولات الاتصال.`,
    },
    role: { en: "Project Manager & Technical Lead", ar: "مدير المشروع والقائد التقني" },
    roleDetails: {
      en: [
        "Led a 5-member cross-functional team across the full project lifecycle",
        "Authored all technical documentation: SPMP, SRS, and SDS",
        "Co-designed system architecture, database schema, and data flow",
        "Programmed the ESP32-S3 firmware for bracelet-to-backend communication",
        "Made the pivotal hardware decision to adopt LILYGO T-Watch S3 Plus, reducing cost and complexity while retaining full programmability",
      ],
      ar: [
        "قدت فريقاً متعدد التخصصات من 5 أعضاء عبر دورة حياة المشروع كاملة",
        "أعددت جميع الوثائق التقنية: SPMP وSRS وSDS",
        "شاركت في تصميم معمارية النظام ومخطط قاعدة البيانات وتدفق البيانات",
        "برمجت البرنامج الثابت لشريحة ESP32-S3 للاتصال بين السوار والخادم",
        `اتخذت القرار المحوري باعتماد ${TWATCH}، مما خفّض التكلفة والتعقيد مع الحفاظ على قابلية البرمجة الكاملة`,
      ],
    },
    tech: [
      { label: { en: "Hardware", ar: "العتاد" }, items: ["LILYGO T-Watch S3 Plus", "ESP32-S3", "GPS (ATGM336H)", "BLE", "WiFi"] },
      { label: { en: "Frontend", ar: "الواجهة الأمامية" }, items: ["React", "CSS3"] },
      { label: { en: "Backend", ar: "الواجهة الخلفية" }, items: ["Firebase", "SQL Database", "REST APIs"] },
      { label: { en: "Security", ar: "الأمان" }, items: ["HTTPS", "PDPL Compliance", "NCA Guidelines", "OWASP IoT"] },
    ],
    highlights: [
      {
        title: { en: "Hardware Pivot", ar: "التحول في العتاد" },
        body: {
          en: "Replaced a from-scratch hardware build with the LILYGO T-Watch S3 Plus — cutting SAR 200+ in component costs and weeks of prototyping time, without sacrificing any required functionality.",
          ar: `استبدال بناء العتاد من الصفر بساعة ${TWATCH}، ما وفّر أكثر من 200 ريال من تكلفة المكونات وأسابيع من وقت النماذج الأولية، دون التخلي عن أي وظيفة مطلوبة.`,
        },
      },
      {
        title: { en: "Privacy-First Architecture", ar: "معمارية تضع الخصوصية أولاً" },
        body: {
          en: "All parent and child data is scoped to a single event session and automatically deleted upon event closure, achieving full PDPL compliance by design.",
          ar: "تقتصر جميع بيانات أولياء الأمور والأطفال على جلسة فعالية واحدة، وتُحذف تلقائياً عند انتهائها، ما يحقق الامتثال الكامل لنظام حماية البيانات الشخصية منذ مرحلة التصميم.",
        },
      },
      {
        title: { en: "Dual-Dashboard System", ar: "نظام بلوحتي تحكم" },
        body: {
          en: "Built two distinct interfaces: a parent-facing real-time map with safe-zone alerts, and an organizer-facing inventory and status management panel.",
          ar: "بناء واجهتين مستقلتين: خريطة لحظية لأولياء الأمور مع تنبيهات المناطق الآمنة، ولوحة لمنظمي الفعاليات لإدارة المخزون والحالة.",
        },
      },
      {
        title: { en: "QR-Driven Onboarding", ar: "تسجيل عبر رمز QR" },
        body: {
          en: "Parents pair their child to a bracelet by scanning a QR code displayed on the device — no app download required, accessible from any modern browser.",
          ar: "يربط أولياء الأمور أطفالهم بالسوار بمسح رمز QR المعروض على الجهاز، دون الحاجة إلى تنزيل أي تطبيق، ومن أي متصفح حديث.",
        },
      },
    ],
    repo: "https://github.com/AbdulrahmanHAlsh/SafeTrack",
    images: [],
  },
  "gmail-automation": {
    title: { en: "Gmail Automation System", ar: "نظام أتمتة Gmail" },
    tagline: {
      en: "Intelligent Email Classification & Structured Data Pipeline",
      ar: "تصنيف ذكي للبريد الإلكتروني وخط معالجة للبيانات المهيكلة",
    },
    status: { en: "Personal Project · 2024", ar: "مشروع شخصي · 2024" },
    abstract: {
      en: `A rule-based email automation system that classifies incoming Gmail messages and converts unstructured email events into structured datasets stored in Google Sheets for tracking and analysis.

The system implements full API integrations with OAuth2 authentication, conditional logic routing based on email content, and is deployed in a production environment. It eliminates manual email processing by automatically categorizing messages and extracting key data points into a queryable format.`,
      ar: `نظام أتمتة للبريد الإلكتروني قائم على القواعد، يصنّف رسائل Gmail الواردة ويحوّل أحداث البريد غير المهيكلة إلى بيانات مهيكلة تُحفظ في ${SHEETS} للتتبع والتحليل.

يتضمن النظام تكاملاً كاملاً مع واجهات برمجة التطبيقات والمصادقة عبر OAuth2، وتوجيهاً بالمنطق الشرطي بحسب محتوى الرسائل، ويعمل في بيئة إنتاج فعلية. ويستغني عن المعالجة اليدوية للبريد بتصنيف الرسائل تلقائياً واستخراج البيانات الأساسية بصيغة قابلة للاستعلام.`,
    },
    role: { en: "Solo Developer", ar: "مطوّر منفرد" },
    roleDetails: {
      en: [
        "Designed and implemented the full automation pipeline using n8n",
        "Configured Gmail API integration with OAuth2 authentication flow",
        "Built conditional routing logic to classify emails by type and priority",
        "Structured extracted data into Google Sheets for analysis and reporting",
        "Deployed and maintained the system in a production environment",
      ],
      ar: [
        "صممت ونفّذت خط الأتمتة كاملاً باستخدام n8n",
        `أعددت تكامل ${GMAIL_API} مع مسار المصادقة عبر OAuth2`,
        "بنيت منطق توجيه شرطي لتصنيف الرسائل حسب النوع والأولوية",
        `نظّمت البيانات المستخرجة في ${SHEETS} للتحليل وإعداد التقارير`,
        "نشرت النظام في بيئة الإنتاج وتوليت صيانته",
      ],
    },
    tech: [
      { label: { en: "Automation", ar: "الأتمتة" }, items: ["n8n"] },
      { label: { en: "APIs & Auth", ar: "الواجهات البرمجية والمصادقة" }, items: ["Gmail API", "Google Sheets API", "OAuth2"] },
      { label: { en: "Logic", ar: "المنطق" }, items: ["JavaScript", "Conditional Routing"] },
    ],
    highlights: [
      {
        title: { en: "Zero Manual Processing", ar: "دون أي معالجة يدوية" },
        body: {
          en: "Incoming emails are automatically classified and routed without any human intervention, reducing processing time from minutes to seconds.",
          ar: "تُصنَّف الرسائل الواردة وتُوجَّه تلقائياً دون أي تدخل بشري، ما يختصر وقت المعالجة من دقائق إلى ثوانٍ.",
        },
      },
      {
        title: { en: "Structured Output", ar: "مخرجات مهيكلة" },
        body: {
          en: "Unstructured email content is transformed into clean, structured rows in Google Sheets — ready for analysis, filtering, and reporting.",
          ar: `يتحوّل محتوى البريد غير المهيكل إلى صفوف نظيفة ومهيكلة في ${SHEETS}، جاهزة للتحليل والتصفية وإعداد التقارير.`,
        },
      },
      {
        title: { en: "Production Deployed", ar: "يعمل في بيئة الإنتاج" },
        body: {
          en: "The system runs live in a production environment, handling real email workflows reliably with error handling and retry logic.",
          ar: "يعمل النظام فعلياً في بيئة الإنتاج، ويتعامل مع سير عمل بريد حقيقي بموثوقية، مع معالجة للأخطاء ومنطق لإعادة المحاولة.",
        },
      },
    ],
    repo: "#",
    images: [],
  },
};

// Certificate names stay in English: they are the issuers' official credential titles.
export const CERTS: { name: string; issuer: L; date: string }[] = [
  {
    name: "Artificial Intelligence Fundamentals with Capstone Project",
    issuer: { en: "IBM", ar: "IBM" },
    date: "2024",
  },
  {
    name: "Introduction to Data Science in Python",
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: "2024",
  },
  {
    name: "Data Collection and Processing with Python",
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: "2024",
  },
  {
    name: "Code Generation and Optimization Using IBM Granite",
    issuer: { en: "IBM", ar: "IBM" },
    date: "2024",
  },
  {
    name: "AI Prerequisite Python Training Program (5 Courses)",
    issuer: { en: "KAUST Academy", ar: "أكاديمية كاوست" },
    date: "2024",
  },
];

export type TimelineItem = {
  role: L;
  company: L;
  period: L;
  location: L;
  bullets: L<string[]>;
};

const SAUDI_ARABIA: L = { en: "Saudi Arabia", ar: "المملكة العربية السعودية" };

export const EDUCATION: TimelineItem[] = [
  {
    role: { en: "B.Sc. Computer Information Systems", ar: "بكالوريوس نظم المعلومات الحاسوبية" },
    company: { en: "Imam Abdulrahman Bin Faisal University", ar: "جامعة الإمام عبدالرحمن بن فيصل" },
    period: { en: "2021 – May 2026", ar: "2021 – مايو 2026" },
    location: SAUDI_ARABIA,
    bullets: {
      en: [
        "GPA: 4.00 — graduating with distinction.",
        "Specializing in data-driven systems, AI-enabled solutions, and smart technology integration.",
        "Led multidisciplinary graduation project (SafeTrack Kids) integrating IoT and real-time data systems.",
      ],
      ar: [
        "المعدل التراكمي: 4.00 مع التخرج بمرتبة الشرف.",
        "التخصص في الأنظمة المدفوعة بالبيانات، وحلول الذكاء الاصطناعي، ودمج التقنيات الذكية.",
        `قيادة مشروع تخرج متعدد التخصصات (${SAFETRACK}) يدمج إنترنت الأشياء وأنظمة البيانات اللحظية.`,
      ],
    },
  },
];

export const ACHIEVEMENTS: TimelineItem[] = [
  {
    role: { en: "AI Program Participant", ar: "مشارك في برنامج الذكاء الاصطناعي" },
    company: { en: "KAUST Academy", ar: "أكاديمية كاوست" },
    period: { en: "2025", ar: "2025" },
    location: SAUDI_ARABIA,
    bullets: {
      en: [
        "Selected for the KAUST Academy Artificial Intelligence Program based on technical and academic merit.",
        "Completed prerequisite Python Training Program comprising five specialized courses in Python programming and data science foundations.",
      ],
      ar: [
        "الاختيار لبرنامج أكاديمية كاوست للذكاء الاصطناعي بناءً على الجدارة التقنية والأكاديمية.",
        "إتمام برنامج بايثون التمهيدي المكوّن من خمس دورات متخصصة في برمجة بايثون وأساسيات علم البيانات.",
      ],
    },
  },
  {
    role: { en: "Consulting Championship Competitor", ar: "متسابق في بطولة الاستشارات" },
    company: { en: "Consulting Championship 2025", ar: "بطولة الاستشارات 2025" },
    period: { en: "2025", ar: "2025" },
    location: SAUDI_ARABIA,
    bullets: {
      en: [
        "Competed demonstrating analytical problem-solving, business strategy, and team collaboration skills.",
        "Recognized for leading multidisciplinary technical project planning, system design, and implementation coordination.",
      ],
      ar: [
        "المنافسة بإظهار مهارات حل المشكلات التحليلية، والاستراتيجية التجارية، والعمل الجماعي.",
        "التقدير على قيادة تخطيط المشروع التقني متعدد التخصصات، وتصميم النظام، وتنسيق التنفيذ.",
      ],
    },
  },
];
