import { projects } from "@/lib/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Component to render description text with clickable links
function DescriptionWithLinks({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  // Simple URL regex to find URLs in text
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split text by URLs and create React elements
  const parts = text.split(urlRegex);

  return (
    <p className={className} style={style}>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-blue-400 transition-colors"
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen px-6 py-12 sm:px-10 flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,hsla(0,0%,100%,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_20%,hsla(210,90%,60%,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_90%_80%,hsla(280,90%,60%,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] -z-10 mx-auto h-[360px] w-[min(95vw,1100px)] rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(255,225,100,0.10),rgba(255,170,120,0.10),rgba(255,140,200,0.08),transparent_70%)]" />

      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Cool Stuff</h1>
        <p className="text-muted-foreground mt-2">
          made by {""}
          <a className="underline underline-offset-4" href="https://aadit.cc" target="_blank" rel="noreferrer">
            Aadit Agrawal
          </a>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm sm:text-base leading-relaxed text-white/75">
          A showcase of projects by Aadit Agrawal — from small tools to helpful apps — crafted to make day‑to‑day life simpler and more delightful.
        </p>
      </header>

      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const color = project.descriptionColorClass;
            const isHex = typeof color === "string" && color.startsWith("#");
            return (
              <Card
                key={project.id}
                className="flex h-full flex-col border-white/10 bg-black/20 backdrop-blur-md shadow-[8px_8px_24px_rgba(0,0,0,0.35),-8px_-8px_24px_rgba(255,255,255,0.03)] transition-transform hover:-translate-y-0.5 hover:shadow-[10px_10px_28px_rgba(0,0,0,0.4),-10px_-10px_28px_rgba(255,255,255,0.04)] overflow-hidden"
              >
                <CardHeader className="overflow-hidden">
                  <CardTitle className="flex items-start justify-between gap-4">
                    <span>{project.title}</span>
                  </CardTitle>
                  <DescriptionWithLinks
                    text={project.description}
                    className={`break-words overflow-wrap-anywhere ${isHex ? '' : color}`}
                    style={isHex ? { color, wordBreak: 'break-word', overflowWrap: 'anywhere' } : { overflowWrap: 'anywhere' }}
                  />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="border-white/15 bg-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto justify-between gap-3">
                  {project.showVisit !== false ? (
                    <Button variant="gradient" asChild>
                      <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        Visit <ExternalLink size={16} />
                      </a>
                    </Button>
                  ) : (
                    <div />
                  )}
                  {project.githubUrl ? (
                    <Button variant="outline" size="icon" asChild aria-label="GitHub">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
