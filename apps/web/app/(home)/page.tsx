"use client";

import { Cases } from "./components/cases";
import { CTA } from "./components/cta";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Stats } from "./components/stats";

export default function Home() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Hero />
      <Stats />
      <Cases />
      <Features />
      <CTA />
    </div>
  );
}
