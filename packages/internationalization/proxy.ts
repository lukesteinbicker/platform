import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Internationalization middleware is optional
// If LANGUINE_PROJECT_ID is not set, this middleware does nothing
// To enable i18n, configure LANGUINE_PROJECT_ID and set up locale routing

export const internationalizationMiddleware = (request: NextRequest) => {
  // If i18n is not configured, just pass through
  if (!process.env.LANGUINE_PROJECT_ID) {
    return NextResponse.next();
  }

  // For now, i18n is disabled - just pass through
  // To enable, uncomment and configure next-international middleware
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

//https://nextjs.org/docs/app/building-your-application/routing/internationalization
//https://github.com/vercel/next.js/tree/canary/examples/i18n-routing
//https://github.com/QuiiBz/next-international
//https://next-international.vercel.app/docs/app-middleware-configuration
