import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { getGalleryImages } from "@/lib/data";
import { type Locale } from "@/types";
import { getTranslations } from "next-intl/server";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();
  const images = getGalleryImages(locale as Locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tactical-glow">
              {t("gallery.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our production facilities, technologies, and defense systems
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <MasonryGrid images={images} />
        </div>
      </section>
    </div>
  );
}


