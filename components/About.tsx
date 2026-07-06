"use client";

import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          {t.about.title}
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t.about.factsTitle}
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {t.about.facts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4">
                    <dt className="text-slate-500 dark:text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="text-right font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t.about.languagesTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {t.about.languages.map((language) => (
                  <li key={language.name} className="flex justify-between gap-4">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
