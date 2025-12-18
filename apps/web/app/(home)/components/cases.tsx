import { Check } from "lucide-react";

export function Cases() {
  return (
    <>
      {/* Partners / Social Proof */}
      <section className="py-12 border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            POWERING REAL COMPANIES
          </p>
          <div className="flex flex-wrap items-center gap-12 md:gap-16 opacity-50">
            <div className="text-xl font-bold tracking-tighter text-foreground">
              GPS
            </div>
            <div className="text-xl font-bold tracking-tighter text-foreground">
              NEUMO
            </div>
            <div className="text-xl font-bold tracking-tighter text-foreground">
              C3.AI
            </div>
            <div className="text-xl font-bold tracking-tighter text-foreground">
              LEONARDO DRS
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="border-y border-border/30 bg-muted/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="py-24 px-6 md:pr-12 border-b md:border-b-0 md:border-r border-border/30">
            <h2 className="text-3xl font-medium text-foreground tracking-tight mb-6">
              Designed for developers
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              All of the tools you need, nothing you don't.
            </p>
            <ul className="space-y-4 text-sm text-foreground">
            <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-constructive" />
                Robust authentication with Better Auth
              </li>
            <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-constructive" />
                Builtin caching with Turborepo
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-constructive" />
                Full query type safety with Kysely
              </li>
            </ul>
          </div>
          <div className="py-10 px-6 md:pl-12 bg-background font-mono text-sm leading-7 text-muted-foreground overflow-x-auto">
            <pre className="text-sm">
              <code>
                <span className="text-primary">import</span> {"{ "}
                <span className="text-constructive">betterAuth</span> {"}"} <span className="text-primary">from</span> <span className="text-constructive">&quot;better-auth&quot;</span>;
                <br />
                <span className="text-primary">import</span> {"{ "}
                <span className="text-constructive">database</span> {"}"} <span className="text-primary">from</span> <span className="text-constructive">&quot;@repo/database&quot;</span>;
                <br />
                <br />
                <span className="text-primary">export const</span> <span className="text-foreground">auth</span> = <span className="text-constructive">betterAuth</span>({"{"}
                <br />
                {"  "}<span className="text-primary">database</span>,
                <br />
                {"  "}<span className="text-primary">plugins</span>: [<span className="text-constructive">nextCookies</span>()],
                <br />
                {"}"});
              </code>
            </pre>

            <div className="mt-8 pt-8 border-t border-border/50">
              <pre className="text-sm">
                <code>
                  {"{"}
                  <br />
                  {"  "}
                  <span className="text-primary">&quot;scripts&quot;</span>: {"{"}
                  <br />
                  {"    "}
                  <span className="text-primary">&quot;build&quot;</span>: <span className="text-constructive">&quot;turbo build&quot;</span>,
                  <br />
                  {"    "}
                  <span className="text-primary">&quot;dev&quot;</span>: <span className="text-constructive">&quot;turbo dev&quot;</span>,
                  <br />
                  {"    "}
                  <span className="text-primary">&quot;migrate:dev&quot;</span>: <span className="text-constructive">&quot;pnpm --filter @repo/database migrate:dev&quot;</span>
                  <br />
                  {"  "}
                  {"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <pre className="text-sm">
                <code>
                  <span className="text-primary">export interface</span> <span className="text-foreground">UserTable</span> {"{"}
                  <br />
                  {"  "}<span className="text-primary">id</span>: <span className="text-constructive">Generated</span>&lt;<span className="text-primary">string</span>&gt;;
                  <br />
                  {"  "}<span className="text-primary">name</span>: <span className="text-primary">string</span>;
                  <br />
                  {"  "}<span className="text-primary">email</span>: <span className="text-primary">string</span>;
                  <br />
                  {"  "}<span className="text-primary">createdAt</span>: <span className="text-constructive">Generated</span>&lt;<span className="text-primary">Date</span>&gt;;
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
