"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetUrl } from "@/lib/assets";
import { Lightbox } from "./Lightbox";

interface MasonryGridProps {
  images: string[];
}

export function MasonryGrid({ images }: MasonryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const navigatePrev = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Filter out duplicate images and logo
  const uniqueImages = images.filter(
    (img, index, self) =>
      self.indexOf(img) === index &&
      !img.includes("a5e5533398a21844b6b0f3b82529ca20") // Filter out logo
  );

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {uniqueImages.map((image, index) => (
          <GalleryItem
            key={`${image}-${index}`}
            image={image}
            index={index}
            onClick={() => openLightbox(image, index)}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={navigateNext}
          onPrev={navigatePrev}
          currentIndex={selectedIndex}
          totalImages={uniqueImages.length}
        />
      )}
    </>
  );
}

interface GalleryItemProps {
  image: string;
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const imageUrl = getAssetUrl(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="break-inside-avoid mb-4 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg border border-border hover:border-tactical-green/50 transition-all glassmorphic">
        <div className="relative aspect-auto">
          <Image
            src={imageUrl}
            alt={`Gallery image ${index + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-tactical-green/0 group-hover:bg-tactical-green/10 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="text-tactical-green font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              VIEW FULL SIZE
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


