import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve static lesson pages: drop public/germanlessons/<name>/index.html
      {
        source: "/germanlessons/:lesson",
        destination: "/germanlessons/:lesson/index.html",
      },
    ];
  },
};

export default nextConfig;
