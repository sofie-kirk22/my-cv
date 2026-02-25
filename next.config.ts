import type { NextConfig } from "next";

const repo = "my-cv";

const nextConfig: NextConfig = {
  output: "export",          // needed for GitHub Pages (static export)
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,       // important for static export + GH Pages
  },
};

export default nextConfig;
