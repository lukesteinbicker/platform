import { auth } from "@repo/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

type DashboardLayoutProperties = {
  readonly children: ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProperties) => {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  if (!session?.user) {
    redirect("/sign-in");
  }

  // Check if user has admin role
  if (session.user.role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
};

export default DashboardLayout;
