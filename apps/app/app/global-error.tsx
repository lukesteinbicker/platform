"use client";

import "./styles.css";
import { analytics } from "@repo/analytics";
import { Button } from "@repo/design/components/ui/button";
import { fonts } from "@repo/design/lib/fonts";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

type GlobalErrorProperties = {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProperties) => {
  useEffect(() => {
    analytics.capture("$exception", {
      $exception_message: error?.message || String(error),
      $exception_type: error?.name || "Error",
      $exception_stack_trace_raw: error?.stack,
      $exception_digest: error?.digest,
    });
  }, [error]);

  return (
    <html className={fonts} lang="en">
      <body className="min-h-screen bg-background antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="mx-auto max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-destructive/10 p-4">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Something went wrong
              </h1>
              <p className="text-muted-foreground">
                We encountered an unexpected error. Please try again.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => reset()} size="lg">
                Try again
              </Button>
              <Button
                onClick={() => (window.location.href = "/sign-in")}
                variant="outline"
                size="lg"
              >
                Go to sign in
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
