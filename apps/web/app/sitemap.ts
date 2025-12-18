import fs from "node:fs";
import type { MetadataRoute } from "next";

const appFolders = fs.readdirSync("app", { withFileTypes: true });
const pages = appFolders
  .filter((file) => file.isDirectory())
  .filter((folder) => !folder.name.startsWith("_"))
  .filter((folder) => !folder.name.startsWith("("))
  .map((folder) => folder.name);
const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3001";
const protocol = baseUrl.startsWith("https") ? "https" : "http";
const url = new URL(baseUrl);

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: new URL("/", url).href,
    lastModified: new Date(),
  },
  ...pages.map((page) => ({
    url: new URL(page, url).href,
    lastModified: new Date(),
  })),
];

export default sitemap;
