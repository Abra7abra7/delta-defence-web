"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

interface TimelineProps {
  locale: string;
}

export function Timeline({ locale }: TimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("about.timeline");

  const events = [
    { year: "1993", title: t("1993") },
    { year: "2004", title: t("2004") },
    { year: "2005", title: t("2005") },
    { year: "2006", title: t("2006") },
    { year: "2011", title: t("2011") },
    { year: "2013", title: t("2013") },
    { year: "2016", title: t("2016") },
    { year: "2019", title: t("2019") },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tactical-blue/20 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  event: { year: string; title: string };
  index: number;
  isInView: boolean;
}

function TimelineItem({ event, index, isInView }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glassmorphic p-6 rounded-lg border border-border hover:border-tactical-blue/50 transition-all group"
        >
          <div
            className={`inline-flex items-center space-x-2 mb-3 ${
              isEven ? "md:flex-row-reverse md:space-x-reverse" : ""
            }`}
          >
            <Calendar className="text-tactical-blue" size={20} />
            <span className="font-mono text-2xl font-bold tactical-glow">
              {event.year}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {event.title}
          </p>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden md:block relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="w-6 h-6 rounded-full bg-tactical-blue tactical-glow border-4 border-background"
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}


