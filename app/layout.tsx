import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yasser-melki.vercel.app";
const title = "Yasser Melki — Full-Stack Developer";
const description =
  "Full-stack developer (React & Node.js) based in Gelsenkirchen, Germany. Open to junior full-stack and frontend roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Applies the saved theme before first paint to avoid a flash of the wrong theme
const themeInitScript = `
  try {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (!theme && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
