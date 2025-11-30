"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/o-nas`, label: t("nav.about") },
    { href: `/${locale}/vyroba`, label: t("nav.production") },
    { href: `/${locale}/galeria`, label: t("nav.gallery") },
    { href: `/${locale}/kontakt`, label: t("nav.contact") },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="font-mono text-xl font-bold tracking-wider tactical-glow">
              DELTA <span className="text-tactical-green">DEFENCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md",
                  "hover:bg-muted hover:text-tactical-green",
                  isActive(item.href)
                    ? "text-tactical-green border-b-2 border-tactical-green"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <Button
              asChild
              className="bg-tactical-green text-background hover:bg-tactical-green/90 tactical-glow font-mono"
            >
              <Link href={`/${locale}/kontakt`}>{t("nav.contactUs")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "bg-tactical-green/10 text-tactical-green"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2 flex items-center space-x-4">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


