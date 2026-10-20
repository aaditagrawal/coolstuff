"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Terminal,
  Code2,
  Bot,
  FileJson,
  MapPin,
  GraduationCap,
  UtensilsCrossed,
  Server,
  type LucideIcon,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projects } from "@/lib/projects";

type CategoryKey = string;

interface CategoryMeta {
  [category: string]: { label: string; icon: LucideIcon };
}

const CATEGORY_META: CategoryMeta = {
  "Campus Directory": { label: "Campus", icon: MapPin },
  "Developer Tools": { label: "Dev Tools", icon: Code2 },
  "AI Tools": { label: "AI", icon: Bot },
  "Standard File Formats": { label: "Formats", icon: FileJson },
  "Campus Tools": { label: "Campus", icon: Terminal },
  "Academic Tools": { label: "Academic", icon: GraduationCap },
  "Campus Dining": { label: "Dining", icon: UtensilsCrossed },
  APIs: { label: "APIs", icon: Server },
};

const ALL = "All";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [filter, setFilter] = useState<CategoryKey>(ALL);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const categories = useMemo(() => {
    const seen = new Map<string, { label: string; icon: LucideIcon }>();
    for (const p of projects) {
      if (!seen.has(p.category)) {
        const meta = CATEGORY_META[p.category];
        seen.set(p.category, meta ?? { label: p.category, icon: Terminal });
      }
    }
    return seen;
  }, []);

  const filtered = useMemo(() => {
    if (filter === ALL) return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const [prevFilter, setPrevFilter] = useState(filter);
  if (prevFilter !== filter) {
    setPrevFilter(filter);
    setExpandedId(null);
    setFocusedIndex(0);
  }

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "j" || e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "k" || e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const p = filtered[focusedIndex];
        if (p && p.showVisit !== false) {
          window.open(p.url, "_blank", "noreferrer");
        }
      } else if (e.key === " " || e.key === "i") {
        e.preventDefault();
        const p = filtered[focusedIndex];
        if (p) setExpandedId((id) => (id === p.id ? null : p.id));
      } else if (e.key === "Escape") {
        setExpandedId(null);
      }
    },
    [filtered, focusedIndex],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const year = new Date().getFullYear();
  const heroRef = useReveal<HTMLDivElement>();
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="grain relative min-h-dvh w-full">
      {/* BACKGROUND TEXTURE */}
      <div className="bg-grid pointer-events-none fixed inset-0 opacity-40" />
      <div className="bg-glow pointer-events-none fixed inset-0" />

      <main className="relative mx-auto max-w-300 px-6 py-20 sm:py-28">
        {/* HERO */}
        <div ref={heroRef} className="reveal">
          <header className="mb-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 sm:items-end">
              <h1 className="t-hero text-phosphor sm:col-span-9">
                Cool
                <br />
                Stuff
              </h1>
              <div className="sm:col-span-3 sm:pb-4">
                <div className="mb-3 t-label text-faint">Curated by</div>
                <a
                  href="https://aadit.cc"
                  target="_blank"
                  rel="noreferrer"
                  className="t-body text-accent transition-colors hover:text-accent"
                >
                  Aadit Agrawal
                </a>
                <div className="mt-6 flex items-center gap-2 t-micro text-faint">
                  <span className="status-dot status-live" />
                  {projects.length} entries
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* FILTER ROW */}
        <section className="border-y border-line">
          <div className="flex flex-wrap items-center gap-2 py-4">
            <span className="mr-3 t-label text-faint">Filter</span>
            <FilterChip label={ALL} active={filter === ALL} onClick={() => setFilter(ALL)} />
            {Array.from(categories.entries()).map(([key, meta]) => (
              <FilterChip
                key={key}
                label={meta.label}
                icon={meta.icon}
                active={filter === key}
                onClick={() => setFilter(key)}
              />
            ))}
            <span className="ml-auto t-micro text-faint tabular-nums">
              {filtered.length.toString().padStart(2, "0")} /{" "}
              {projects.length.toString().padStart(2, "0")}
            </span>
          </div>
        </section>

        {/* FEATURED PROJECT — full width */}
        {featured && (
          <FeaturedCell
            project={featured}
            isExpanded={expandedId === featured.id}
            onToggle={() => setExpandedId((id) => (id === featured.id ? null : featured.id))}
          />
        )}

        {/* REST GRID — wide every 4th for rhythm */}
        <section className="grid grid-cols-1 sm:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCell
              key={p.id}
              project={p}
              index={i + 2}
              wide={(i + 1) % 4 === 0}
              isExpanded={expandedId === p.id}
              isFocused={focusedIndex === i + 1}
              onFocus={() => setFocusedIndex(i + 1)}
              onToggle={() => setExpandedId((id) => (id === p.id ? null : p.id))}
            />
          ))}
        </section>

        {/* KEYBOARD HINT */}
        <div className="mt-8 flex flex-wrap items-center gap-5 t-micro text-faint">
          <span className="flex items-center gap-1.5">
            <kbd className="border border-line-bright px-1.5 py-0.5 text-dim">J</kbd>
            <kbd className="border border-line-bright px-1.5 py-0.5 text-dim">K</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="border border-line-bright px-1.5 py-0.5 text-dim">I</kbd>
            expand
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="border border-line-bright px-1.5 py-0.5 text-dim">↵</kbd>
            open
          </span>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-line pt-8 t-label text-faint">
          <p>© {year} Aadit Agrawal</p>
        </footer>
      </main>
    </div>
  );
}

/* ---------- FILTER CHIP ---------- */
function FilterChip({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon?: LucideIcon;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 border px-2.5 py-1 t-label transition-colors duration-100 ${
        active
          ? "border-accent bg-accent text-substrate"
          : "border-line-bright text-dim hover:border-phosphor hover:text-phosphor"
      }`}
    >
      {Icon && <Icon size={11} strokeWidth={2} />}
      {label}
    </button>
  );
}

/* ---------- SPOTLIGHT TRACKER ---------- */
function useSpotlight() {
  return useCallback((e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}

/* ---------- CATEGORY BAR (shared) ---------- */
function CategoryBar({
  project,
  showStatus = true,
}: {
  project: (typeof projects)[number];
  showStatus?: boolean;
}) {
  const meta = CATEGORY_META[project.category] ?? {
    label: project.category,
    icon: Terminal,
  };
  const Icon = meta.icon;
  const isArchived = project.showVisit === false && !project.githubUrl;
  return (
    <div className="flex items-center gap-2 t-micro text-dim">
      <Icon size={12} strokeWidth={1.75} />
      <span>{meta.label}</span>
      {showStatus && (
        <>
          <span className="text-faint">·</span>
          <span className="flex items-center gap-1.5">
            <span className={`status-dot ${isArchived ? "status-archived" : "status-live"}`} />
            {isArchived ? "Archived" : "Live"}
          </span>
        </>
      )}
    </div>
  );
}

/* ---------- TAGS (shared) ---------- */
function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t} className="border border-line-bright px-2 py-0.5 t-micro text-dim">
          {t}
        </span>
      ))}
    </div>
  );
}

/* ---------- LINKS (shared) ---------- */
function ActionRow({
  project,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[number];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-t border-line pt-5">
      <div className="flex items-center gap-5 t-label">
        {project.showVisit !== false && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="link-arrow text-phosphor hover:text-accent"
          >
            Visit
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-arrow text-dim hover:text-phosphor"
          >
            Source
            <SiGithub size={13} />
          </a>
        )}
        {project.showVisit === false && !project.githubUrl && (
          <span className="text-faint">Archived</span>
        )}
      </div>
      <button
        onClick={onToggle}
        aria-label={isExpanded ? "Collapse" : "Expand"}
        className={`flex items-center justify-center border p-1.5 transition-colors ${
          isExpanded
            ? "border-accent text-accent"
            : "border-line-bright text-dim hover:border-phosphor hover:text-phosphor"
        }`}
      >
        {isExpanded ? <Minus size={13} strokeWidth={2} /> : <Plus size={13} strokeWidth={2} />}
      </button>
    </div>
  );
}

/* ---------- FEATURED CELL ---------- */
function FeaturedCell({
  project,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[number];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const revealRef = useReveal<HTMLDivElement>();
  const spotlight = useSpotlight();
  const idx = "01";

  return (
    <div ref={revealRef} className="reveal mb-px">
      <div
        onMouseMove={spotlight}
        className={`cell ${isExpanded ? "is-expanded" : ""} flex flex-col gap-8 p-8 sm:flex-row sm:items-stretch sm:p-10`}
      >
        {/* LEFT — giant index */}
        <div className="flex shrink-0 flex-col justify-between sm:w-40">
          <span className="t-index t-index-lg text-faint">{idx}</span>
          <CategoryBar project={project} />
        </div>

        {/* MIDDLE — content */}
        <div className="flex flex-1 flex-col">
          <h2 className={`t-title t-title-lg mb-4 text-phosphor`}>{project.title}</h2>
          <p
            className="desc-tint mb-6 t-body max-w-prose"
            /* SAFETY: CSSProperties has no index signature for CSS custom
               properties; --desc-tint is consumed by .desc-tint in globals.css. */
            style={
              project.descriptionColorClass
                ? ({
                    "--desc-tint": project.descriptionColorClass,
                  } as CSSProperties)
                : undefined
            }
          >
            {project.description}
          </p>

          {/* EXPAND */}
          <div className={`expand-panel ${isExpanded ? "is-open" : ""}`}>
            <div>
              <div className="mb-6">
                <div className="mb-2 t-micro text-faint">Tags</div>
                <TagList tags={project.tags} />
              </div>
              <div className="flex items-center gap-4 t-micro text-faint">
                <span>Category</span>
                <span className="text-dim">{project.category}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <ActionRow project={project} isExpanded={isExpanded} onToggle={onToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- STANDARD CELL ---------- */
interface ProjectCellProps {
  project: (typeof projects)[number];
  index: number;
  wide: boolean;
  isExpanded: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onToggle: () => void;
}

const ProjectCell = ({
  project,
  index,
  wide,
  isExpanded,
  isFocused,
  onFocus,
  onToggle,
}: ProjectCellProps) => {
  const revealRef = useReveal<HTMLDivElement>();
  const spotlight = useSpotlight();
  const idx = index.toString().padStart(2, "0");

  return (
    <div
      ref={revealRef}
      className={`reveal ${wide ? "sm:col-span-2" : ""}`}
      style={
        // SAFETY: CSSProperties has no index signature for CSS custom
        // properties; --reveal-delay is consumed by .reveal in globals.css.
        {
          "--reveal-delay": `${Math.min((index % 6) * 60, 300)}ms`,
        } as CSSProperties
      }
    >
      <div
        onMouseMove={spotlight}
        onMouseEnter={onFocus}
        className={`cell ${isExpanded ? "is-expanded" : ""} ${
          isFocused && !isExpanded ? "is-focused" : ""
        } flex h-full flex-col p-7`}
      >
        {/* TOP — index + category */}
        <div className="mb-6 flex items-start justify-between">
          <span className="t-index t-index-sm text-faint">{idx}</span>
          <CategoryBar project={project} />
        </div>

        {/* TITLE */}
        <h2 className="t-title t-title-sm mb-3 text-phosphor">{project.title}</h2>

        {/* DESCRIPTION */}
        <p
          className="desc-tint mb-5 t-body"
          /* SAFETY: CSSProperties has no index signature for CSS custom
             properties; --desc-tint is consumed by .desc-tint in globals.css. */
          style={
            project.descriptionColorClass
              ? ({
                  "--desc-tint": project.descriptionColorClass,
                } as CSSProperties)
              : undefined
          }
        >
          {project.description}
        </p>

        {/* ALWAYS-VISIBLE TAGS (compact) */}
        <div className="mb-5">
          <TagList tags={project.tags} />
        </div>

        {/* EXPAND — extra meta */}
        <div className={`expand-panel ${isExpanded ? "is-open" : ""}`}>
          <div>
            <div className="flex items-center gap-4 pb-5 t-micro text-faint">
              <span>Full category</span>
              <span className="text-dim">{project.category}</span>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-auto">
          <ActionRow project={project} isExpanded={isExpanded} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
};
