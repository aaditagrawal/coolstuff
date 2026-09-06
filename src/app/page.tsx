import * as stylex from "@stylexjs/stylex";
import { styles } from "./home.stylex";
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
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.title)} style={{ fontFamily: "var(--font-serif)" }}>
            Cool Stuff
          </h1>
          <p {...stylex.props(styles.intro)}>
            Projects by{" "}
            <a
              href="https://aadit.cc"
              target="_blank"
              rel="noreferrer"
              {...stylex.props(styles.author)}
            >
              Aadit Agrawal
            </a>
          </p>
        </header>

        <section {...stylex.props(styles.grid)}>
          {projects.map((project, index) => (
            <TiltCard
              key={project.id}
              id={project.id}
              defaultSelected={index === 0}
              {...stylex.props(styles.fullHeight)}
            >
              <article {...stylex.props(styles.article)}>
                <div {...stylex.props(styles.headingRow)}>
                  <h2 {...stylex.props(styles.cardTitle)}>{project.title}</h2>
                  <div {...stylex.props(styles.links)}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        {...stylex.props(styles.iconLink)}
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
                        {...stylex.props(styles.iconLink)}
                        aria-label="Visit project"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p {...stylex.props(styles.description)}>{project.description}</p>
              </article>
            </TiltCard>
          ))}
        </section>

        <footer {...stylex.props(styles.footer)}>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
