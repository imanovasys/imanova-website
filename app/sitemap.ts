import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "our-services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "our-approach", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "resources", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "contact-us", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}/${route.path}${route.path ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
