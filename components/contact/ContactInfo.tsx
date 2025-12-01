"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Globe } from "lucide-react";

export function ContactInfo() {
  const info = [
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday: 08:00 - 17:00",
    },
    {
      icon: Shield,
      title: "Security Clearance",
      description: "NATO SECRET clearance available",
    },
    {
      icon: Globe,
      title: "Languages",
      description: "SK, EN, RU, DE",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {info.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glassmorphic p-6 rounded-lg border hover:border-tactical-blue/50 transition-all group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-tactical-blue/10 group-hover:bg-tactical-blue/20 transition-colors flex items-center justify-center flex-shrink-0">
                <Icon className="text-tactical-blue" size={24} />
              </div>
              <div>
                <h3 className="font-semibold font-mono text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}


