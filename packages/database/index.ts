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

// Lazy initialization to avoid errors when importing in migration scripts
// Check if we're running migrations (migration scripts use createDb directly)
const isMigrationScript = typeof process !== "undefined" && 
  process.argv.some((arg) => arg.includes("migrations/run.ts"));

// Only initialize database/pool if we have the required URL and aren't in a migration script
// Migration scripts use createDb() directly with admin URLs
const shouldInitialize = !isMigrationScript && getDatabaseUrl();

let _database: Kysely<Database> | undefined;
export const database: Kysely<Database> = shouldInitialize
  ? (global.__db__ ?? createDb())
  : (new Proxy({} as Kysely<Database>, {
      get(_target, prop) {
        if (!_database) {
          _database = global.__db__ ?? createDb();
          if (process.env.NODE_ENV !== "production") {
            global.__db__ = _database;
          }
        }
        return (_database as any)[prop];
      },
    }) as Kysely<Database>);

if (shouldInitialize && process.env.NODE_ENV !== "production") {
  global.__db__ = database as Kysely<Database>;
}

// Export pool for BetterAuth (reuses the same pool as Kysely)
// Lazy initialization to avoid errors when importing in migration scripts
let _pool: Pool | undefined;
export const pool: Pool = shouldInitialize
  ? getOrCreatePool()
  : (new Proxy({} as Pool, {
      get(_target, prop) {
        if (!_pool) {
          _pool = getOrCreatePool();
        }
        return (_pool as any)[prop];
      },
    }) as Pool);

export { createDb };
export * from "./schema";
