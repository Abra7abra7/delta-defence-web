"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = t("home.heroHeadline");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-tactical-green animate-pulse" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tactical-green animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-sm tracking-[0.3em] text-tactical-green uppercase"
          >
            Delta Defence, a.s. Bratislava
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="font-mono text-foreground">
              {displayedText}
              <span className="inline-block w-1 h-12 md:h-16 bg-tactical-green ml-2 animate-pulse" />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t("home.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-tactical-green text-background hover:bg-tactical-green/90 tactical-glow font-mono group"
            >
              <Link href={`/${locale}/o-nas`}>
                {t("nav.findOutMore")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glassmorphic font-mono border-tactical-green/50 hover:border-tactical-green"
            >
              <Link href={`/${locale}/kontakt`}>{t("nav.contactUs")}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}


