"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  MessageSquare,
  Monitor,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  blogPosts,
  certificates,
  education,
  navItems,
  profile,
  projects,
  skills,
  stats,
  type Project,
} from "@/data/portfolio";

const pageEase = [0.16, 1, 0.3, 1] as const;

type BrandIconProps = { size?: number; className?: string };

function GithubBrand({ size = 17, className = "" }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M12 .6a11.4 11.4 0 0 0-3.6 22.22c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.54-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.3-.51-1.44.11-3 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.13-1.17 3.13-1.17.62 1.56.23 2.7.11 3 .73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.22 5.63.41.36.77 1.08.77 2.18v3.23c0 .3.2.66.79.55A11.4 11.4 0 0 0 12 .6Z" />
    </svg>
  );
}

function LinkedinBrand({ size = 17, className = "" }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M5.1 3.3A2.1 2.1 0 1 1 5.1 7.5a2.1 2.1 0 0 1 0-4.2ZM3.3 8.9h3.6v11.6H3.3V8.9Zm5.8 0h3.45v1.58h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.39h-3.6v-5.67c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.17 1.47-2.17 2.98v5.77H9.1V8.9Z" />
    </svg>
  );
}

function InstagramBrand({ size = 17, className = "" }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.45" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: pageEase }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-violet-300 uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">{text}</p> : null}
    </div>
  );
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto h-[360px] w-[300px] sm:h-[430px] sm:w-[360px]">
      <div className="absolute inset-4 rounded-[40px] bg-[radial-gradient(circle_at_45%_30%,rgba(139,92,246,0.45),transparent_58%)] blur-2xl" />
      <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-slate-950/60 shadow-2xl shadow-violet-950/30 backdrop-blur-xl" />
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-3xl border border-violet-300/20 bg-violet-400/10 backdrop-blur-md" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 backdrop-blur-md" />

      <div className="absolute inset-3 overflow-hidden rounded-[30px]">
        {!failed && profile.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="h-full w-full object-cover object-center"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(167,139,250,0.35),transparent_35%),linear-gradient(145deg,#11162c,#080b18)]">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-white/5 text-4xl font-bold text-violet-200">YN</div>
              <p className="text-xs font-semibold tracking-[0.3em] text-violet-200 uppercase">Add your photo</p>
              <p className="mt-2 text-sm text-slate-400">Replace profile-placeholder.svg</p>
            </div>
          </div>
        )}
      </div>

      <motion.div
        className="absolute -left-8 top-1/2 hidden w-52 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0b1020]/90 p-4 shadow-xl backdrop-blur-xl sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center justify-between text-[10px] text-slate-500">
          <span>profile.ts</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <pre className="overflow-hidden text-[10px] leading-5 text-slate-300">{`const developer = {
  role: "IT Student",
  focus: "Full-Stack",
  stack: ["Next", "C#", ".NET"],
};`}</pre>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  const changeRole = () => {
    setRoleIndex((current) => (current + 1) % profile.rotatingRoles.length);
  };

  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/12 blur-3xl" />
        <div className="absolute right-[-160px] top-[25%] h-[460px] w-[460px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[460px] w-[460px] rounded-full bg-fuchsia-500/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#060914]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
              <Code2 size={20} />
            </span>
            <div>
              <span className="block text-sm font-semibold tracking-[0.12em] text-white">{profile.name}</span>
              <span className="block text-[10px] tracking-[0.22em] text-slate-500 uppercase">Portfolio</span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-medium text-slate-400 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-violet-400 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-violet-300">
              Hire Me <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 lg:hidden"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/5 bg-[#080c18] px-5 py-5 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-400 px-4 py-3 text-sm font-semibold text-slate-950">
                  Hire Me <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section id="home" className="relative scroll-mt-24 overflow-hidden">
        <div className="grid-bg mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-400/5 px-4 py-2 text-[10px] font-semibold tracking-[0.24em] text-violet-200 uppercase">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  {profile.eyebrow}
                </div>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.
                  <br />
                  I build things for the web.
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{profile.heroBio}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.025] px-3 py-2">
                    <Monitor size={14} className="text-violet-300" />
                    Currently focused on
                  </span>
                  <button type="button" onClick={changeRole} className="group inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/8 px-3 py-2 text-violet-100 transition hover:border-violet-300/40">
                    {profile.rotatingRoles[roleIndex]}
                    <Sparkles size={13} className="transition group-hover:rotate-12" />
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-violet-300">
                    View My Work <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href={profile.cvUrl} className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.025] px-5 py-3 text-xs font-semibold text-white transition hover:border-violet-300/30 hover:bg-white/5">
                    Download CV <Download size={15} />
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5 text-xs text-slate-500">
                  {[
                    ["HTML", "#ef652a"],
                    ["CSS", "#48b6ff"],
                    ["JS", "#f1d14f"],
                    ["TS", "#4f8cff"],
                    ["React", "#67e8f9"],
                    ["Next", "#f8fafc"],
                    ["C#", "#b99cff"],
                  ].map(([label, color]) => (
                    <span key={label} className="tech-badge">
                      <span className="tech-dot" style={{ background: color }} /> {label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">
                <ProfilePhoto />
                <motion.div
                  className="absolute right-0 top-5 hidden rounded-2xl border border-white/10 bg-[#0b1020]/85 p-4 backdrop-blur-xl sm:block"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-100"><Zap size={14} className="text-violet-300" /> Available for opportunities</div>
                  <p className="mt-1 text-[11px] text-slate-500">Internships · Junior roles · Projects</p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-violet-300 uppercase">About Me</p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">I&apos;m passionate about turning ideas into practical digital solutions.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">{profile.shortBio} I enjoy understanding how systems work, turning requirements into interfaces and databases, and continuously improving the quality of the code I write.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-white transition hover:border-violet-300/30">
                  Let&apos;s Connect <ArrowUpRight size={15} />
                </a>
                <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-4 py-3 text-xs font-semibold text-emerald-200">
                  <CheckCircle2 size={15} /> {profile.available ? "Open to opportunities" : "Not currently available"}
                </span>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.05}>
                  <motion.div whileHover={{ y: -4 }} className="group rounded-2xl border border-white/7 bg-[#0a0f1d] p-5 transition hover:border-violet-300/20">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                        {[BriefcaseBusiness, Code2, Sparkles, CheckCircle2][index] ? (() => {
                          const Icon = [BriefcaseBusiness, Code2, Sparkles, CheckCircle2][index];
                          return <Icon size={18} />;
                        })() : <Code2 size={18} />}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] text-slate-600 uppercase">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><SectionHeading eyebrow="My Skills" title="Technologies I&apos;m building with" text="All skill data lives in one editable file, so you can update levels, add tools, or remove technologies without touching the layout." /></Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items], groupIndex) => (
              <Reveal key={group} delay={groupIndex * 0.08}>
                <div className="h-full rounded-3xl border border-white/7 bg-[#0a0f1d] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/10 bg-violet-400/8 text-violet-200">
                        {group === "Database" ? <Database size={18} /> : group === "Backend" ? <Terminal size={18} /> : <Monitor size={18} />}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{group}</p>
                        <p className="text-[11px] text-slate-500">Core toolkit</p>
                      </div>
                    </div>
                    <Sparkles size={15} className="text-slate-600" />
                  </div>
                  <div className="space-y-5">
                    {items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-4 text-xs">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="font-semibold text-violet-200">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.08, ease: pageEase }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><SectionHeading eyebrow="Featured Projects" title="Some of my recent work" text="Click any project to open the full case-study view. Add or remove projects from data/portfolio.ts whenever you need." /></Reveal>

          <Reveal>
            <div className="mb-7 flex flex-wrap justify-center gap-2">
              {filters.map((item) => (
                <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${filter === item ? "bg-violet-400 text-slate-950" : "border border-white/8 bg-white/[0.02] text-slate-400 hover:border-violet-300/20 hover:text-white"}`}>
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: pageEase, delay: index * 0.03 }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setSelectedProject(project);
                  }}
                  role="button"
                  tabIndex={0}
                  className="group h-full cursor-pointer text-left outline-none"
                >
                  <article className="h-full overflow-hidden rounded-3xl border border-white/8 bg-[#0a0f1d] transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-300/25 group-hover:shadow-2xl group-hover:shadow-violet-950/20 group-focus-visible:border-violet-300/40">
                    <div className="project-visual relative flex h-52 items-end overflow-hidden p-5">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: project.image ? `url(${project.image})` : undefined }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(139,92,246,0.35),transparent_28%),linear-gradient(135deg,rgba(17,23,43,0.94),rgba(9,12,23,0.96))]" />
                      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200"><ExternalLink size={16} /></div>
                      <div className="relative w-full">
                        <div className="mb-3 flex items-center justify-between text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                          <span>{project.category}</span>
                          <span>{project.year}</span>
                        </div>
                        <div className="code-lines rounded-xl border border-white/8 bg-black/15 p-3 font-mono text-[9px] leading-4 text-slate-300/80 backdrop-blur-sm">
                          <div>01 <span className="text-violet-300">const</span> project = <span className="text-cyan-300">&quot;{project.title}&quot;</span>;</div>
                          <div>02 <span className="text-violet-300">stack</span>: [{project.technologies.slice(0, 2).join(", ")}]</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-500">{project.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 2).map((technology) => <span key={technology} className="rounded-md border border-white/7 bg-white/[0.02] px-2 py-1 text-[9px] text-slate-400">{technology}</span>)}
                        </div>
                        <ChevronRight size={15} className="text-violet-300 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="education" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><SectionHeading eyebrow="Education" title="My learning journey" text="Keep your academic timeline here, then add internships, bootcamps, or self-learning milestones as your experience grows." /></Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-violet-400/50 via-white/10 to-transparent" />
              <div className="space-y-6">
                {education.map((item, index) => (
                  <Reveal key={`${item.year}-${item.title}`} delay={index * 0.08}>
                    <div className="relative pl-14">
                      <div className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/20 bg-[#0a0f1d] text-violet-200 shadow-lg shadow-violet-950/20">
                        <GraduationCap size={16} />
                      </div>
                      <div className="rounded-3xl border border-white/7 bg-[#0a0f1d] p-6 transition hover:border-violet-300/20">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-300 uppercase">{item.year}</p>
                            <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                            <p className="mt-1 text-xs text-slate-500">{item.place}</p>
                          </div>
                          <CalendarDays size={18} className="text-slate-600" />
                        </div>
                        <p className="mt-5 text-sm leading-7 text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><SectionHeading eyebrow="Certificates" title="Proof of continuous learning" text="Replace these placeholders with your real certificates and optional verification links." /></Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {certificates.map((certificate, index) => (
              <Reveal key={`${certificate.title}-${index}`} delay={index * 0.06}>
                <div className="group rounded-3xl border border-white/7 bg-[#0a0f1d] p-6 transition hover:-translate-y-1 hover:border-violet-300/20">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/10 bg-violet-400/8 text-violet-200"><Sparkles size={18} /></span>
                    <span className="text-[10px] text-slate-600">{certificate.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{certificate.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{certificate.issuer}</p>
                  {certificate.link ? <a href={certificate.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-violet-300 hover:text-violet-200">Verify <ExternalLink size={14} /></a> : <span className="mt-5 inline-flex items-center gap-2 text-xs text-slate-600">Add verification link <ArrowUpRight size={13} /></span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><SectionHeading eyebrow="Blog / Notes" title="Things I&apos;m learning and building" text="A lightweight space for your technical notes, project reflections, tutorials, or university learnings." /></Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-white/7 bg-[#0a0f1d] p-6 transition hover:-translate-y-1 hover:border-violet-300/20">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-violet-300/10 bg-violet-400/5 px-3 py-1.5 text-[9px] font-semibold tracking-[0.2em] text-violet-200">{post.tag}</span>
                    <span className="text-[10px] text-slate-600">{post.date}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{post.excerpt}</p>
                  <button type="button" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition group-hover:text-violet-200">Read note <ArrowUpRight size={14} /></button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/7 bg-[#0a0f1d] p-7">
                <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-violet-300 uppercase">Let&apos;s Work Together</p>
                <h2 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a project, internship, or opportunity in mind?</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">Send me a message and your email app will open with the form filled in. Replace the contact details in <span className="font-mono text-violet-200">data/portfolio.ts</span>.</p>

                <div className="mt-8 space-y-4 text-sm">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-300 transition hover:text-white"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/8 text-violet-200"><Mail size={17} /></span>{profile.email}</a>
                  <div className="flex items-center gap-3 text-slate-400"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300"><BriefcaseBusiness size={17} /></span>{profile.location}</div>
                  <div className="flex items-center gap-3 text-slate-400"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300"><MessageSquare size={17} /></span>{profile.phone}</div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 text-slate-300 transition hover:border-violet-300/20 hover:text-white"><GithubBrand size={17} /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 text-slate-300 transition hover:border-violet-300/20 hover:text-white"><LinkedinBrand size={17} /></a>
                  <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 text-slate-300 transition hover:border-violet-300/20 hover:text-white"><InstagramBrand size={17} /></a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={submitContact} className="rounded-3xl border border-white/7 bg-[#0a0f1d] p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-slate-300">Your name</span>
                    <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="John Doe" className="w-full rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-300/35" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-slate-300">Your email</span>
                    <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="john@example.com" className="w-full rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-300/35" />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-semibold text-slate-300">Message</span>
                  <textarea required rows={7} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me about the project or opportunity..." className="w-full resize-none rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-700 focus:border-violet-300/35" />
                </label>
                <button type="submit" className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-violet-300">
                  Send Message <Send size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & TypeScript.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-slate-500 transition hover:text-white">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: pageEase }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#0a0f1d] shadow-2xl shadow-black/50"
            >
              <div className="project-visual relative flex min-h-[230px] items-end p-7 sm:min-h-[280px]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: selectedProject.image ? `url(${selectedProject.image})` : undefined }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.42),transparent_34%),linear-gradient(135deg,rgba(17,23,43,0.94),rgba(9,12,23,0.96))]" />
                <button type="button" aria-label="Close project" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-slate-200 backdrop-blur-xl transition hover:bg-white/10"><X size={18} /></button>
                <div className="relative">
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-violet-200 uppercase">{selectedProject.category} · {selectedProject.year}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm leading-7 text-slate-400">{selectedProject.fullDescription}</p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2 text-xs text-slate-300">{technology}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">Features</p>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature) => <div key={feature} className="flex items-start gap-2 text-xs text-slate-400"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-violet-300" />{feature}</div>)}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.github ? <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-semibold text-white transition hover:border-violet-300/25"><GithubBrand size={15} /> GitHub <ExternalLink size={13} /></a> : null}
                  {selectedProject.demo ? <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-violet-400 px-4 py-3 text-xs font-semibold text-slate-950 transition hover:bg-violet-300">Live Demo <ExternalLink size={13} /></a> : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
