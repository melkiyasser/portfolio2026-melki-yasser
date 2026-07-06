"use client";

import { useLanguage } from "@/lib/language-context";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          {t.experience.title}
        </h2>

        <ol className="mt-10 space-y-10 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
          {t.experience.jobs.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal-500 dark:border-slate-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {job.role}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-teal-600 dark:text-teal-400">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 30)} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 font-display text-xl font-bold tracking-tight">
          {t.experience.educationTitle}
        </h3>
        <div className="mt-4 space-y-3">
          {t.experience.education.map((entry) => (
            <div
              key={entry.degree}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <p className="font-medium">{entry.degree}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {entry.school}
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {entry.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
