"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, Wrench } from "lucide-react";

export function ServiceCarousel() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Package,
      title: t("production.ks4Title"),
      description: t("production.ks4Description"),
      color: "tactical-green",
    },
    {
      icon: Truck,
      title: "Vehicle Modernization",
      description: "Modernization of armored vehicles and military transport systems with cutting-edge technology.",
      color: "tactical-blue",
    },
    {
      icon: Wrench,
      title: "Artillery Systems",
      description: "Technologies and technological processes for NORICUM GHN-45 artillery system, 155mm howitzer.",
      color: "tactical-green",
    },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            {t("home.capabilities")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("about.portfolio")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    icon: any;
    title: string;
    description: string;
    color: string;
  };
  isInView: boolean;
  delay: number;
}

function ServiceCard({ service, isInView, delay }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="glassmorphic h-full border-border hover:border-tactical-green/50 transition-all duration-300 group">
        <CardHeader>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-tactical-green/10 group-hover:bg-tactical-green/20 transition-colors mb-4">
            <Icon className="text-tactical-green" size={28} />
          </div>
          <CardTitle className="font-mono text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}


