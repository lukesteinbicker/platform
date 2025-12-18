"use client";

import Link from "next/link";
import { config } from "../config";

export const Header = () => {
  const { appName } = config;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-foreground font-semibold tracking-tight text-lg">
            {appName}
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <Link href="#" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Solutions
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Developers
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
            className="text-sm text-foreground font-medium hover:text-muted-foreground transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-up`}
            className="text-sm bg-card text-card-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
