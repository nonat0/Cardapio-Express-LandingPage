import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (site is fully static) — generates ./out for Cloudflare Pages.
  output: "export",
};

export default nextConfig;
