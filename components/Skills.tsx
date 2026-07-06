"use client";

import { useLanguage } from "@/lib/language-context";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          {t.skills.title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {t.skills.subtitle}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div
              key={group.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-display font-semibold text-teal-600 dark:text-teal-400">
                {group.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
