"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "@/lib/assets";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  image: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}

export function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: LightboxProps) {
  const imageUrl = getAssetUrl(image);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(20px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
          className="absolute inset-0 bg-background/95"
          onClick={onClose}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
          {/* Close Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 glassmorphic hover:border-tactical-green"
          >
            <X size={24} />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={onPrev}
            className="absolute left-4 z-20 glassmorphic hover:border-tactical-green"
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            className="absolute right-4 z-20 glassmorphic hover:border-tactical-green"
          >
            <ChevronRight size={24} />
          </Button>

          {/* Image */}
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] w-full"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={imageUrl}
                alt={`Gallery image ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg border border-tactical-green/30 tactical-glow"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glassmorphic px-4 py-2 rounded-full border border-tactical-green/30">
              <span className="font-mono text-sm text-tactical-green">
                {currentIndex + 1} / {totalImages}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


