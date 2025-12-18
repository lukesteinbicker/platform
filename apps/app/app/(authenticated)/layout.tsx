import { auth } from "@repo/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProperties) => {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-background">
      {children}
    </main>
  );
};

export default AppLayout;
