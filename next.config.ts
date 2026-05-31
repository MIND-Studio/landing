import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server (.next/standalone/server.js) for the prod
  // Docker image — see Dockerfile + .github/workflows/release.yml.
  output: "standalone",
  // The shared design system ships as ESM/TSX that Next must transpile.
  // (Unlike the dock, this app has no @mind-studio/core and no native module,
  // so there is no serverExternalPackages here.)
  transpilePackages: ["@mind-studio/ui"],
};

export default nextConfig;
