"use client";

import { Button } from "@repo/design/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <main className="relative z-10 pt-32 pb-20 px-6 overflow-hidden">
      {/* Dot gradient background */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `radial-gradient(circle, var(--special) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to top right, transparent 0%, transparent 30%, black 80%)',
          WebkitMaskImage: 'linear-gradient(to top right, transparent 0%, transparent 30%, black 80%)',
        }}
      />
      
      <div className="max-w-6xl mx-auto animate-fade-in relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-medium text-foreground tracking-tight leading-[1.05] mb-8">
            N2O's monorepo template for rapid development
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
            Create a new project in minutes that can be extended and maintained for years
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="outline">
              Start Building
              <ArrowRight className="w-[18px] h-[18px]" />
            </Button>
            <Button variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
