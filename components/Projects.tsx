"use client";

import { useLanguage } from "@/lib/language-context";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          {t.projects.title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {t.projects.subtitle}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {t.projects.items.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                {project.context}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
