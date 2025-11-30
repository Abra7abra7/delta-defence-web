'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES, getAssetUrl } from '@/lib/images';

export function MasonryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = IMAGES.gallery;

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid mb-4 cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg border border-tactical-green/30 hover:border-tactical-green transition-all duration-300 shadow-lg hover:shadow-tactical-green/50">
              <Image
                src={getAssetUrl(image)}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-tactical-green font-mono text-sm">
                  Click to view full size
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-void-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-off-white hover:text-tactical-green transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh]"
          >
            <Image
              src={getAssetUrl(selectedImage)}
              alt="Full size image"
              width={1920}
              height={1080}
              className="object-contain max-h-[90vh] rounded-lg border border-tactical-green/50"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
