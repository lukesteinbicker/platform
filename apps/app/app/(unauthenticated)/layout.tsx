import { auth } from "@repo/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ModeToggle } from "@repo/design/components/mode-toggle";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  readonly children: ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  // Redirect authenticated users to the dashboard
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="container relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gradient-to-br from-muted via-muted/50 to-background p-10 lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/80 via-muted/40 to-transparent" />
        <div className="relative z-20 flex items-center font-semibold text-xl tracking-tight">
          Platform
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
