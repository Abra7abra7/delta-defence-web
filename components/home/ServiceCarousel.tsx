"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, Wrench } from "lucide-react";

import { IMAGES, getAssetUrl } from "@/lib/images";
import Image from "next/image";

export function ServiceCarousel() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Package,
      title: t("production.ks4Title"),
      description: t("production.ks4Description"),
      color: "tactical-blue",
      image: IMAGES.production[0],
    },
    {
      icon: Truck,
      title: t("home.services.vehicles.title"),
      description: t("home.services.vehicles.description"),
      color: "tactical-blue",
      image: "/images/service-vehicles.jpg", // Local override
    },
    {
      icon: Wrench,
      title: t("home.services.artillery.title"),
      description: t("home.services.artillery.description"),
      color: "tactical-blue",
      image: "/images/service-artillery.png", // Local override
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
    image: string;
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
      <Card className="relative h-full border-border hover:border-tactical-blue/50 transition-all duration-300 group overflow-hidden bg-gunmetal">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image.startsWith('/') ? service.image : getAssetUrl(service.image)}
            alt={service.title}
            fill
            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gunmetal via-gunmetal/80 to-gunmetal/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <CardHeader>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-tactical-blue/10 group-hover:bg-tactical-blue/20 transition-colors mb-4 border border-tactical-blue/20">
              <Icon className="text-tactical-blue" size={28} />
            </div>
            <CardTitle className="font-mono text-xl text-white">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-gray-400 leading-relaxed">
              {service.description}
            </CardDescription>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}


