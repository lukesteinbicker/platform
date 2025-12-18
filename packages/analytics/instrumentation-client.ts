import posthog from "posthog-js";

export const initializeAnalytics = () => {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) {
    return;
  }

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    defaults: "2025-05-24",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    // PostHog automatically captures exceptions when error tracking is enabled
    // The loaded callback sets up additional error handlers
    loaded: (posthog) => {
      if (typeof window !== "undefined") {
        // Capture unhandled JavaScript errors
        window.addEventListener("error", (event) => {
          posthog.capture("$exception", {
            $exception_message: event.message,
            $exception_type: event.error?.name || "Error",
            $exception_stack_trace_raw: event.error?.stack,
            $exception_filename: event.filename,
            $exception_lineno: event.lineno,
            $exception_colno: event.colno,
          });
        });

        // Capture unhandled promise rejections
        window.addEventListener("unhandledrejection", (event) => {
          const reason = event.reason;
          posthog.capture("$exception", {
            $exception_message:
              reason instanceof Error
                ? reason.message
                : typeof reason === "string"
                  ? reason
                  : String(reason),
            $exception_type:
              reason instanceof Error ? reason.name : "UnhandledRejection",
            $exception_stack_trace_raw:
              reason instanceof Error ? reason.stack : undefined,
          });
        });
      }
    },
  });
};
