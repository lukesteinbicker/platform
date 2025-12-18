// Only enforce server-only in Next.js context (not for migrations)
if (typeof process !== "undefined" && process.env.NEXT_RUNTIME) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("server-only");
}

import { neonConfig, Pool } from "@neondatabase/serverless";
import { Kysely, PostgresDialect } from "kysely";
import * as ws from "ws";
import type { Database } from "./schema";

// Environment variables are loaded by Turborepo's globalEnv config
// No need for manual dotenv loading in Next.js context

// Configure Neon to use WebSocket in Node.js environments
if (typeof window === "undefined") {
  neonConfig.webSocketConstructor = ws.WebSocket;
}

// Required for PlanetScale Postgres (SCRAM-SHA-256 authentication)
// Also safe to set for regular Neon connections
neonConfig.pipelineConnect = false;

// Required for PlanetScale Postgres proxy connections

neonConfig.wsProxy = (host, port) => `${host}/v2?address=${host}:${port}`;

declare global {
  // eslint-disable-next-line no-var
  var __db__: Kysely<Database> | undefined;
  // eslint-disable-next-line no-var
  var __dbPool__: Pool | undefined;
}

// Get database URL based on environment
const getDatabaseUrl = (env?: "dev" | "prod") => {
  if (env === "prod" || process.env.NODE_ENV === "production") {
    return process.env.DATABASE_URL_PROD;
  }
  return process.env.DATABASE_URL_DEV;
};

// Create or get cached pool instance
const getOrCreatePool = (url?: string) => {
  const connectionString = url || getDatabaseUrl();
  
  if (!connectionString) {
    throw new Error(`Database URL is not defined. Please set DATABASE_URL_${process.env.NODE_ENV === "production" ? "PROD" : "DEV"}`);
  }

  if (!global.__dbPool__) {
    global.__dbPool__ = new Pool({ connectionString });
  }

  return global.__dbPool__;
};

const createDb = (url?: string) => {
  const pool = getOrCreatePool(url);

  return new Kysely<Database>({
    dialect: new PostgresDialect({
      pool,
    }),
  });
};

export const database: Kysely<Database> = global.__db__ ?? createDb();

if (process.env.NODE_ENV !== "production") {
  global.__db__ = database;
}

// Export pool for BetterAuth (reuses the same pool as Kysely)
export const pool = getOrCreatePool();

export { createDb };
export * from "./schema";
