import { analytics } from "@repo/analytics/server";

export const log = {
  info: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === "production") {
      analytics.capture({
        distinctId: "server",
        event: "$exception",
        properties: {
          $exception_message: message,
          $exception_level: "info",
          $exception_extra: args,
        },
      });
    } else {
      console.log(message, ...args);
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === "production") {
      analytics.capture({
        distinctId: "server",
        event: "$exception",
        properties: {
          $exception_message: message,
          $exception_level: "warning",
          $exception_extra: args,
        },
      });
    } else {
      console.warn(message, ...args);
    }
  },
  error: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === "production") {
      analytics.capture({
        distinctId: "server",
        event: "$exception",
        properties: {
          $exception_message: message,
          $exception_level: "error",
          $exception_extra: args,
        },
      });
    } else {
      console.error(message, ...args);
    }
  },
};
