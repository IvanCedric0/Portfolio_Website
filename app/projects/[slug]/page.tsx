import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyDemo from "@/components/case-study/CaseStudyDemo";
import CaseStudyWalkthrough from "@/components/case-study/CaseStudyWalkthrough";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — KOUAME Ivan Cédric`,
    description: project.caseStudy.hook,
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHero project={project} />
        <CaseStudyDemo project={project} />
        <CaseStudyWalkthrough project={project} />
        <CaseStudyCTA project={project} />
      </main>
      <Footer />
    </>
  );
}
