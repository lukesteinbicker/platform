import { Button } from "@repo/design/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-8">
          Ready to get started?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline">
            <Link href="/sign-up">
            Sign Up
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/contact">
            Talk to us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
