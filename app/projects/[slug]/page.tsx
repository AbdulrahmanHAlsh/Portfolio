import { notFound } from "next/navigation";
import { PROJECT_DETAILS } from "@/lib/data";
import ProjectDetail from "@/components/ProjectDetail";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) return {};
  return {
    title: `${project.title.en} — Abdulrahman Al-Shahrani`,
    description: project.tagline.en,
  };
}
