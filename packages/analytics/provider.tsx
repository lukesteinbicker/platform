import { GoogleAnalytics } from "@next/third-parties/google";
import type { ReactNode } from "react";

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

const NEXT_PUBLIC_GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <>
    {children}
    {NEXT_PUBLIC_GA_MEASUREMENT_ID && (
      <GoogleAnalytics gaId={NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    )}
  </>
);
