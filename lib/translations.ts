export const translations = {
  en: {
    // Nav
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      name: "Abdulrahman Al-Shahrani",
      title: "AI & Data-Driven Systems Specialist",
      subtitle:
        "I build intelligent systems at the intersection of AI, data, and real-world impact. Passionate about IoT solutions, machine learning, and creating technology that solves meaningful problems.",
      cta: "View My Work",
      cv: "Download CV",
      scroll: "scroll",
    },
    // About
    about: {
      sectionLabel: "About Me",
      heading: "Building Intelligent Systems",
      p1: "I'm a Computer Information Systems student at Imam Abdulrahman Bin Faisal University, specializing in data-driven systems, AI-enabled solutions, and smart technology integration. My GPA of 4.00 reflects my commitment to technical excellence.",
      p2: "I've built real-world projects in IoT, automation, and machine learning — from a smart wearable child safety system to an intelligent Gmail automation pipeline. I bring technical leadership and a systems-thinking mindset to every challenge.",
      p3: "When I'm not building, you'll find me exploring the latest AI research, participating in competitions like the Consulting Championship 2025, or deepening my expertise through programs like the KAUST Academy AI Program.",
      skills: "Core Skills",
    },
    // Projects
    projects: {
      sectionLabel: "Work",
      heading: "Selected Projects",
      viewProject: "View Details",
      viewCode: "View on GitHub",
    },
    // Project detail page
    projectDetail: {
      back: "Back to Projects",
      overview: "Overview",
      highlights: "Key Highlights",
      role: "My Role",
      techStack: "Tech Stack",
      screenshots: "Screenshots",
      comingSoon: "Screenshots coming soon",
      github: "GitHub",
    },
    // Experience
    experience: {
      sectionLabel: "Background",
      heading: "Education",
      achievementsHeading: "Achievements",
    },
    // Certifications
    certifications: {
      sectionLabel: "Credentials",
      heading: "Certifications",
      issued: "Issued",
    },
    // Contact
    contact: {
      sectionLabel: "Get In Touch",
      heading: "Let's Work Together",
      subtitle:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      emailLabel: "Email Me",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    // Footer
    footer: {
      built: "Built with",
      and: "and",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      projects: "المشاريع",
      experience: "الخبرة",
      certifications: "الشهادات",
      contact: "تواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "عبدالرحمن الشهراني",
      title: "متخصص في الذكاء الاصطناعي والأنظمة المدفوعة بالبيانات",
      subtitle:
        "أبني أنظمة ذكية تجمع بين الذكاء الاصطناعي والبيانات والأثر الحقيقي. شغوف بحلول إنترنت الأشياء والتعلم الآلي.",
      cta: "اعرض أعمالي",
      cv: "تحميل السيرة الذاتية",
      scroll: "تمرير",
    },
    about: {
      sectionLabel: "عني",
      heading: "أبني أنظمة ذكية",
      p1: "طالب نظم معلومات حاسب في جامعة الإمام عبدالرحمن بن فيصل، أتخصص في الأنظمة المدفوعة بالبيانات وحلول الذكاء الاصطناعي. حققت معدلاً تراكمياً 4.00 يعكس التزامي بالتميز الأكاديمي والتقني.",
      p2: "نفّذت مشاريع حقيقية في إنترنت الأشياء والأتمتة والتعلم الآلي — من نظام متكامل لتتبع سلامة الأطفال في الفعاليات، إلى خط أتمتة ذكي لتصنيف البريد الإلكتروني. أؤمن بالتفكير الشامل والقيادة التقنية في كل مشروع.",
      p3: "خارج البرمجة، أتابع أحدث أبحاث الذكاء الاصطناعي، وأشارك في مسابقات مثل بطولة الاستشارات 2025، وأطور مهاراتي عبر برامج متخصصة كبرنامج أكاديمية كاوست للذكاء الاصطناعي.",
      skills: "المهارات التقنية",
    },
    projects: {
      sectionLabel: "الأعمال",
      heading: "مشاريع مختارة",
      viewProject: "عرض التفاصيل",
      viewCode: "عرض على جيت هاب",
    },
    projectDetail: {
      back: "العودة للمشاريع",
      overview: "نظرة عامة",
      highlights: "أبرز النقاط",
      role: "دوري في المشروع",
      techStack: "التقنيات المستخدمة",
      screenshots: "لقطات الشاشة",
      comingSoon: "لقطات الشاشة قريباً",
      github: "جيت هاب",
    },
    experience: {
      sectionLabel: "الخلفية",
      heading: "التعليم",
      achievementsHeading: "الإنجازات",
    },
    certifications: {
      sectionLabel: "الشهادات",
      heading: "الشهادات والاعتمادات",
      issued: "تاريخ الإصدار:",
    },
    contact: {
      sectionLabel: "تواصل معي",
      heading: "لنعمل معاً",
      subtitle:
        "أرحب بمناقشة المشاريع الجديدة والأفكار الإبداعية وفرص التعاون.",
      emailLabel: "راسلني",
      linkedinLabel: "لينكد إن",
      githubLabel: "جيت هاب",
    },
    footer: {
      built: "صُنع بـ",
      and: "و",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export type Lang = "en" | "ar";
export type Translations = typeof translations.en;
