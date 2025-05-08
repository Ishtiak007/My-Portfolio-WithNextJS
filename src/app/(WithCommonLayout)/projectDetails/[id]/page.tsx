import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";

const ProjectSwiper = dynamic(
  () => import("@/components/modules/DetialsSwiper"),
  {
    ssr: false,
  }
);

export async function generateStaticParams() {
  return Object.values(projects).map((project) => ({ id: project.id }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projectIds = Object.keys(projects);
  const currentIndex = projectIds.indexOf(params.id);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[params.id];
  const nextProjectId = projectIds[(currentIndex + 1) % projectIds.length];

  return (
    <div className="bg-[#173447] min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{project.title}</h1>
      <p className="text-center mb-10 max-w-3xl mx-auto">
        {project.description}
      </p>

      <ProjectSwiper images={project.images} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Frontend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {project.frontend.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-xl"
            >
              <Image src={tech.icon} alt={tech.label} width={28} height={28} />
              <p className="mt-2 text-sm">{tech.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {project.backend.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-xl"
            >
              <Image src={tech.icon} alt={tech.label} width={28} height={28} />
              <p className="mt-2 text-sm">{tech.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Button */}
      <div className="flex justify-center mt-12">
        <Link
          href={`/projectDetails/${nextProjectId}`}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          Next Project
        </Link>
      </div>
    </div>
  );
}
