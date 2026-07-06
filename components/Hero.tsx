"use client";

import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-16">
      {/* Soft gradient glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-400/20 via-sky-400/20 to-indigo-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>

          <p className="mt-3 font-display text-xl font-medium text-slate-600 dark:text-slate-300">
            {t.hero.role}
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-500"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="/cv-yasser-melki.pdf"
              download
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {t.hero.ctaCv}
            </a>
          </div>

          <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t.hero.location}
          </p>
        </div>

        {/* Decorative code card */}
        <div className="hidden select-none md:block" aria-hidden>
          <div className="rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-slate-400">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <code>{`const yasser = {
  role: "Full-Stack Developer",
  stack: ["React", "Node.js",
          "TypeScript", "Express"],
  location: "Gelsenkirchen, DE",
  languages: ["en", "fr", "de*"],
  openToWork: true,
};

// *learning German 🇩🇪`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
