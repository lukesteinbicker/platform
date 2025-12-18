import { config, withAnalyzer } from "@repo/next-config";
import { withLogging } from "@repo/observability/next-config";
import { config as dotenvConfig } from "dotenv";
import type { NextConfig } from "next";
import { resolve } from "node:path";

// Load environment variables from the monorepo root .env.local file
dotenvConfig({ path: resolve(process.cwd(), "../..", ".env.local") });

let nextConfig: NextConfig = withLogging(config);

if (process.env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
