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
  ChevronDown,
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
  
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setExpandedModuleId(expandedModuleId === moduleId ? null : moduleId);
  };

  return (
    <div className="space-y-3">
      {modules.map((module, index) => {
        const Icon = moduleIcons[module.id] || Package;
        const isExpanded = expandedModuleId === module.id;

        return (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glassmorphic rounded-lg border border-border hover:border-tactical-blue/50 transition-all overflow-hidden"
          >
            {/* Module Header - Clickable */}
            <button
              onClick={() => toggleModule(module.id)}
              className={`w-full text-left p-4 transition-all group ${
                isExpanded ? "bg-tactical-blue/10" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-tactical-blue/20"
                        : "bg-tactical-blue/10 group-hover:bg-tactical-blue/20"
                    }`}
                  >
                    <Icon
                      className={`${
                        isExpanded ? "text-tactical-blue" : "text-tactical-blue/70"
                      }`}
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-mono font-semibold ${
                        isExpanded ? "text-tactical-blue" : "text-foreground"
                      }`}
                    >
                      {module.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      MODULE {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                
                {/* Chevron indicator */}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    className={`${
                      isExpanded ? "text-tactical-blue" : "text-muted-foreground"
                    }`}
                    size={20}
                  />
                </motion.div>
              </div>
            </button>

            {/* Module Details - Collapsible */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-tactical-blue/20">
                    {/* Glitch Reveal Effect */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="mb-6"
                    >
                      <GlitchText text={module.description} />
                    </motion.div>

                    {/* Technical Specs */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="space-y-3 pt-4 border-t border-border"
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground font-mono">
                          Status
                        </span>
                        <span className="flex items-center space-x-2 text-tactical-blue font-mono">
                          <span className="w-2 h-2 rounded-full bg-tactical-blue animate-pulse" />
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
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
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
        className="absolute inset-0 text-tactical-blue leading-relaxed pointer-events-none"
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


