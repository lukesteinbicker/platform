import { auth } from "@repo/auth/server";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

const title = "Platform";
const description = "My application.";

export const metadata: Metadata = {
  title,
  description,
};

const App = async () => {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  if (!session?.user) {
    notFound();
  }

  return (
      <></>
  );
};

export default App;
