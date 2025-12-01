"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, CheckCircle2 } from "lucide-react";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations();

  const navigation = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/o-nas`, label: t("nav.about") },
    { href: `/${locale}/vyroba`, label: t("nav.production") },
    { href: `/${locale}/galeria`, label: t("nav.gallery") },
    { href: `/${locale}/kontakt`, label: t("nav.contact") },
  ];

  const certifications = [
    t("footer.certifications.nato"),
    t("footer.certifications.rnd"),
    t("footer.certifications.iso"),
    t("footer.certifications.defense"),
  ];

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-mono text-xl font-bold tracking-wider">
              DELTA <span className="text-tactical-blue">DEFENCE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("home.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-tactical-blue uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-tactical-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-tactical-blue uppercase tracking-wider">
              {t("footer.newsletter")}
            </h3>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Email"
                className="glassmorphic"
              />
              <Button
                size="sm"
                className="bg-tactical-blue text-background hover:bg-tactical-blue/90"
              >
                →
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Certifications */}
        <div className="py-6">
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center space-x-2 text-xs font-mono text-muted-foreground"
              >
                <CheckCircle2 size={16} className="text-tactical-blue" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield size={16} className="text-tactical-blue" />
            <span>
              © {new Date().getFullYear()} DELTA DEFENCE, a.s. {t("footer.rights")}
            </span>
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            {t("footer.since")}
          </div>
        </div>
      </div>
    </footer>
  );
}


