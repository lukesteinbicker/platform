// Type declarations to fix geist font package type resolution
declare module 'geist/font/mono' {
  import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
  export const GeistMono: NextFontWithVariable;
}

declare module 'geist/font/sans' {
  import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
  export const GeistSans: NextFontWithVariable;
}
