import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Database, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'XSS Hunter Pro',
    icon: Shield,
    tags: ['Security', 'Scanning', 'Automation'],
    description:
      'An advanced cross-site scripting reconnaissance tool featuring payload rotation, context-aware encoding, DOM sink detection, and webhook-based reporting.',
    links: [
      { label: 'Demo', href: '#', primary: true },
      { label: 'Repo', href: 'https://github.com/candyx3', primary: false },
    ],
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    title: 'SQL Injector',
    icon: Database,
    tags: ['Security', 'SQLi', 'CLI/UI'],
    description:
      'A streamlined SQL injection assistant with fingerprinting, blind/boolean-based strategies, payload inference, and safe proof-of-concept builders.',
    links: [
      { label: 'Demo', href: '#', primary: true },
      { label: 'Repo', href: 'https://github.com/candyx3', primary: false },
    ],
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'Portfolio v3 (Interactive)',
    icon: Code2,
    tags: ['3D', 'Spline', 'Vite'],
    description:
      'An interactive portfolio powered by React, Framer Motion, and Spline 3D — focused on delightful interaction and performance.',
    links: [
      { label: 'Live', href: 'https://candyx3.github.io/portfolio/', primary: true },
      { label: 'Repo', href: 'https://github.com/candyx3', primary: false },
    ],
    accent: 'from-indigo-500 via-sky-500 to-cyan-400',
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
    >
      <div className={`absolute -inset-1 opacity-20 blur-2xl bg-gradient-to-r ${project.accent} pointer-events-none`} />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className={`h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br ${project.accent} grid place-items-center shadow-lg shadow-black/30`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
            <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-white/70">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/80 leading-relaxed">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`${
                link.primary
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'border border-white/15 hover:bg-white/10'
              } inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm transition`}
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(129,140,248,0.15),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              A selection of security tools and interactive builds with a focus on clarity, speed, and a delightful developer experience.
            </p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
