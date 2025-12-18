import { analytics } from "@repo/analytics/server";
import { log } from "./log";

export const parseError = (error: unknown): string => {
  let message = "An error occurred";

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = error.message as string;
  } else {
    message = String(error);
  }

  try {
    // PostHog error tracking
    if (error instanceof Error) {
      analytics.capture({
        distinctId: "server",
        event: "$exception",
        properties: {
          $exception_message: error.message,
          $exception_type: error.name,
          $exception_stack_trace_raw: error.stack,
        },
      });
    }
    log.error(`Parsing error: ${message}`);
  } catch (newError) {
    console.error("Error parsing error:", newError);
  }

  return message;
};
