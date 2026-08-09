import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-.1.56-.2.88-.3a5 5 0 0 0-2.2-4.15A13 13 0 0 0 12 2a13 13 0 0 0-8.7 3.2 5 5 0 0 0-2.2 4.15c.32.1.6.2.88.3a5 5 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <header className="mb-16">
          <h1
            className="text-5xl sm:text-6xl tracking-tight text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Cool Stuff
          </h1>
          <p className="mt-6 text-neutral-500">
            Projects by{" "}
            <a
              href="https://aadit.cc"
              target="_blank"
              rel="noreferrer"
              className="text-[#FF4D00] hover:text-[#ff6a2a]"
            >
              Aadit Agrawal
            </a>
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {projects.map((project, index) => (
            <TiltCard
              key={project.id}
              id={project.id}
              defaultSelected={index === 0}
              className="h-full"
            >
              <article className="relative h-full rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition-all duration-200 hover:border-[#FF4D00]/50 hover:bg-neutral-900/50 active:border-[#FF4D00] active:bg-neutral-900">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-white text-sm font-medium">{project.title}</h2>
                  <div className="flex items-center gap-1 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 -m-1 text-neutral-500 hover:text-[#FF4D00] active:text-[#FF4D00] transition-colors rounded-lg hover:bg-neutral-800 active:bg-neutral-800"
                        aria-label="View on GitHub"
                      >
                        <GitHubIcon size={18} />
                      </a>
                    )}
                    {project.showVisit !== false && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 -m-1 text-neutral-500 hover:text-[#FF4D00] active:text-[#FF4D00] transition-colors rounded-lg hover:bg-neutral-800 active:bg-neutral-800"
                        aria-label="Visit project"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed">{project.description}</p>
              </article>
            </TiltCard>
          ))}
        </section>

        <footer className="mt-24 pt-8 border-t border-neutral-900 text-neutral-600 text-xs">
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
