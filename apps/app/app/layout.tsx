import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design";
import { fonts } from "@repo/design/lib/fonts";
import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  const webUrl =
    process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3001";

  return (
    <html className={fonts} lang="en" suppressHydrationWarning>
      <body>
        <AnalyticsProvider>
          <DesignSystemProvider
            helpUrl={undefined}
            privacyUrl={new URL("/legal/privacy", webUrl).toString()}
            termsUrl={new URL("/legal/terms", webUrl).toString()}
          >
            {children}
          </DesignSystemProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
