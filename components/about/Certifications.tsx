"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    icon: Shield,
    title: "NATO AUTHORIZED",
    description: "Authorized NATO contractor since 2004",
    color: "tactical-green",
  },
  {
    icon: Award,
    title: "R&D LICENSE",
    description: "Certified research and development facility",
    color: "tactical-blue",
  },
  {
    icon: FileCheck,
    title: "ISO 9001",
    description: "Quality management system certified",
    color: "tactical-green",
  },
  {
    icon: CheckCircle2,
    title: "DEFENSE CONTRACTOR",
    description: "Authorized defense technology contractor",
    color: "tactical-blue",
  },
];

export function Certifications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Certifications & Authorizations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized and certified by international defense standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CertificationCardProps {
  cert: {
    icon: any;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

function CertificationCard({ cert, index }: CertificationCardProps) {
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="glassmorphic h-full border-border hover:border-tactical-green/50 transition-all group">
        <CardContent className="p-6 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tactical-green/10 group-hover:bg-tactical-green/20 transition-colors">
            <Icon className="text-tactical-green" size={32} />
          </div>
          <h3 className="font-mono font-bold text-sm tracking-wider">
            {cert.title}
          </h3>
          <p className="text-xs text-muted-foreground">{cert.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}


