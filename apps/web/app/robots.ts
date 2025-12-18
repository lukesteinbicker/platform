import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3001";
const protocol = baseUrl.startsWith("https") ? "https" : "http";
const url = new URL(baseUrl);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", url.href).href,
  };
}
