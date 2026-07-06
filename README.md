# Portfolio — Yasser Melki

Personal portfolio website: [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) + TypeScript.

**Features**

- 🇬🇧/🇩🇪 English ↔ German language switch (custom lightweight i18n, no library)
- 🌙 Dark / light mode with system-preference detection
- ✉️ Working contact form backed by a Next.js API route (`app/api/contact`)
- 📄 Downloadable CV
- Responsive, accessible, no client-side framework beyond React

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact form sends email through [Resend](https://resend.com) (free tier).

1. Create a Resend account and an API key.
2. Copy `.env.example` to `.env.local` and set:

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=melkiyasser0@gmail.com
```

Without a key the form still works in development (submissions are logged to the terminal).

### Abuse protection

The endpoint defends itself in layers (see `app/api/contact/route.ts`):

- **Same-origin check** — other websites can't post to the endpoint
- **Rate limiting** — max 3 messages per IP per 10 minutes (in-memory; approximate across serverless instances, which is fine for a portfolio — use Upstash Redis for a strict global limit)
- **Payload size cap** — bodies over 10 KB are rejected before parsing
- **Honeypot field** — a hidden input that only bots fill in; they get a fake success
- **Validation & sanitization** — length limits on every field, email format check, and line breaks stripped from values used in the email subject

Volumetric DDoS protection is handled by the hosting platform (Vercel), not application code.

## CV file

Place your CV PDF at `public/cv-yasser-melki.pdf` — the "Download CV" button links to it.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — no configuration needed.
3. Add `RESEND_API_KEY` (and optionally `CONTACT_EMAIL`) under **Project → Settings → Environment Variables**.

## Project structure

```
app/
  layout.tsx          # fonts, metadata, theme bootstrap
  page.tsx            # assembles all sections
  globals.css         # Tailwind + small global styles
  api/contact/        # contact form endpoint
components/           # one file per section + header/footer/toggles
lib/
  translations.ts     # ALL site text (English + German) — edit copy here
  language-context.tsx# language state + persistence
public/               # static files (CV pdf)
```
