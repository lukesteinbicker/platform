"use client";

import { useState } from "react";

export function Stats() {
  const [liveMode, setLiveMode] = useState(false);

  return (
    <div
      className="max-w-6xl mx-auto mt-24 animate-fade-in px-6"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="border-t border-border/50 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Metrics */}
        <div className="lg:col-span-1 space-y-12">
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            IDEAL FOR CREATING RESILIENT APPS
          </p>
          <div>
            <p className="text-sm text-muted-foreground mb-2 font-medium">
              Platform Volume
            </p>
            <div className="text-3xl font-normal tracking-tight flex items-baseline gap-2">
              $000,000,000.00
              <span className="text-sm text-constructive font-medium">
                +0.0%
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2 font-medium">
              Active Accounts
            </p>
            <div className="text-3xl font-normal tracking-tight flex items-baseline gap-2">
              000,000
              <span className="text-sm text-muted-foreground font-medium">
                Total
              </span>
            </div>
          </div>
        </div>

        {/* Right: Simplified Transaction Stream */}
        <div className="lg:col-span-2">
          <p className="text-sm text-muted-foreground mb-6 font-medium">
            Recent API Requests
          </p>
          <div className="space-y-0">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 pb-3 border-b border-border/50 text-xs text-muted-foreground font-medium uppercase tracking-wider">
              <div className="col-span-2">Method</div>
              <div className="col-span-6">Endpoint</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Time</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 py-4 border-b border-border/30 items-center group hover:bg-accent/5 transition-colors">
              <div className="col-span-2 font-mono text-xs text-primary">
                POST
              </div>
              <div className="col-span-6 font-mono text-xs text-foreground">
                /v1/cards/issue_virtual
              </div>
              <div className="col-span-2">
                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-constructive/10 text-constructive font-medium">
                  200 OK
                </div>
              </div>
              <div className="col-span-2 text-right text-xs text-muted-foreground">
                24ms
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-4 py-4 border-b border-border/30 items-center group hover:bg-accent/5 transition-colors">
              <div className="col-span-2 font-mono text-xs text-primary">
                GET
              </div>
              <div className="col-span-6 font-mono text-xs text-foreground">
                /v1/accounts/acct_192x8
              </div>
              <div className="col-span-2">
                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-constructive/10 text-constructive font-medium">
                  200 OK
                </div>
              </div>
              <div className="col-span-2 text-right text-xs text-muted-foreground">
                12ms
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 gap-4 py-4 border-b border-border/30 items-center group hover:bg-accent/5 transition-colors">
              <div className="col-span-2 font-mono text-xs text-accent-foreground">
                POST
              </div>
              <div className="col-span-6 font-mono text-xs text-foreground">
                /v1/transfers/create
              </div>
              <div className="col-span-2">
                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-constructive/10 text-constructive font-medium">
                  200 OK
                </div>
              </div>
              <div className="col-span-2 text-right text-xs text-muted-foreground">
                89ms
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-12 gap-4 py-4 border-b border-border/30 items-center group hover:bg-accent/5 transition-colors">
              <div className="col-span-2 font-mono text-xs text-primary">
                POST
              </div>
              <div className="col-span-6 font-mono text-xs text-foreground">
                /v1/webhooks/verify
              </div>
              <div className="col-span-2">
                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-constructive/10 text-constructive font-medium">
                  200 OK
                </div>
              </div>
              <div className="col-span-2 text-right text-xs text-muted-foreground">
                45ms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
