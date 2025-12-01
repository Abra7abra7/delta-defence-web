"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Shield, Cog } from "lucide-react";

export function StatsCounter() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Calendar,
      value: 1993,
      label: t("home.since"),
      suffix: "",
    },
    {
      icon: Shield,
      value: 2004,
      label: t("home.natoPartner"),
      suffix: "",
    },
    {
      icon: Cog,
      value: 30,
      label: t("stats.yearsExperience"),
      suffix: t("stats.plus"),
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              stat={stat}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: {
    icon: any;
    value: number;
    label: string;
    suffix: string;
  };
  isInView: boolean;
  delay: number;
}

function StatItem({ stat, isInView, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glassmorphic p-8 rounded-lg border text-center space-y-4 hover:border-tactical-green/50 transition-all group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tactical-green/10 group-hover:bg-tactical-green/20 transition-colors">
        <Icon className="text-tactical-green" size={32} />
      </div>
      <div className="font-mono text-5xl font-bold tactical-glow">
        {count}
        {stat.suffix}
      </div>
      <div className="text-muted-foreground font-medium">{stat.label}</div>
    </motion.div>
  );
}


