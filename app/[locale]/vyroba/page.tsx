import { KS4ModuleExplorer } from "@/components/production/KS4ModuleExplorer";
import { getTranslations } from "next-intl/server";

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


