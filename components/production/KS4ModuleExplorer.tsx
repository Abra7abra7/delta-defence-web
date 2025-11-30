"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import {
  Package,
  Settings,
  Droplet,
  Thermometer,
  Cpu,
  CheckCircle,
  Wind,
} from "lucide-react";

interface KS4ModuleExplorerProps {
  locale: string;
}

const moduleIcons: Record<string, any> = {
  filling: Package,
  milling: Settings,
  dosing: Droplet,
  heating: Thermometer,
  control: Cpu,
  quality: CheckCircle,
  dust: Wind,
};

export function KS4ModuleExplorer({ locale }: KS4ModuleExplorerProps) {
  const t = useTranslations("production.modules");
  
  const modules = [
    { id: "filling", name: t("filling"), description: t("fillingDesc") },
    { id: "milling", name: t("milling"), description: t("millingDesc") },
    { id: "dosing", name: t("dosing"), description: t("dosingDesc") },
    { id: "heating", name: t("heating"), description: t("heatingDesc") },
    { id: "control", name: t("control"), description: t("controlDesc") },
    { id: "quality", name: t("quality"), description: t("qualityDesc") },
    { id: "dust", name: t("dust"), description: t("dustDesc") },
  ];
  
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Module List */}
      <div className="space-y-3">
        {modules.map((module, index) => {
          const Icon = moduleIcons[module.id] || Package;
          const isSelected = selectedModule?.id === module.id;

          return (
            <motion.button
              key={module.id}
              onClick={() => setSelectedModule(module)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className={`w-full text-left glassmorphic p-4 rounded-lg border transition-all group ${
                isSelected
                  ? "border-tactical-green bg-tactical-green/10"
                  : "border-border hover:border-tactical-green/50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-tactical-green/20"
                      : "bg-tactical-green/10 group-hover:bg-tactical-green/20"
                  }`}
                >
                  <Icon
                    className={`${
                      isSelected ? "text-tactical-green" : "text-tactical-green/70"
                    }`}
                    size={24}
                  />
                </div>
                  <div className="flex-1">
                    <div
                      className={`font-mono font-semibold ${
                        isSelected ? "text-tactical-green" : "text-foreground"
                      }`}
                    >
                      {module.name}
                    </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    MODULE {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Module Details with Glitch Effect */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {selectedModule && (
            <motion.div
              key={selectedModule.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="glassmorphic border-tactical-green/50 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {(() => {
                      const Icon = moduleIcons[selectedModule.id] || Package;
                      return (
                        <div className="w-14 h-14 rounded-lg bg-tactical-green/20 flex items-center justify-center tactical-glow">
                          <Icon className="text-tactical-green" size={28} />
                        </div>
                      );
                    })()}
                    <CardTitle className="font-mono text-2xl">
                      {selectedModule.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Glitch Reveal Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    <GlitchText text={selectedModule.description} />
                  </motion.div>

                  {/* Technical Specs */}
                  <div className="border-t border-border pt-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-mono">
                        Status
                      </span>
                      <span className="flex items-center space-x-2 text-tactical-green font-mono">
                        <span className="w-2 h-2 rounded-full bg-tactical-green animate-pulse" />
                        <span>OPERATIONAL</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-mono">
                        Integration
                      </span>
                      <span className="text-foreground font-mono">
                        KS-4 LINE
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-mono">
                        Automation
                      </span>
                      <span className="text-foreground font-mono">FULL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-muted-foreground leading-relaxed"
      >
        {text}
      </motion.p>
      
      {/* Glitch layers */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          times: [0, 0.5, 1],
        }}
        className="absolute inset-0 text-tactical-green leading-relaxed pointer-events-none"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        {text}
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, 2, -2, 0],
        }}
        transition={{
          duration: 0.3,
          delay: 0.6,
          times: [0, 0.5, 1],
        }}
        className="absolute inset-0 text-tactical-blue leading-relaxed pointer-events-none"
        style={{ clipPath: "inset(50% 0 0 0)" }}
      >
        {text}
      </motion.p>
    </div>
  );
}


