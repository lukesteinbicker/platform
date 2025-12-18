import Link from "next/link";
import {
  ArrowRight,
  Database,
  BarChart3,
  Rocket,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@repo/design/components/ui/card";

export function Features() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-medium text-foreground mb-10 tracking-tight">Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {/* Feature 1 - Neon Database */}
        <Card className="bg-gradient-to-br from-background to-muted/20 hover:bg-gradient-to-br hover:from-accent/30 hover:to-muted/30 transition-all duration-300">
          <CardHeader>
          <h3 className="text-2xl font-medium text-foreground mb-3 tracking-tight">
            Database
          </h3>
          </CardHeader>
          <CardContent>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Serverless Postgres with branching, instant scaling, and automatic backups. Built for modern applications.
          </p>
          <Link
            href="https://planetscale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium text-sm hover:text-muted-foreground inline-flex items-center gap-1"
          >
            Visit PlanetScale <ArrowRight className="w-[14px] h-[14px]" />
          </Link>
          </CardContent>
        </Card>

        {/* Feature 2 - PostHog Analytics */}
        <Card className="bg-gradient-to-br from-background to-muted/20 hover:bg-gradient-to-br hover:from-accent/30 hover:to-muted/30 transition-all duration-300">
            <CardHeader>
            <h3 className="text-2xl font-medium text-foreground mb-3 tracking-tight">
            Analytics
          </h3>
          </CardHeader>
          <CardContent>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Product analytics, feature flags, session replay, and A/B testing. All open-source and privacy-friendly.
          </p>
          <Link
            href="https://posthog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium text-sm hover:text-muted-foreground inline-flex items-center gap-1"
          >
            Visit PostHog <ArrowRight className="w-[14px] h-[14px]" />
          </Link>
          </CardContent>
        </Card>

        {/* Feature 3 - Vercel Deployment */}
        <Card className="bg-gradient-to-br from-background to-muted/20 hover:bg-gradient-to-br hover:from-accent/30 hover:to-muted/30 transition-all duration-300">
          <CardHeader>
            <h3 className="text-2xl font-medium text-foreground mb-3 tracking-tight">
            Deployment
          </h3>
          </CardHeader>
          <CardContent>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Deploy with zero configuration. Automatic HTTPS, global CDN, and instant rollbacks. Built for Next.js.
          </p>
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium text-sm hover:text-muted-foreground inline-flex items-center gap-1"
          >
            Visit Vercel <ArrowRight className="w-[14px] h-[14px]" />
          </Link>
          </CardContent>
        </Card>

        {/* Feature 4 - Resend Email */}
        <Card className="bg-gradient-to-br from-background to-muted/20 hover:bg-gradient-to-br hover:from-accent/30 hover:to-muted/30 transition-all duration-300">
          <CardHeader>
            <h3 className="text-2xl font-medium text-foreground mb-3 tracking-tight">
            Email
          </h3>
          </CardHeader>
          <CardContent>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Send transactional emails with React Email templates. Developer-friendly API with high deliverability.
          </p>
          <Link
            href="https://resend.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium text-sm hover:text-muted-foreground inline-flex items-center gap-1"
          >
            Visit Resend <ArrowRight className="w-[14px] h-[14px]" />
          </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
