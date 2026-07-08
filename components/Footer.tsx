"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <a
          href="https://www.linkedin.com/in/melkiyasser0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
          </svg>
          LinkedIn
        </a>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
