#!/usr/bin/env tsx

// Env vars loaded by dotenv-cli from root
import { createDb } from "../index";
import { down, up } from "./auth";

async function runMigration() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const env = args[0];

  if (!env || (env !== "prod" && env !== "dev")) {
    console.error("Usage: tsx migrations/run.ts [dev|prod]");
    console.error("  dev  - Uses DATABASE_URL_DEV_ADMIN");
    console.error("  prod - Uses DATABASE_URL_PROD_ADMIN");
    process.exit(1);
  }

  // Get admin URL for migrations
  const adminUrl = env === "prod" 
    ? process.env.DATABASE_URL_PROD_ADMIN 
    : process.env.DATABASE_URL_DEV_ADMIN;

  if (!adminUrl) {
    console.error(`Error: DATABASE_URL_${env === "prod" ? "PROD" : "DEV"}_ADMIN is not set`);
    process.exit(1);
  }

  const isProd = env === "prod";
  console.log(`Running migration on ${isProd ? "production" : "dev"} database...`);

  // Create admin connection for migrations
  const db = createDb(adminUrl);

  try {
    // Run down first to clean up, then up to create fresh tables
    await down(db);
    console.log("✓ Dropped existing tables");
    
    await up(db);
    console.log("✓ Migration completed successfully");
  } catch (error) {
    console.error("✗ Migration failed:", error);
    throw error;
  } finally {
    await db.destroy();
  }
}

runMigration()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));

