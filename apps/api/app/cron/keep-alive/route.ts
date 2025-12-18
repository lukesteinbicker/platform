export const GET = async () => {
  // Simple keep-alive that touches the database connection.
  // This will throw if the connection is unhealthy.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { database } = await import("@repo/database");
  await database.selectFrom("user").select("id").limit(1).execute();

  return new Response("OK", { status: 200 });
};
