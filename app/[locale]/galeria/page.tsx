import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { getTranslations } from "next-intl/server";
import { IMAGES } from "@/lib/images";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

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
              {t("gallery.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      {/* Gallery Sections */}
      <div className="space-y-20 pb-20">
        {/* Production & Technology */}
        <section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-tactical-green mb-8 border-b border-tactical-green/30 pb-4">
              {t("gallery.categories.production")}
            </h2>
            <MasonryGrid images={IMAGES.gallery.production} />
          </div>
        </section>

        {/* Products & Systems */}
        <section className="bg-muted/5 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-tactical-green mb-8 border-b border-tactical-green/30 pb-4">
              {t("gallery.categories.products")}
            </h2>
            <MasonryGrid images={IMAGES.gallery.products} />
          </div>
        </section>

        {/* Facilities & Infrastructure */}
        <section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-tactical-green mb-8 border-b border-tactical-green/30 pb-4">
              {t("gallery.categories.facilities")}
            </h2>
            <MasonryGrid images={IMAGES.gallery.facilities} />
          </div>
        </section>
      </div>
    </div>
  );
}


