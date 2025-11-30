import { type Locale, type PageData, type ProjectData } from "@/types";
import dataJson from "@/data.json";

const data = dataJson as ProjectData;

/**
 * Get page data for a specific locale and path
 */
export function getPageData(locale: Locale, pagePath: string): PageData | null {
  // Normalize path - remove leading/trailing slashes
  const normalizedPath = pagePath.replace(/^\/|\/$/g, "");
  
  // For DE (German) and HE (Hebrew), fallback to EN since we don't have their content in data.json
  const effectiveLocale = (locale === "de" || locale === "he") ? "en" : locale;
  
  // Build the full path with locale
  let searchPath = "";
  if (effectiveLocale === "sk") {
    searchPath = normalizedPath || "/index.html";
  } else {
    searchPath = normalizedPath ? `${effectiveLocale}/${normalizedPath}` : effectiveLocale;
  }
  
  // Find the page
  const page = data.pages.find((p) => {
    const pagePath = p.path.replace(/^\/|\/$/g, "");
    return pagePath === searchPath || pagePath === searchPath + "/" || pagePath === normalizedPath;
  });
  
  return page || null;
}

/**
 * Get all pages for a specific locale
 */
export function getLocalePages(locale: Locale): PageData[] {
  // For DE (German) and HE (Hebrew), fallback to EN pages
  const effectiveLocale = (locale === "de" || locale === "he") ? "en" : locale;
  
  if (effectiveLocale === "sk") {
    return data.pages.filter(
      (p) => !p.path.startsWith("en/") && !p.path.startsWith("ru/") && !p.path.startsWith("de/")
    );
  }
  return data.pages.filter((p) => p.path.startsWith(`${effectiveLocale}/`));
}

/**
 * Get navigation items for a locale
 */
export function getNavigation(locale: Locale): Array<{ href: string; label: string }> {
  const localePrefix = locale === "sk" ? "" : `/${locale}`;
  
  return [
    { href: `${localePrefix}/`, label: "nav.home" },
    { href: `${localePrefix}/o-nas`, label: "nav.about" },
    { href: `${localePrefix}/vyroba`, label: "nav.production" },
    { href: `${localePrefix}/galeria`, label: "nav.gallery" },
    { href: `${localePrefix}/kontakt`, label: "nav.contact" },
  ];
}

/**
 * Get KS-4 module data from production page
 */
export function getKS4Modules(locale: Locale) {
  const productionPage = getPageData(locale, "vyroba");
  if (!productionPage) return [];
  
  const modules = [
    { 
      id: "filling",
      name: "production.modules.filling",
      description: productionPage.content_blocks.paragraphs[0] || "",
    },
    {
      id: "milling", 
      name: "production.modules.milling",
      description: productionPage.content_blocks.paragraphs[1] || "",
    },
    {
      id: "dosing",
      name: "production.modules.dosing", 
      description: productionPage.content_blocks.paragraphs[3] || "",
    },
    {
      id: "heating",
      name: "production.modules.heating",
      description: productionPage.content_blocks.paragraphs[5] || "",
    },
    {
      id: "control",
      name: "production.modules.control",
      description: productionPage.content_blocks.paragraphs[6] || "",
    },
    {
      id: "quality",
      name: "production.modules.quality",
      description: productionPage.content_blocks.paragraphs[8] || "",
    },
    {
      id: "dust",
      name: "production.modules.dust",
      description: productionPage.content_blocks.paragraphs[9] || "",
    },
  ];
  
  return modules;
}

/**
 * Get history timeline data
 */
export function getHistoryTimeline(locale: Locale) {
  const aboutPage = getPageData(locale, "o-nas");
  if (!aboutPage) return [];
  
  // Map corresponding paragraphs to years
  const events = [
    { year: "1993", title: aboutPage.content_blocks.paragraphs[10] || "" },
    { year: "2004", title: aboutPage.content_blocks.paragraphs[12] || "" },
    { year: "2005", title: aboutPage.content_blocks.paragraphs[14] || "" },
    { year: "2006", title: aboutPage.content_blocks.paragraphs[16] || "" },
    { year: "2011", title: aboutPage.content_blocks.paragraphs[11] || "" },
    { year: "2013", title: aboutPage.content_blocks.paragraphs[13] || "" },
    { year: "2016", title: aboutPage.content_blocks.paragraphs[15] || "" },
    { year: "2019", title: aboutPage.content_blocks.paragraphs[17] || "" },
  ];
  
  return events.filter((e) => e.title);
}

/**
 * Get gallery images
 */
export function getGalleryImages(locale: Locale): string[] {
  const galleryPage = getPageData(locale, "galeria");
  return galleryPage?.assets.images || [];
}

/**
 * Get contact info
 */
export function getContactInfo(locale: Locale) {
  const contactPage = getPageData(locale, "kontakt");
  if (!contactPage) return null;
  
  return {
    paragraphs: contactPage.content_blocks.paragraphs,
    images: contactPage.assets.images,
  };
}


