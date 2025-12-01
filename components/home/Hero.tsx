"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Target } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES, getAssetUrl } from "@/lib/images";

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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gunmetal">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-military.png"
          alt="Delta Defence Military Technology"
          fill
          className="object-cover opacity-50 grayscale-[20%] contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gunmetal/90 via-gunmetal/40 to-gunmetal" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-10" />

      {/* HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-tactical-blue/50 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-tactical-blue/50 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-tactical-blue/50 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-tactical-blue/50 rounded-br-lg" />

        {/* Crosshairs */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 text-tactical-blue/30">
          <Crosshair size={24} />
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 text-tactical-blue/30">
          <Crosshair size={24} />
        </div>

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-tactical-blue/20 to-transparent" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-tactical-blue animate-pulse" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tactical-blue animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
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
            className="inline-flex items-center gap-2 px-4 py-1 border border-tactical-blue/30 bg-tactical-blue/10 rounded-full backdrop-blur-sm"
          >
            <Target size={14} className="text-tactical-blue animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] text-tactical-blue uppercase">
              Delta Defence Systems
            </span>
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase">
            <span className="font-mono text-white drop-shadow-lg">
              {displayedText}
              <span className="inline-block w-3 h-10 md:h-14 bg-tactical-blue ml-2 animate-pulse align-middle" />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t("home.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            <Button
              asChild
              size="lg"
              className="relative h-14 px-8 bg-tactical-blue text-gunmetal hover:bg-tactical-blue/90 font-mono font-bold tracking-wider uppercase tactical-mask group overflow-hidden"
            >
              <Link href={`/${locale}/o-nas`}>
                <span className="relative z-10 flex items-center">
                  {t("nav.findOutMore")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="relative h-14 px-8 bg-transparent border-tactical-blue/50 text-tactical-blue hover:bg-tactical-blue/10 hover:text-tactical-blue hover:border-tactical-blue font-mono font-bold tracking-wider uppercase tactical-mask"
            >
              <Link href={`/${locale}/kontakt`}>
                {t("nav.contactUs")}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gunmetal to-transparent" />
    </section>
  );
}


