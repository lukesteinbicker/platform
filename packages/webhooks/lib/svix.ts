import "server-only";
// Svix functionality has been removed for simplicity
// The package is kept for future use
// To re-enable:
// 1. Configure SVIX_TOKEN environment variable
// 2. Uncomment Svix imports and implementation below
// 3. Add @repo/auth as a dependency in package.json if using auth integration
// import { Svix } from "svix";
// import { auth } from "@repo/auth/server";
// import { headers } from "next/headers";

const svixToken = process.env.SVIX_TOKEN;

export const send = async (_eventType: string, _payload: object) => {
  // Stub implementation - Svix functionality removed
  // To enable: configure SVIX_TOKEN and uncomment Svix implementation
  if (!svixToken) {
    throw new Error("Svix functionality has been removed. Configure SVIX_TOKEN to enable.");
  }
  throw new Error("Svix implementation not restored. See packages/webhooks/lib/svix.ts");
};

export const getAppPortal = async () => {
  // Stub implementation - Svix functionality removed
  // To enable: configure SVIX_TOKEN and uncomment Svix implementation
  if (!svixToken) {
    throw new Error("Svix functionality has been removed. Configure SVIX_TOKEN to enable.");
  }
  throw new Error("Svix implementation not restored. See packages/webhooks/lib/svix.ts");
};
