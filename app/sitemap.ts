import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return base ? [{ url: base.href, changeFrequency: "monthly", priority: 1 }] : [];
}
