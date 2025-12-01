"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useState } from "react";

interface LanguageSwitcherProps {
  currentLocale: string;
}

const languages = [
  { code: "sk", label: "SK", name: "Slovenčina" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "he", label: "HE", name: "עברית" },
];

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Get current pathname without locale prefix
    const segments = pathname.split('/').filter(Boolean);
    
    // Remove first segment if it's a locale
    const locales = ['sk', 'en', 'ru', 'de', 'he'];
    if (segments.length > 0 && locales.includes(segments[0])) {
      segments.shift();
    }
    
    // Build path without locale (next-intl router will add it automatically)
    const pathWithoutLocale = segments.length > 0 ? `/${segments.join('/')}` : '/';
    
    // Use next-intl router with locale - it handles prefix automatically
    router.push(pathWithoutLocale, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 glassmorphic"
      >
        <Globe size={16} />
        <span className="font-mono">{currentLocale.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 glassmorphic rounded-lg shadow-lg border z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "w-full px-4 py-3 text-left text-sm transition-colors",
                  "hover:bg-tactical-blue/10 hover:text-tactical-blue",
                  "flex items-center justify-between",
                  currentLocale === lang.code
                    ? "bg-tactical-blue/20 text-tactical-blue font-medium"
                    : "text-foreground"
                )}
              >
                <span>{lang.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {lang.label}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


