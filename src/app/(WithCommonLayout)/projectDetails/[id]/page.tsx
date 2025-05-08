import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";
import { FaGithub } from "react-icons/fa";

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
    <div className="bg-white/5 border-white/10 backdrop-blur-lg min-h-screen text-white p-7 max-w-7xl mx-auto">
      <div className="my-24">
        <h1 className="text-3xl font-bold text-center mb-4">{project.title}</h1>
        <p className="text-center mb-10 max-w-3xl mx-auto">
          {project.description}
        </p>

        <ProjectSwiper images={project.images} />

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Left: Frontend & Backend Sections */}
          <div className="flex-1 bg-white/5 border-white/10 backdrop-blur-lg p-3">
            <p className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
              Used Technologies
            </p>
            <section className="mt-10">
              <h2 className="text-base text-gray-300 font-semibold text-center mb-4">
                Frontend
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
                {project.frontend.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.label}
                      width={28}
                      height={28}
                    />
                    <p className="mt-2 text-sm">{tech.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="text-base text-gray-300 font-semibold text-center mb-4">
                Backend
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
                {project.backend.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.label}
                      width={28}
                      height={28}
                    />
                    <p className="mt-2 text-sm">{tech.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Card with Next Button + GitHub Links */}
          <div className="w-full lg:w-[300px] bg-gray-600/15 shadow-lg p-6 flex flex-col items-center justify-start">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center w-full gap-4">
              <h1 className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
                GitHub Links
              </h1>
              <a
                href={project.githubFrontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition hover:bg-gray-700 hover:scale-105 active:scale-95"
              >
                Client <FaGithub />
              </a>
              <a
                href={project.githubBackendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition hover:bg-gray-700 hover:scale-105 active:scale-95"
              >
                Server <FaGithub />
              </a>

              <div className="bg-white/5 border-white/10 backdrop-blur-lg p-3">
                <div>
                  <h2 className="leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-left text-base">
                    Project Type
                  </h2>
                  <p className="text-gray-300">Full Stack Web Application</p>
                </div>
                <div className="my-5">
                  <h2 className="leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-left text-base">
                    Finish date
                  </h2>
                  <p className="text-gray-300">May 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border-white/10 backdrop-blur-lg p-3 my-5 lg:flex">
          <div className="flex-1">
            <h1>project core features</h1>
          </div>
          <div className="flex-1">
            <h1>Future page regarding</h1>
          </div>
          <div className="flex-1">
            <h1>Major challenges</h1>
          </div>
        </div>

        <div className="text-center my-20">
          <Link
            href={`/projectDetails/${nextProjectId}`}
            className="mb-6 w-full text-center px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition font-medium"
          >
            Next Project
          </Link>
        </div>
      </div>
    </div>
  );
}
