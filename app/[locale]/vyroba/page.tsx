import { KS4ModuleExplorer } from "@/components/production/KS4ModuleExplorer";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { IMAGES, getAssetUrl } from "@/lib/images";

export default async function ProductionPage({
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
              {t("production.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("home.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Production Images Gallery */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-mono text-tactical-green mb-12 text-center">
            KS-4 Production Line
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.production.map((image, index) => (
              <div
                key={image}
                className="relative aspect-video rounded-lg overflow-hidden border border-border hover:border-tactical-green/50 transition-all group"
              >
                <Image
                  src={getAssetUrl(image)}
                  alt={`KS-4 Production line ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-tactical-green font-mono text-sm">
                    MODULE {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KS-4 Feature Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-mono tactical-glow">
                {t("production.ks4Title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {t("production.ks4Description")}
              </p>
            </div>

            <KS4ModuleExplorer locale={locale} />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphic p-8 rounded-lg border hover:border-tactical-green/50 transition-all">
              <h3 className="text-xl font-bold font-mono mb-4 text-tactical-green">
                Automated Production
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.portfolioItems.ammunition")}
              </p>
            </div>

            <div className="glassmorphic p-8 rounded-lg border hover:border-tactical-green/50 transition-all">
              <h3 className="text-xl font-bold font-mono mb-4 text-tactical-green">
                Vehicle Modernization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.portfolioItems.vehicles")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


