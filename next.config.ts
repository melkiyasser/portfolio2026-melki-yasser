import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short alias for the lessons hub
      { source: "/lessons", destination: "/germanlessons", permanent: false },
    ];
  },
  async rewrites() {
    return [
      // Hub page: public/germanlessons/index.html
      { source: "/germanlessons", destination: "/germanlessons/index.html" },
      // Lesson pages: drop public/germanlessons/<name>/index.html
      {
        source: "/germanlessons/:lesson",
        destination: "/germanlessons/:lesson/index.html",
      },
    ];
  },
};

export default nextConfig;
