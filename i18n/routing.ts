import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sk", "en", "ru", "de"],

  // Used when no locale matches
  defaultLocale: "sk",
  
  // Locale prefix strategy:
  // - "as-needed": Default locale (sk) has no prefix, others do
  // - "always": All locales have prefix (better for SEO)
  localePrefix: "as-needed",
  
  // Automatic locale detection from browser
  localeDetection: true,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

