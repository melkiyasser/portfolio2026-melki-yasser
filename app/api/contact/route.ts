import { NextResponse } from "next/server";

// Receives contact form submissions and forwards them by email via Resend.
// Setup: create a free account at https://resend.com and set RESEND_API_KEY
// in .env.local (and in your Vercel project settings for production).
//
// Abuse protection, in the order requests are checked:
//   1. Same-origin check — blocks other websites posting to this endpoint
//   2. Per-IP rate limit — max 3 messages per 10 minutes
//   3. Payload size cap — rejects bodies over 10 KB before parsing
//   4. Honeypot field — hidden "company" input that only bots fill in
//   5. Field validation + sanitization

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "melkiyasser0@gmail.com";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const MAX_BODY_BYTES = 10_000;

// In-memory store: fine for a portfolio. Each serverless instance keeps its
// own counters, so the limit is approximate — swap for Upstash Redis if you
// ever need a strict global limit.
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Prevent unbounded memory growth under a flood of unique IPs
  if (submissionsByIp.size > 10_000) {
    for (const [key, times] of submissionsByIp) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        submissionsByIp.delete(key);
      }
    }
  }

  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

// Collapse whitespace and strip line breaks so user input can never inject
// extra email headers or forge multi-line "From:" lines in the subject
function sanitizeLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  // 1. Same-origin check
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // 2. Rate limit (Vercel sets x-forwarded-for to the client IP)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages, please try again later" },
      { status: 429 }
    );
  }

  // 3. Payload size cap, then parse
  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }
  let body: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // 4. Honeypot: real users never see this field, bots auto-fill it.
  // Answer with a fake success so the bot doesn't learn it was caught.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // 5. Validation + sanitization
  const name = typeof body.name === "string" ? sanitizeLine(body.name) : "";
  const email = typeof body.email === "string" ? sanitizeLine(body.email) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Without an API key the form can still be tested locally
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission (RESEND_API_KEY not set):", {
        name,
        email,
        message,
      });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend API error:", await response.text());
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
