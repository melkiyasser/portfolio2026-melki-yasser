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
              {(project.link || project.download) && (
                <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-3 dark:border-slate-800">
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:underline dark:text-teal-400"
                    >
                      {project.link.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                  {project.download && (
                    <a
                      href={project.download.url}
                      download
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:underline dark:text-teal-400"
                    >
                      {project.download.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
