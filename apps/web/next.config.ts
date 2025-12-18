import { config, withAnalyzer } from "@repo/next-config";
import { withLogging } from "@repo/observability/next-config";
import { config as dotenvConfig } from "dotenv";
import type { NextConfig } from "next";
import { resolve } from "node:path";

// Load environment variables from the monorepo root .env.local file
dotenvConfig({ path: resolve(process.cwd(), "../..", ".env.local") });

let nextConfig: NextConfig = withLogging({
  ...config,
  // Explicitly expose NEXT_PUBLIC_* env vars to client bundle
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});

if (process.env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
