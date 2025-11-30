import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deltadefence.sk";
  const locales = ["sk", "en", "ru", "de", "he"];
  const pages = ["", "/o-nas", "/vyroba", "/galeria", "/kontakt"];

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for all locales and pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    });
  });

  return routes;
}


