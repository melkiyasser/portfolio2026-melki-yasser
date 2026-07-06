"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

type Status = "idle" | "sending" | "success" | "error" | "tooMany";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"), // honeypot, stays empty for humans
        }),
      });

      if (response.status === 429) {
        setStatus("tooMany");
        return;
      }
      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500";

  return (
    <section id="contact" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          {t.contact.title}
        </h2>
        <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
          {t.contact.subtitle}
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot: hidden from real users, bots fill it and get rejected */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  {t.contact.nameLabel}
                </label>
                <input id="name" name="name" required maxLength={100} className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  {t.contact.emailLabel}
                </label>
                <input id="email" name="email" type="email" required maxLength={200} className={inputClasses} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                {t.contact.messageLabel}
              </label>
              <textarea id="message" name="message" required rows={5} maxLength={5000} className={inputClasses} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-teal-600 dark:text-teal-400" role="status">
                {t.contact.success}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                {t.contact.error}
              </p>
            )}
            {status === "tooMany" && (
              <p className="text-sm font-medium text-amber-600 dark:text-amber-400" role="alert">
                {t.contact.tooMany}
              </p>
            )}
          </form>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t.contact.directTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:melkiyasser0@gmail.com"
                  className="font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  melkiyasser0@gmail.com
                </a>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                +49 178 5609747
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Gelsenkirchen, Germany
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
