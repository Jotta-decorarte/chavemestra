import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return base ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", base).href } : { rules: { userAgent: "*", disallow: "/" } };
}
