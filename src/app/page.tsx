import * as stylex from "@stylexjs/stylex";
import { styles } from "./home.stylex";
import { projects } from "@/lib/projects";
import { arrowUpRightIcon } from "@/components/arrow-up-right";
import { TiltCard } from "@/components/tilt-card";
import { HeroAurora } from "@/components/hero-aurora";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const copyrightYear = new Date().getFullYear();

export default function Home() {
  return (
    <div {...stylex.props(styles.root)}>
      <HeroAurora />
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
                        {arrowUpRightIcon}
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
          <p>© {copyrightYear}</p>
        </footer>
      </div>
    </div>
  );
}
