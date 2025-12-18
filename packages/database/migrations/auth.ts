import { type Kysely, sql } from "kysely";
import type { Database } from "../schema";

export async function up(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createTable("user")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("username", "text")
    .addColumn("email", "text", (col) => col.notNull())
    .addColumn("email_verified", "boolean", (col) => col.notNull())
    .addColumn("image", "text")
    .addColumn("role", "text")
    .addColumn("company_id", "text")
    .addColumn("communications", "boolean")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute();

  await db.schema
    .createTable("session")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "text", (col) =>
      col.references("user.id").onDelete("cascade").notNull()
    )
    .addColumn("token", "text", (col) => col.notNull())
    .addColumn("expires_at", "timestamp", (col) => col.notNull())
    .addColumn("ip_address", "text")
    .addColumn("user_agent", "text")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute();

  await db.schema
    .createTable("account")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "text", (col) =>
      col.references("user.id").onDelete("cascade").notNull()
    )
    .addColumn("account_id", "text", (col) => col.notNull())
    .addColumn("provider_id", "text", (col) => col.notNull())
    .addColumn("access_token", "text")
    .addColumn("refresh_token", "text")
    .addColumn("access_token_expires_at", "timestamp")
    .addColumn("refresh_token_expires_at", "timestamp")
    .addColumn("scope", "text")
    .addColumn("id_token", "text")
    .addColumn("password", "text")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute();

  await db.schema
    .createTable("verification")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("identifier", "text", (col) => col.notNull())
    .addColumn("value", "text", (col) => col.notNull())
    .addColumn("expires_at", "timestamp", (col) => col.notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .addColumn("updated_at", "timestamp", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute();
}

export async function down(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable("verification").ifExists().execute();
  await db.schema.dropTable("account").ifExists().execute();
  await db.schema.dropTable("session").ifExists().execute();
  await db.schema.dropTable("user").ifExists().execute();
}
