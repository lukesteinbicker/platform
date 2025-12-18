"use client";

import "@repo/design/styles/globals.css";
import { analytics } from "@repo/analytics";
import { Button } from "@repo/design/components/ui/button";
import { fonts } from "@repo/design/lib/fonts";
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
                <svg
                  className="h-8 w-8 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                API Error
              </h1>
              <p className="text-muted-foreground">
                The API encountered an unexpected error. Please try again.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => reset()} size="lg">
                Try again
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
